import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../data/store";
import style from "../styles/Cards.module.css";
import UnitEquipmentTable from "../views/UnitEquipmentTable";
import {
  Paper,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Stack,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import RulesService from "../services/RulesService";
import { ArmyState, IGameRule } from "../data/armySlice";
import { groupBy, groupMap, intersperse } from "../services/Helpers";
import UnitService, { IFullUnit } from "../services/UnitService";
import UpgradeService from "../services/UpgradeService";
import _ from "lodash";
import { ISelectedUnit, IUpgradeGainsItem, IUpgradeGainsRule } from "../data/interfaces";
import RuleList from "./components/RuleList";
import { IViewPreferences, listContainsPyschic } from "../pages/view";
import { getFlatTraitDefinitions, ITrait } from "../data/campaign";
import LinkIcon from "@mui/icons-material/Link";
import { ListState } from "../data/listSlice";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ViewCardsProps {
  prefs: IViewPreferences;
}

export default function ViewCards({ prefs }: ViewCardsProps) {
  const list = useSelector((state: RootState) => state.list);
  const army = useSelector((state: RootState) => state.army);

  const gameRules = army.rules;
  const armyRules = army.loadedArmyBooks.flatMap((x) => x.specialRules);
  const ruleDefinitions: IGameRule[] = gameRules.concat(armyRules);
  const traitDefinitions = getFlatTraitDefinitions();

  const units = UnitService.getFullUnitList(list?.units, true);
  const unitGroups = UnitService.getGroupedDisplayUnits(units);
  const usedRules = _.flatten(
    list?.units.map((u) => UnitService.getAllRules(u).map((r) => r.name))
  );

  const getUnitCard = (unit: IFullUnit, unitCount: number, heroes: ISelectedUnit[]) => {
    return (
      <>
        {heroes.map((hero) => (
          <UnitCard
            unit={hero}
            attachedTo={unit.unit}
            pointCost={UpgradeService.calculateUnitTotal(hero)}
            count={1}
            prefs={prefs}
            ruleDefinitions={ruleDefinitions}
            traitDefinitions={traitDefinitions}
          />
        ))}
        <UnitCard
          unit={unit.unit}
          attachedTo={null}
          pointCost={unit.unitPoints}
          count={unitCount}
          prefs={prefs}
          ruleDefinitions={ruleDefinitions}
          traitDefinitions={traitDefinitions}
        />
      </>
    );
  };

  return (
    <Container maxWidth={false}>
      <div className={style.grid}>
        {prefs.combineSameUnits
          ? Object.values(unitGroups).map((grp: IFullUnit[], i) => {
              const unit = grp[0];
              const count = grp.length;
              return getUnitCard(
                unit,
                count,
                grp.flatMap((x) => x.heroes)
              );
            })
          : units.map((unit, i) => getUnitCard(unit, 1, unit.heroes))}
        {prefs.showPsychic && <SpellsCard army={army} list={list} />}
      </div>
      {!prefs.showFullRules && (
        <SpecialRulesCard
          usedRules={usedRules}
          ruleDefinitions={ruleDefinitions.concat(traitDefinitions as any[])}
        />
      )}
    </Container>
  );
}

interface UnitCardProps {
  unit: ISelectedUnit;
  attachedTo: ISelectedUnit;
  pointCost: number;
  count: number;
  prefs: IViewPreferences;
  ruleDefinitions: any;
  traitDefinitions: ITrait[];
}

export function UnitCard({
  unit,
  attachedTo,
  pointCost,
  count,
  prefs,
  ruleDefinitions,
  traitDefinitions,
}: UnitCardProps) {
  const toughness = toughFromUnit(unit);
  const tinyScreen = useMediaQuery("(max-width: 420px)", { noSsr: true });

  const unitRules = unit.specialRules
    .filter((r) => r.name != "-")
    .concat(UnitService.getUpgradeRules(unit));
  const items = unit.loadout.filter((x) => x.type === "ArmyBookItem") as IUpgradeGainsItem[];

  const Stat = ({ label, value }: { label: string; value: string }) => (
    <Box className={style.profileStat}>
      <Typography component="span">{label}</Typography>
      <div className={style.statBreak}></div>
      <Typography component="span">{value}</Typography>
    </Box>
  );

  const stats = (
    <Stack justifyContent="center" direction="row" my={1}>
      <Stat label={tinyScreen ? "Qua" : "Quality"} value={unit.quality + "+"} />
      <Stat label={tinyScreen ? "Def" : "Defense"} value={unit.defense + "+"} />
      {toughness > 1 && (
        <Stat label={tinyScreen ? "Tough" : "Tough"} value={toughness.toString()} />
      )}
    </Stack>
  );

  const rulesSection = (
    <Box mb={1} px={1} fontSize="14px">
      {prefs.showFullRules
        ? (() => {
            const itemRules = _.flatMap(
              items,
              (item) =>
                item.content.filter(
                  (x) => x.type === "ArmyBookRule" || x.type === "ArmyBookDefense"
                ) as IUpgradeGainsRule[]
            );
            return groupMap(
              unitRules.concat(itemRules),
              (x) => x.name,
              (group, key) => {
                const rule = group[0];
                const rating = group.reduce(
                  (total, next) => (next.rating ? total + parseInt(next.rating) : total),
                  0
                );

                const ruleDefinition = ruleDefinitions.filter(
                  (r) => /(.+?)(?:\(|$)/.exec(r.name)[0] === rule.name
                )[0];

                return (
                  <Typography key={key} fontSize={"14px"}>
                    <span style={{ fontWeight: 600 }}>
                      {RulesService.displayName({ ...rule, rating: rating as any }, count)} -
                    </span>
                    <span> {ruleDefinition?.description || ""}</span>
                  </Typography>
                );
              }
            );
          })()
        : (() => {
            const rules = groupMap(
              unitRules,
              (x) => x.name,
              (group, key) => <RuleList key={key} specialRules={group} />
            );

            const itemRules = groupMap(
              items,
              (x) => x.name,
              (group, key) => {
                const item: IUpgradeGainsItem = group[0] as IUpgradeGainsItem;
                const count = _.sumBy(group, (x) => x.count || 1);

                const itemRules: IUpgradeGainsRule[] = item.content.filter(
                  (x) => x.type === "ArmyBookRule" || x.type === "ArmyBookDefense"
                ) as any;

                const upgrade = unit.selectedUpgrades.find((x) =>
                  x.option.gains.some((y) => y.name === item.name)
                )?.upgrade;
                const itemAffectsAll = upgrade?.affects === "all";
                const hasStackableRule = itemRules.some((x) => x.name === "Impact");
                const hideCount = itemAffectsAll && !hasStackableRule;

                return (
                  <span key={key}>
                    {count > 1 && !hideCount && `${count}x `}
                    {item.name}
                    {itemRules.length > 0 && (
                      <>
                        <span>(</span>
                        <RuleList specialRules={itemRules} />
                        <span>)</span>
                      </>
                    )}
                  </span>
                );
              }
            );

            return intersperse(rules.concat(itemRules), <span>, </span>);
          })()}
    </Box>
  );

  const traitsSection = unit.traits?.length > 0 && (
    <div className="px-2 mb-4" style={{ fontSize: "14px" }}>
      {unit.traits.map((trait: string, index: number) => {
        const traitDef = traitDefinitions.find((x) => x.name === trait);
        if (!prefs.showFullRules)
          return (
            <span key={index}>
              {index === 0 ? "" : ", "}
              <RuleList specialRules={[traitDef]} />
            </span>
          );

        return (
          <p key={index}>
            <span style={{ fontWeight: 600 }}>{traitDef.name} -</span>
            <span> {traitDef.description}</span>
          </p>
        );
      })}
    </div>
  );

  const joinedUnitText = attachedTo && (
    <Stack direction="row" justifyContent="center" mb={1}>
      <LinkIcon />
      <Typography textAlign="center">
        Joined to {attachedTo.customName || attachedTo.name}
      </Typography>
    </Stack>
  );

  return (
    <ViewCard
      title={
        <>
          {count > 1 ? `${count}x ` : ""}
          {unit.customName || unit.name}
          <span className="" style={{ color: "#666666" }}>
            {" "}
            [{UnitService.getSize(unit)}]
          </span>
          {prefs.showPointCosts && (
            <span className="is-size-6 ml-1" style={{ color: "#666666" }}>
              - {pointCost}pts
            </span>
          )}
        </>
      }
      content={
        <>
          {joinedUnitText}
          {stats}
          {rulesSection}
          {traitsSection}
          <UnitEquipmentTable loadout={unit.loadout} hideEquipment square />
          {unit.notes && <div className="p-2">{unit.notes}</div>}
        </>
      }
    />
  );
}

interface SpellsCardProps {
  army: ArmyState;
  list: ListState;
}

export function SpellsCard({ army, list }: SpellsCardProps) {
  const isGrimdark = army.gameSystem.startsWith("gf");
  return (
    <>
      {army.loadedArmyBooks.map((book) => {
        const enable = listContainsPyschic(list.units.filter((x) => x.armyId === book.uid));
        return (
          enable && (
            <ViewCard
              key={book.uid}
              title={`${book.name} ${isGrimdark ? "Psychic " : ""} Spells`}
              content={
                <>
                  <hr className="my-0" />

                  <Paper square elevation={0}>
                    <div className="px-2 my-2">
                      {book.spells.map((spell) => (
                        <p key={spell.id}>
                          <span style={{ fontWeight: 600 }}>
                            {spell.name} ({spell.threshold}+):{" "}
                          </span>
                          <span>{spell.effect}</span>
                        </p>
                      ))}
                    </div>
                  </Paper>
                </>
              }
            />
          )
        );
      })}
    </>
  );
}

function SpecialRulesCard({ usedRules, ruleDefinitions }) {
  return (
    <ViewCard
      title="Special Rules"
      content={
        <>
          <Box className={style.grid} sx={{ p: 2, mt: 1 }}>
            {_.uniq(usedRules)
              .sort()
              .map((r, i) => (
                <Typography key={i} sx={{ breakInside: "avoid" }}>
                  <span style={{ fontWeight: 600 }}>{r + " - "}</span>
                  <span>{ruleDefinitions.find((t) => t.name === r)?.description}</span>
                </Typography>
              ))}
          </Box>
        </>
      }
    />
  );
}

function ViewCard({ title, content }) {
  return (
    <Card elevation={1} className={style.card}>
      <Accordion disableGutters defaultExpanded>
        <AccordionSummary
          className="card-accordion-summary"
          expandIcon={<ExpandMoreIcon />}
          sx={{ pt: 1 }}
        >
          <Typography style={{ fontWeight: 600, textAlign: "center", flex: 1, fontSize: "20px" }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>{content}</AccordionDetails>
      </Accordion>
    </Card>
  );
}

function toughFromUnit(unit: ISelectedUnit) {
  let baseTough: number = 0;

  baseTough += unit.specialRules.reduce((tough, rule) => {
    if (rule.name === "Tough") {
      tough += parseInt(rule.rating);
    }
    return tough;
  }, 0);

  baseTough += UnitService.getAllUpgradedRules(unit).reduce((tough, { name, rating }) => {
    if (name === "Tough") {
      tough += parseInt(rating);
    }
    return tough;
  }, 0);

  return baseTough || 1;
}
