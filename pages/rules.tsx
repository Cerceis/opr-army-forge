import { Fragment, useEffect, useState } from "react";
import { groupMap } from "../services/Helpers";

export default function Rules() {
  const [rules, setRules] = useState(data);

  // useEffect(() => {
  //   const load = async () => {
  //     var res = await fetch(
  //       "https://webapp.onepagerules.com/api/army-books/statistics/special-rules"
  //     );
  //     var data = await res.json();
  //     console.log(data);
  //     setRules(data);
  //   };
  //   load();
  // }, []);
  console.log(rules);
  return (
    <div>
      {groupMap(
        rules,
        (x) => x.armyBookName,
        (rules, army) => (
          <Fragment key={army}>
            <h1 className="is-size-4">{army}</h1>
            <div>
              {rules.map((r) => (
                <p key={r.name}>
                  <span style={{ fontWeight: 600 }}>{r.name}: </span>
                  {r.description}
                </p>
              ))}
            </div>
          </Fragment>
        )
      )}
    </div>
  );
}

var data = [
  {
    armyBookUid: "w7qor7b2kuifcyvk",
    armyBookName: "Alien Hives",
    name: "No Retreat",
    description:
      "Whenever this unit fails a morale test, you must kill one of its models, and the morale test counts as passed instead.",
    skirmify:
      "Whenever this unit fails a morale test, you must kill one of its models, and the morale test counts as passed instead.",
    adjusted: false,
  },
  {
    armyBookUid: "w7qor7b2kuifcyvk",
    armyBookName: "Alien Hives",
    name: "Psychic Synapse",
    description:
      "Models with this rule count as having Psychic(1), however only one of them in the unit may cast or block spells each round. When casting or blocking spells, roll as many dice as models with this rule in the unit, and pick the highest result.",
    skirmify:
      "Models with this rule count as having Psychic(1), however only one of them in the unit may cast or block spells each round. When casting or blocking spells, roll as many dice as models with this rule in the unit, and pick the highest result.",
    adjusted: false,
  },
  {
    armyBookUid: "w7qor7b2kuifcyvk",
    armyBookName: "Alien Hives",
    name: "Psy-Barrier",
    description:
      "This model may block spells as if it had the Psychic(2) special rule. If it is a Psychic then it gets +2 to spell block rolls.",
    skirmify:
      "This model may block spells as if it had the Psychic(2) special rule. If it is a Psychic then it gets +2 to spell block rolls.",
    adjusted: false,
  },
  {
    armyBookUid: "w7qor7b2kuifcyvk",
    armyBookName: "Alien Hives",
    name: "Shrouding Mist",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get the Stealth rule next time they are shot at.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get the Stealth rule next time they are shot at.',
    adjusted: true,
  },
  {
    armyBookUid: "w7qor7b2kuifcyvk",
    armyBookName: "Alien Hives",
    name: "Corrosive",
    description: "Whenever this model takes a wound in melee, the attacker takes 1 hit.",
    skirmify: "Whenever this model takes a wound in melee, the attacker takes 1 hit.",
    adjusted: false,
  },
  {
    armyBookUid: "w7qor7b2kuifcyvk",
    armyBookName: "Alien Hives",
    name: "Pheromones",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "w7qor7b2kuifcyvk",
    armyBookName: "Alien Hives",
    name: "Spawn Brood",
    description:
      "When this model is activated, you may place a unit of 5 Assault Grunts. 5 Shooter Grunts or 3 Hive Swarms fully within 6” of it.",
    skirmify:
      "When this model is activated, you may place a unit of 5 Assault Grunts. 5 Shooter Grunts or 3 Hive Swarms fully within 6” of it.",
    adjusted: false,
  },
  {
    armyBookUid: "w7qor7b2kuifcyvk",
    armyBookName: "Alien Hives",
    name: "Spores",
    description:
      "If this weapon misses you may place a unit of 3 Spores or 1 Massive Spore 12” away from the target, but the position is decided by your opponent. Note that this new unit can’t be activated on the round in which it is placed.",
    skirmify:
      "If this weapon misses you may place a unit of 3 Spores or 1 Massive Spore 12” away from the target, but the position is decided by your opponent. Note that this new unit can’t be activated on the round in which it is placed.",
    adjusted: false,
  },
  {
    armyBookUid: "w7qor7b2kuifcyvk",
    armyBookName: "Alien Hives",
    name: "Surprise Attack",
    description:
      "This model counts as having the Ambush rule, and may be deployed up to 1” away from enemy units. Once deployed roll 2 dice, for each 2+ it deals 3 hits with AP(1) to one enemy unit within 3” (this may target multiple units).",
    skirmify:
      "This model counts as having the Ambush rule, and may be deployed up to 1” away from enemy units. Once deployed roll 2 dice, for each 2+ it deals 3 hits with AP(1) to one enemy unit within 3” (this may target multiple units).",
    adjusted: false,
  },
  {
    armyBookUid: "w7qor7b2kuifcyvk",
    armyBookName: "Alien Hives",
    name: "Explode",
    description:
      'If this model is ever 1" away from an enemy unit, it is immediately killed, and the enemy takes X*3 hits. This model automatically passes all morale tests.',
    skirmify:
      'If this model is ever 1" away from an enemy unit, it is immediately killed, and the enemy takes X*3 hits. This model automatically passes all morale tests.',
    adjusted: false,
  },
  {
    armyBookUid: "w7qor7b2kuifcyvk",
    armyBookName: "Alien Hives",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "6lvi8l6iysra5e90",
    armyBookName: "Alien Undead Eel Force",
    name: "Eelish evasion",
    description: "Roll 4+ to evade an hit",
    skirmify: "Roll 4+ to evade an hit",
    adjusted: false,
  },
  {
    armyBookUid: "6lvi8l6iysra5e90",
    armyBookName: "Alien Undead Eel Force",
    name: "Eelish evasion",
    description: "Roll 4+ to evade an hit",
    skirmify: "Roll 4+ to evade an hit",
    adjusted: false,
  },
  {
    armyBookUid: "78qp9l5alslt6yj8",
    armyBookName: "Battle Brothers",
    name: "Advanced Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "78qp9l5alslt6yj8",
    armyBookName: "Battle Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "78qp9l5alslt6yj8",
    armyBookName: "Battle Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "78qp9l5alslt6yj8",
    armyBookName: "Battle Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "78qp9l5alslt6yj8",
    armyBookName: "Battle Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "78qp9l5alslt6yj8",
    armyBookName: "Battle Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "78qp9l5alslt6yj8",
    armyBookName: "Battle Brothers",
    name: "Veteran Walker",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "7oi8zeiqfamiur21",
    armyBookName: "Battle Sisters",
    name: "Spiritual Guidance",
    description: "The hero and its unit get AP(+1) when shooting.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "7oi8zeiqfamiur21",
    armyBookName: "Battle Sisters",
    name: "Canticle Megaphone",
    description: "This model and its unit get the Fearless rule.",
    skirmify: "This model and all friendly units within 12” get the Fearless rule.",
    adjusted: true,
  },
  {
    armyBookUid: "7oi8zeiqfamiur21",
    armyBookName: "Battle Sisters",
    name: "Celestial Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "7oi8zeiqfamiur21",
    armyBookName: "Battle Sisters",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "7oi8zeiqfamiur21",
    armyBookName: "Battle Sisters",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "7oi8zeiqfamiur21",
    armyBookName: "Battle Sisters",
    name: "War Hymns",
    description: "The hero and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "7oi8zeiqfamiur21",
    armyBookName: "Battle Sisters",
    name: "Devout",
    description: 'This model gets +1 to hit rolls when shooting at enemies within 12".',
    skirmify: 'This model gets +1 to hit rolls when shooting at enemies within 12".',
    adjusted: false,
  },
  {
    armyBookUid: "7oi8zeiqfamiur21",
    armyBookName: "Battle Sisters",
    name: "Blind Faith",
    description: "The hero and its unit get the Stealth special rule.",
    skirmify: "This model and all friendly units within 12” get the Stealth special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "TciwNI3AOMXAM-dr",
    armyBookName: "Beastmen",
    name: "Bestial Hatred",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "TciwNI3AOMXAM-dr",
    armyBookName: "Beastmen",
    name: "Crazed",
    description:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "TciwNI3AOMXAM-dr",
    armyBookName: "Beastmen",
    name: "Hit & Run",
    description: "The hero and its unit may move by up to 3” after shooting.",
    skirmify: "This model and all friendly units within 12” may move by up to 3” after shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "TciwNI3AOMXAM-dr",
    armyBookName: "Beastmen",
    name: "Madness",
    description:
      "Once per activation, before attacking, pick 2 enemy units within 12”. Those units must take a morale test, if failed they take 3 hits.",
    skirmify:
      'Once per activation, before attacking, pick 2 enemy units within 12”. Those units, and all enemy units within 6" must take a morale test, if failed they take 3 hits.',
    adjusted: true,
  },
  {
    armyBookUid: "TciwNI3AOMXAM-dr",
    armyBookName: "Beastmen",
    name: "Sense Magic",
    description: "This model may block spells as if it had the Wizard(2) special rule.",
    skirmify: "This model may block spells as if it had the Wizard(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "TciwNI3AOMXAM-dr",
    armyBookName: "Beastmen",
    name: "Bestial Ambush",
    description: "The hero and its unit get the Ambush special rule.",
    skirmify:
      "The hero and up to half of its army get the Ambush special rule (must deploy within 3” of the hero).",
    adjusted: true,
  },
  {
    armyBookUid: "TciwNI3AOMXAM-dr",
    armyBookName: "Beastmen",
    name: "Headtaker",
    description: "This model gets AP(+2) when fighting units with Tough(3) or higher.",
    skirmify: "This model gets AP(+2) when fighting units with Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "TciwNI3AOMXAM-dr",
    armyBookName: "Beastmen",
    name: "Head Chop",
    description: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    skirmify: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "xnnqhh1775kvmz2r",
    armyBookName: "Blood Brothers",
    name: "Advanced Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "xnnqhh1775kvmz2r",
    armyBookName: "Blood Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "xnnqhh1775kvmz2r",
    armyBookName: "Blood Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "xnnqhh1775kvmz2r",
    armyBookName: "Blood Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "xnnqhh1775kvmz2r",
    armyBookName: "Blood Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "xnnqhh1775kvmz2r",
    armyBookName: "Blood Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "xnnqhh1775kvmz2r",
    armyBookName: "Blood Brothers",
    name: "Veteran Walker",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "xnnqhh1775kvmz2r",
    armyBookName: "Blood Brothers",
    name: "Holy Chalice",
    description: "The hero and its unit get +1 to hit in melee and the Regeneration rule.",
    skirmify:
      "This model and all friendly units within 12” get +1 to hit in melee and the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "xnnqhh1775kvmz2r",
    armyBookName: "Blood Brothers",
    name: "Very Fast",
    description: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    skirmify: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    adjusted: false,
  },
  {
    armyBookUid: "46sgbv3i71i812m2",
    armyBookName: "Blood Brothers",
    name: "Advanced Tactics",
    description:
      "Once per activation, before attacking, pick 2 friendly units within 12” of this model, which may move by up to 3” each.",
    skirmify:
      'Once per activation, before attacking, pick 2 friendly units within 12” of this model. Those units, and all friendly units within 6" may move by up to 3” each.',
    adjusted: true,
  },
  {
    armyBookUid: "46sgbv3i71i812m2",
    armyBookName: "Blood Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "46sgbv3i71i812m2",
    armyBookName: "Blood Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "46sgbv3i71i812m2",
    armyBookName: "Blood Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "46sgbv3i71i812m2",
    armyBookName: "Blood Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to its attack rolls for melee and shooting.",
    skirmify: "This model gets +1 to its attack rolls for melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "46sgbv3i71i812m2",
    armyBookName: "Blood Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "46sgbv3i71i812m2",
    armyBookName: "Blood Brothers",
    name: "Rear Grapples",
    description:
      "This unit may transport a single Attack Walker in addition to any other units that it is transporting.",
    skirmify:
      "This unit may transport a single Attack Walker in addition to any other units that it is transporting.",
    adjusted: false,
  },
  {
    armyBookUid: "46sgbv3i71i812m2",
    armyBookName: "Blood Brothers",
    name: "Veteran Walker",
    description: "This model gets +1 to its attack rolls for melee and shooting.",
    skirmify: "This model gets +1 to its attack rolls for melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "46sgbv3i71i812m2",
    armyBookName: "Blood Brothers",
    name: "Very Fast",
    description: "This model moves 12” when using Advance and 24” when using Rush/Charge.",
    skirmify: "This model moves 12” when using Advance and 24” when using Rush/Charge.",
    adjusted: false,
  },
  {
    armyBookUid: "7ex2x15bpkmy1alv",
    armyBookName: "Blood Prime Brothers",
    name: "Battle Rites",
    description: "The hero and its unit get +1 to hit when shooting.",
    skirmify: "This model and all friendly units within 12” get +1 to hit when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "7ex2x15bpkmy1alv",
    armyBookName: "Blood Prime Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "7ex2x15bpkmy1alv",
    armyBookName: "Blood Prime Brothers",
    name: "Precision Shots",
    description: "The hero and its unit get AP(+1) when shooting.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "7ex2x15bpkmy1alv",
    armyBookName: "Blood Prime Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "7ex2x15bpkmy1alv",
    armyBookName: "Blood Prime Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "7ex2x15bpkmy1alv",
    armyBookName: "Blood Prime Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "7ex2x15bpkmy1alv",
    armyBookName: "Blood Prime Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "7ex2x15bpkmy1alv",
    armyBookName: "Blood Prime Brothers",
    name: "Holy Chalice",
    description: "The hero and its unit get +1 to hit in melee and the Regeneration rule.",
    skirmify:
      "This model and all friendly units within 12” get +1 to hit in melee and the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "7ex2x15bpkmy1alv",
    armyBookName: "Blood Prime Brothers",
    name: "Frenzy",
    description: "This model gets +2 attacks with a weapon of your choice when charging.",
    skirmify: "This model gets +2 attacks with a weapon of your choice when charging.",
    adjusted: false,
  },
  {
    armyBookUid: "7ex2x15bpkmy1alv",
    armyBookName: "Blood Prime Brothers",
    name: "Very Fast",
    description: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    skirmify: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    adjusted: false,
  },
  {
    armyBookUid: "r6hr29338u4micfw",
    armyBookName: "Change Disciples",
    name: "Chosen Veteran",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "r6hr29338u4micfw",
    armyBookName: "Change Disciples",
    name: "Dark Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "r6hr29338u4micfw",
    armyBookName: "Change Disciples",
    name: "Mutations",
    description:
      "When this model fights in melee, roll one die and apply one bonus: \n* 1-3: Attacks get Rending \n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus: \n* 1-3: Attacks get Rending \n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "r6hr29338u4micfw",
    armyBookName: "Change Disciples",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "r6hr29338u4micfw",
    armyBookName: "Change Disciples",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "r6hr29338u4micfw",
    armyBookName: "Change Disciples",
    name: "Gift of Change",
    description:
      "Enemy units over 18” away get -1 to their rolls when shooting against the hero and its unit.",
    skirmify:
      "Enemy units over 18” away get -1 to their rolls when shooting against this model and all friendly units within 12”.",
    adjusted: true,
  },
  {
    armyBookUid: "CNOmkR5Q2C7Dc4Nm",
    armyBookName: "Change Disciples",
    name: "Battle Ready",
    description: "The hero and its unit get the Scout special rule.",
    skirmify: "This model and all friendly units within 12” get the Scout special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "CNOmkR5Q2C7Dc4Nm",
    armyBookName: "Change Disciples",
    name: "Chosen Warrior",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "CNOmkR5Q2C7Dc4Nm",
    armyBookName: "Change Disciples",
    name: "Dark Blessing",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get +1 to hit rolls next time they fight in melee.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get +1 to hit rolls next time they fight in melee.',
    adjusted: true,
  },
  {
    armyBookUid: "CNOmkR5Q2C7Dc4Nm",
    armyBookName: "Change Disciples",
    name: "Doom Caller",
    description:
      "Once per activation, before attacking, pick 2 enemy units within 12”, which get -2 to their next morale roll.",
    skirmify:
      'Once per activation, before attacking, pick 2 enemy units within 12”. Those units, and all enemy units within 6" get -2 to their next morale roll.',
    adjusted: true,
  },
  {
    armyBookUid: "CNOmkR5Q2C7Dc4Nm",
    armyBookName: "Change Disciples",
    name: "Dark March",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "CNOmkR5Q2C7Dc4Nm",
    armyBookName: "Change Disciples",
    name: "Mutations",
    description:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "CNOmkR5Q2C7Dc4Nm",
    armyBookName: "Change Disciples",
    name: "Blessing of Change",
    description:
      "Enemy units over 18” away get -1 to their rolls when shooting at the hero and its unit.",
    skirmify:
      "Enemy units over 18” away get -1 to their rolls when shooting at this model and all friendly units within 12”.",
    adjusted: true,
  },
  {
    armyBookUid: "FF4UemWHh60T1VRq",
    armyBookName: "Chivalrous Kingdoms",
    name: "Battle Zeal",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get +1 attack in melee next time they charge.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get +1 attack in melee next time they charge.',
    adjusted: true,
  },
  {
    armyBookUid: "FF4UemWHh60T1VRq",
    armyBookName: "Chivalrous Kingdoms",
    name: "Great Crusade",
    description: "The hero and its unit get the Strider special rule.",
    skirmify: "This model and all friendly units within 12” get the Strider special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "FF4UemWHh60T1VRq",
    armyBookName: "Chivalrous Kingdoms",
    name: "War Duty",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "FF4UemWHh60T1VRq",
    armyBookName: "Chivalrous Kingdoms",
    name: "Lady's Blessing",
    description: "The hero and its unit get the Regeneration special rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "FF4UemWHh60T1VRq",
    armyBookName: "Chivalrous Kingdoms",
    name: "Lancer",
    description: "This model’s Impact hits count as having AP(1).",
    skirmify: "This model’s Impact hits count as having AP(1).",
    adjusted: false,
  },
  {
    armyBookUid: "FF4UemWHh60T1VRq",
    armyBookName: "Chivalrous Kingdoms",
    name: "Lord's Virtue",
    description:
      "If the hero is part of a unit of Men-at-Arms or Errant Knights, the unit counts as having Quality 4+.",
    skirmify:
      'All friendly units of Men-at-Arms or Errant Knights within 12" count as having Quality 4+.',
    adjusted: true,
  },
  {
    armyBookUid: "FF4UemWHh60T1VRq",
    armyBookName: "Chivalrous Kingdoms",
    name: "Monster Hunter",
    description: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    skirmify: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "ewbra8nv3nq3k27p",
    armyBookName: "Custodian Brothers",
    name: "Custodian Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "ewbra8nv3nq3k27p",
    armyBookName: "Custodian Brothers",
    name: "Anti-Psychic",
    description: "This unit may block spells as if it had the Psychic(2) special rule.",
    skirmify: "This unit may block spells as if it had the Psychic(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "ewbra8nv3nq3k27p",
    armyBookName: "Custodian Brothers",
    name: "Eternal Vigilant",
    description: "The hero and its unit get +1 to hit rolls in melee.",
    skirmify: "This model and all friendly units within 12” get +1 to hit rolls in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "ewbra8nv3nq3k27p",
    armyBookName: "Custodian Brothers",
    name: "High Prosecutor",
    description: "The hero and its unit get +1 to hit rolls when shooting.",
    skirmify: "This model and all friendly units within 12” get +1 to hit rolls when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "ewbra8nv3nq3k27p",
    armyBookName: "Custodian Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "ewbra8nv3nq3k27p",
    armyBookName: "Custodian Brothers",
    name: "Witch Destroyer",
    description: "The hero and its unit get the Fast special rule.",
    skirmify: "This model and all friendly units within 12” get the Fast special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "xp5zwh73lg1uaym4",
    armyBookName: "Dark Brothers",
    name: "Advanced Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "xp5zwh73lg1uaym4",
    armyBookName: "Dark Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "xp5zwh73lg1uaym4",
    armyBookName: "Dark Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "xp5zwh73lg1uaym4",
    armyBookName: "Dark Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "xp5zwh73lg1uaym4",
    armyBookName: "Dark Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "xp5zwh73lg1uaym4",
    armyBookName: "Dark Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "xp5zwh73lg1uaym4",
    armyBookName: "Dark Brothers",
    name: "Veteran Walker",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "xp5zwh73lg1uaym4",
    armyBookName: "Dark Brothers",
    name: "Dark Assault",
    description: "This unit counts as having Ambush and may be deployed on any round.",
    skirmify: "This unit counts as having Ambush and may be deployed on any round.",
    adjusted: false,
  },
  {
    armyBookUid: "xp5zwh73lg1uaym4",
    armyBookName: "Dark Brothers",
    name: "Dark Shroud",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get the Stealth rule next time they are shot at.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get the Stealth rule next time they are shot at.',
    adjusted: true,
  },
  {
    armyBookUid: "xp5zwh73lg1uaym4",
    armyBookName: "Dark Brothers",
    name: "Grim",
    description:
      "This unit counts as having Fearless, and whenever it fails a morale test it takes one automatic wound and the morale test counts as passed instead.",
    skirmify:
      "This unit counts as having Fearless, and whenever it fails a morale test it takes one automatic wound and the morale test counts as passed instead.",
    adjusted: false,
  },
  {
    armyBookUid: "q11la9v8h1heu9ja",
    armyBookName: "Dark Elf Raiders",
    name: "Dark Strike",
    description: "The hero and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "q11la9v8h1heu9ja",
    armyBookName: "Dark Elf Raiders",
    name: "Dodge",
    description: "This model gets +2 to defense rolls when fighting in melee.",
    skirmify: "This model gets +2 to defense rolls when fighting in melee.",
    adjusted: false,
  },
  {
    armyBookUid: "q11la9v8h1heu9ja",
    armyBookName: "Dark Elf Raiders",
    name: "Pain Fuelled",
    description: "The hero and its unit count as having the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” count as having the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "q11la9v8h1heu9ja",
    armyBookName: "Dark Elf Raiders",
    name: "Pain Immunity",
    description: "The hero and its unit get +1 to Regeneration rolls.",
    skirmify: "This model and all friendly units within 12” get +1 to Regeneration rolls.",
    adjusted: true,
  },
  {
    armyBookUid: "q11la9v8h1heu9ja",
    armyBookName: "Dark Elf Raiders",
    name: "Shadow",
    description:
      "This model counts as having the Ambush rule, and may be deployed up to 1” away from enemy units.",
    skirmify:
      "This model counts as having the Ambush rule, and may be deployed up to 1” away from enemy units.",
    adjusted: false,
  },
  {
    armyBookUid: "q11la9v8h1heu9ja",
    armyBookName: "Dark Elf Raiders",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "q11la9v8h1heu9ja",
    armyBookName: "Dark Elf Raiders",
    name: "Very Fast",
    description: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    skirmify: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    adjusted: false,
  },
  {
    armyBookUid: "q11la9v8h1heu9ja",
    armyBookName: "Dark Elf Raiders",
    name: "True Raider",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "q11la9v8h1heu9ja",
    armyBookName: "Dark Elf Raiders",
    name: "Soul Conductor",
    description:
      "Once per activation, pick 2 units within 6”, which get Regeneration next time they take wounds.",
    skirmify:
      "Once per activation, pick 2 units within 6”, which get Regeneration next time they take wounds.",
    adjusted: false,
  },
  {
    armyBookUid: "IKT625BeGZtF67EA",
    armyBookName: "Dark Elves",
    name: "Absolute Power",
    description:
      "Once per activation, before attacking, pick one enemy unit within 12”, which gets -2 to its next morale test roll.",
    skirmify:
      'Once per activation, before attacking, pick one enemy unit within 12”. That unit, and all enemy unit within 6" gets -2 to its next morale test roll.',
    adjusted: true,
  },
  {
    armyBookUid: "IKT625BeGZtF67EA",
    armyBookName: "Dark Elves",
    name: "Aura of Pain",
    description:
      "Once per activation, before attacking, pick 2 enemy units within 12”. Those units must take a morale test, if failed they take 3 hits.",
    skirmify:
      'Once per activation, before attacking, pick 2 enemy units within 12”. Those units, and all enemy units within 6" must take a morale test, if failed they take 3 hits.',
    adjusted: true,
  },
  {
    armyBookUid: "IKT625BeGZtF67EA",
    armyBookName: "Dark Elves",
    name: "Blade Dance",
    description: "This model gets +2 to defense rolls when fighting in melee.",
    skirmify: "This model gets +2 to defense rolls when fighting in melee.",
    adjusted: false,
  },
  {
    armyBookUid: "IKT625BeGZtF67EA",
    armyBookName: "Dark Elves",
    name: "Blood Fury",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get +1 attack in melee next time they charge.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get +1 attack in melee next time they charge.',
    adjusted: true,
  },
  {
    armyBookUid: "IKT625BeGZtF67EA",
    armyBookName: "Dark Elves",
    name: "Blood Sacrifice",
    description: "The hero and its unit get the Regeneration special rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "IKT625BeGZtF67EA",
    armyBookName: "Dark Elves",
    name: "Dark Prowess",
    description: "The hero and its unit get +1 to hit when in melee.",
    skirmify: "This model and all friendly units within 12” get +1 to hit when in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "IKT625BeGZtF67EA",
    armyBookName: "Dark Elves",
    name: "Hydra Heads",
    description:
      "Place a marker on this model whenever it regenerates a wound. For each marker it gets +1 attack in melee.",
    skirmify:
      "Place a marker on this model whenever it regenerates a wound. For each marker it gets +1 attack in melee.",
    adjusted: false,
  },
  {
    armyBookUid: "IKT625BeGZtF67EA",
    armyBookName: "Dark Elves",
    name: "Predator",
    description:
      "For each unmodified result of 6 to hit when attacking, this model may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.",
    skirmify:
      "For each unmodified result of 6 to hit when attacking, this model may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.",
    adjusted: false,
  },
  {
    armyBookUid: "IKT625BeGZtF67EA",
    armyBookName: "Dark Elves",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "IKT625BeGZtF67EA",
    armyBookName: "Dark Elves",
    name: "Head Chop",
    description: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    skirmify: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "gk7me4sgn9s740kw",
    armyBookName: "Dark Prime Brothers",
    name: "Battle Rites",
    description: "The hero and its unit get +1 to hit when shooting.",
    skirmify: "This model and all friendly units within 12” get +1 to hit when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "gk7me4sgn9s740kw",
    armyBookName: "Dark Prime Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "gk7me4sgn9s740kw",
    armyBookName: "Dark Prime Brothers",
    name: "Precision Shots",
    description: "The hero and its unit get AP(+1) when shooting.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "gk7me4sgn9s740kw",
    armyBookName: "Dark Prime Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "gk7me4sgn9s740kw",
    armyBookName: "Dark Prime Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "gk7me4sgn9s740kw",
    armyBookName: "Dark Prime Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "gk7me4sgn9s740kw",
    armyBookName: "Dark Prime Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "gk7me4sgn9s740kw",
    armyBookName: "Dark Prime Brothers",
    name: "Dark Assault",
    description: "This unit counts as having Ambush and may be deployed on any round.",
    skirmify: "This unit counts as having Ambush and may be deployed on any round.",
    adjusted: false,
  },
  {
    armyBookUid: "gk7me4sgn9s740kw",
    armyBookName: "Dark Prime Brothers",
    name: "Dark Shroud",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get the Stealth rule next time they are shot at.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get the Stealth rule next time they are shot at.',
    adjusted: true,
  },
  {
    armyBookUid: "gk7me4sgn9s740kw",
    armyBookName: "Dark Prime Brothers",
    name: "Grim",
    description:
      "This unit counts as having Fearless, and whenever it fails a morale test it takes one automatic wound and the morale test counts as passed instead.",
    skirmify:
      "This unit counts as having Fearless, and whenever it fails a morale test it takes one automatic wound and the morale test counts as passed instead.",
    adjusted: false,
  },
  {
    armyBookUid: "L1zCkfmeAongLj1X",
    armyBookName: "Deep Sea Elves",
    name: "Constrict",
    description:
      "Enemies that roll to block melee hits from this model take one additional wound for each unmodified result of 1 that they roll.",
    skirmify:
      "Enemies that roll to block melee hits from this model take one additional wound for each unmodified result of 1 that they roll.",
    adjusted: false,
  },
  {
    armyBookUid: "L1zCkfmeAongLj1X",
    armyBookName: "Deep Sea Elves",
    name: "Distortion Drummer",
    description:
      "Once per activation, pick two friendly units within 6”, which get Stealth next time they are shot at.",
    skirmify:
      'Once per activation, pick two friendly units within 6”. Those units, and all friendly units within 6" get Stealth next time they are shot at.',
    adjusted: true,
  },
  {
    armyBookUid: "L1zCkfmeAongLj1X",
    armyBookName: "Deep Sea Elves",
    name: "Divine Navigator",
    description: "The hero and its unit get the Ambush special rule.",
    skirmify:
      "The hero and up to half of its army get the Ambush special rule (must deploy within 3” of the hero).",
    adjusted: true,
  },
  {
    armyBookUid: "L1zCkfmeAongLj1X",
    armyBookName: "Deep Sea Elves",
    name: "Ethereal",
    description:
      "Counts as having Stealth, Strider, as well as Regeneration against non-spell attacks (this stacks with Regeneration).",
    skirmify:
      "Counts as having Stealth, Strider, as well as Regeneration against non-spell attacks (this stacks with Regeneration).",
    adjusted: false,
  },
  {
    armyBookUid: "L1zCkfmeAongLj1X",
    armyBookName: "Deep Sea Elves",
    name: "Lantern of Souls",
    description: "The hero and its unit get the Constrict special rule.",
    skirmify: "This model and all friendly units within 12” get the Constrict special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "L1zCkfmeAongLj1X",
    armyBookName: "Deep Sea Elves",
    name: "Quick Shot",
    description: "This model may shoot even after using Rush actions.",
    skirmify: "This model may shoot even after using Rush actions.",
    adjusted: false,
  },
  {
    armyBookUid: "L1zCkfmeAongLj1X",
    armyBookName: "Deep Sea Elves",
    name: "Soul Collector",
    description:
      "Once per activation, pick 2 friendly units within 12”, which get +1 to their next morale test roll.",
    skirmify:
      'Once per activation, pick 2 friendly units within 12”. Those units, and all friendly units within 6" get +1 to their next morale test roll.',
    adjusted: true,
  },
  {
    armyBookUid: "L1zCkfmeAongLj1X",
    armyBookName: "Deep Sea Elves",
    name: "Tide Master",
    description: "The hero and its unit get +1 to hit rolls in melee.",
    skirmify: "This model and all friendly units within 12” get +1 to hit rolls in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "VU1EFPa2uODffW8D",
    armyBookName: "Duchies of Vinci",
    name: "At the Double",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "VU1EFPa2uODffW8D",
    armyBookName: "Duchies of Vinci",
    name: "Automa",
    description:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    skirmify:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    adjusted: false,
  },
  {
    armyBookUid: "VU1EFPa2uODffW8D",
    armyBookName: "Duchies of Vinci",
    name: "Vinci Artillerist",
    description:
      "Once per activation, pick one friendly Artillery unit within 6”, which may either get +2 to its shooting rolls, or move by up to 6” next time it activates.",
    skirmify:
      "Once per activation, pick one friendly Artillery unit within 6”, which may either get +2 to its shooting rolls, or move by up to 6” next time it activates.",
    adjusted: false,
  },
  {
    armyBookUid: "VU1EFPa2uODffW8D",
    armyBookName: "Duchies of Vinci",
    name: "Good Shot",
    description: "This model shoots at Quality 4+.",
    skirmify: "This model shoots at Quality 4+.",
    adjusted: false,
  },
  {
    armyBookUid: "VU1EFPa2uODffW8D",
    armyBookName: "Duchies of Vinci",
    name: "Precision Fire",
    description: "The hero and its unit get +6” range when shooting.",
    skirmify: "This model and all friendly units within 12” get +6” range when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "VU1EFPa2uODffW8D",
    armyBookName: "Duchies of Vinci",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "VU1EFPa2uODffW8D",
    armyBookName: "Duchies of Vinci",
    name: "Signal Flare",
    description:
      "Once per activation, before attacking, pick one enemy unit within 12”. Next time that a friendly unit shoots at it, that units gets +1 to its hit rolls.",
    skirmify:
      "Once per activation, before attacking, pick one enemy unit within 12”. Next time that a friendly unit shoots at it, that units gets +1 to its hit rolls.",
    adjusted: false,
  },
  {
    armyBookUid: "VU1EFPa2uODffW8D",
    armyBookName: "Duchies of Vinci",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "VU1EFPa2uODffW8D",
    armyBookName: "Duchies of Vinci",
    name: "Trickster",
    description:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1) ",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1) ",
    adjusted: false,
  },
  {
    armyBookUid: "VU1EFPa2uODffW8D",
    armyBookName: "Duchies of Vinci",
    name: "Drop Bombs",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll 1 die. On a 2+ it takes 3 hits with AP(1).",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll 1 die. On a 2+ it takes 3 hits with AP(1).",
    adjusted: false,
  },
  {
    armyBookUid: "VU1EFPa2uODffW8D",
    armyBookName: "Duchies of Vinci",
    name: "Augmented Bolts",
    description:
      "Once per activation, before attacking, pick one friendly unit within 12” of this model, which gets AP(+1) next time it shoots.",
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" gets AP(+1) next time it shoots.',
    adjusted: true,
  },
  {
    armyBookUid: "VU1EFPa2uODffW8D",
    armyBookName: "Duchies of Vinci",
    name: "Transport",
    description:
      "May transport up to X other models. Units embark by moving into contact, and may use any action to disembark, but only move by up to 6”. Units may also be deployed inside of a transport. If a unit is inside a transport when it is destroyed, then it takes a dangerous terrain test, is immediately Wavering, and surviving models must be placed within 6” of the transport before it is removed.",
    skirmify:
      "May transport up to X other models. Units embark by moving into contact, and may use any action to disembark, but only move by up to 6”. Units may also be deployed inside of a transport. If a unit is inside a transport when it is destroyed, then it takes a dangerous terrain test, is immediately Wavering, and surviving models must be placed within 6” of the transport before it is removed.",
    adjusted: false,
  },
  {
    armyBookUid: "fk1mkbp8apvltu0z",
    armyBookName: "Dwarf Guilds",
    name: "Battle Haste",
    description: "The hero and its unit may ignore the Slow rule.",
    skirmify: "This model and all friendly units within 12” may ignore the Slow rule.",
    adjusted: true,
  },
  {
    armyBookUid: "fk1mkbp8apvltu0z",
    armyBookName: "Dwarf Guilds",
    name: "Battle Lore",
    description: "The hero and its unit get AP(+1) when shooting.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "fk1mkbp8apvltu0z",
    armyBookName: "Dwarf Guilds",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "fk1mkbp8apvltu0z",
    armyBookName: "Dwarf Guilds",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "fk1mkbp8apvltu0z",
    armyBookName: "Dwarf Guilds",
    name: "Slayer",
    description: "This model gets AP(+2) when fighting units with Tough(3) or higher.",
    skirmify: "This model gets AP(+2) when fighting units with Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "fk1mkbp8apvltu0z",
    armyBookName: "Dwarf Guilds",
    name: "Swift",
    description: "This model may ignore the Slow rule.",
    skirmify: "This model may ignore the Slow rule.",
    adjusted: false,
  },
  {
    armyBookUid: "fk1mkbp8apvltu0z",
    armyBookName: "Dwarf Guilds",
    name: "Tunneller",
    description:
      "This model counts as having the Ambush rule, and may be deployed up to 1” away from enemy units.",
    skirmify:
      "This model counts as having the Ambush rule, and may be deployed up to 1” away from enemy units.",
    adjusted: false,
  },
  {
    armyBookUid: "RJDq2ZD7wjlAcUVB",
    armyBookName: "Dwarves",
    name: "Dwarf Artillerist",
    description:
      "Once per activation, pick one friendly Artillery unit within 6”, which may either get +2 to its shooting rolls, or move by up to 6” next time it activates.",
    skirmify:
      "Once per activation, pick one friendly Artillery unit within 6”, which may either get +2 to its shooting rolls, or move by up to 6” next time it activates.",
    adjusted: false,
  },
  {
    armyBookUid: "RJDq2ZD7wjlAcUVB",
    armyBookName: "Dwarves",
    name: "Battle Eager",
    description: "The hero and its unit may ignore the Slow rule.",
    skirmify: "This model and all friendly units within 12” may ignore the Slow rule.",
    adjusted: true,
  },
  {
    armyBookUid: "RJDq2ZD7wjlAcUVB",
    armyBookName: "Dwarves",
    name: "Tunneller",
    description: "This model may be deployed from Ambush up to 1” away from enemy units.",
    skirmify: "This model may be deployed from Ambush up to 1” away from enemy units.",
    adjusted: false,
  },
  {
    armyBookUid: "RJDq2ZD7wjlAcUVB",
    armyBookName: "Dwarves",
    name: "Grudge",
    description: "The hero and its unit get +1 to hit rolls when fighting in melee.",
    skirmify:
      "This model and all friendly units within 12” get +1 to hit rolls when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "RJDq2ZD7wjlAcUVB",
    armyBookName: "Dwarves",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "RJDq2ZD7wjlAcUVB",
    armyBookName: "Dwarves",
    name: "Slayer",
    description: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    skirmify: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "RJDq2ZD7wjlAcUVB",
    armyBookName: "Dwarves",
    name: "Swift",
    description: "This model may ignore the Slow rule.",
    skirmify: "This model may ignore the Slow rule.",
    adjusted: false,
  },
  {
    armyBookUid: "RJDq2ZD7wjlAcUVB",
    armyBookName: "Dwarves",
    name: "Bombing Run",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll X dice. For each 2+ it takes 3 hits with AP(1).",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll X dice. For each 2+ it takes 3 hits with AP(1).",
    adjusted: false,
  },
  {
    armyBookUid: "nyh41t82jugcdq8m",
    armyBookName: "Elven Jesters",
    name: "Apex Killers",
    description: "The hero and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "nyh41t82jugcdq8m",
    armyBookName: "Elven Jesters",
    name: "Dodge",
    description: "This model gets +2 to defense rolls when fighting in melee.",
    skirmify: "This model gets +2 to defense rolls when fighting in melee.",
    adjusted: false,
  },
  {
    armyBookUid: "nyh41t82jugcdq8m",
    armyBookName: "Elven Jesters",
    name: "Graceful Brutality",
    description: "The hero and its unit may move by up to 3” after shooting.",
    skirmify: "This model and all friendly units within 12” may move by up to 3” after shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "nyh41t82jugcdq8m",
    armyBookName: "Elven Jesters",
    name: "Very Fast",
    description: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    skirmify: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    adjusted: false,
  },
  {
    armyBookUid: "nyh41t82jugcdq8m",
    armyBookName: "Elven Jesters",
    name: "Speed Boost",
    description: "This model counts as having Very Fast instead of Fast.",
    skirmify: "This model counts as having Very Fast instead of Fast.",
    adjusted: false,
  },
  {
    armyBookUid: "vux1Y5vvULmaxZ8P",
    armyBookName: "Eternal Dynasty",
    name: "Art of War",
    description: "The hero and its unit may move by up to 3” after shooting.",
    skirmify: "This model and all friendly units within 12” may move by up to 3” after shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "vux1Y5vvULmaxZ8P",
    armyBookName: "Eternal Dynasty",
    name: "Beacon",
    description:
      "Friendly units using Ambush may ignore distance restrictions from enemies if they are deployed within 6” of this model.",
    skirmify:
      "Friendly units using Ambush may ignore distance restrictions from enemies if they are deployed within 6” of this model.",
    adjusted: false,
  },
  {
    armyBookUid: "vux1Y5vvULmaxZ8P",
    armyBookName: "Eternal Dynasty",
    name: "Code of Honor",
    description: "If the hero is part of a unit of Warriors, the unit counts as having Quality 3+.",
    skirmify: 'All friendly units of Warriors within 12" count as having Quality 3+.',
    adjusted: true,
  },
  {
    armyBookUid: "vux1Y5vvULmaxZ8P",
    armyBookName: "Eternal Dynasty",
    name: "Direct Fire",
    description: "The hero and its unit get +6” range when shooting.",
    skirmify: "This model and all friendly units within 12” get +6” range when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "vux1Y5vvULmaxZ8P",
    armyBookName: "Eternal Dynasty",
    name: "Energy Drone",
    description: "This model and its unit ignore cover when shooting.",
    skirmify: "This model and all friendly units within 12” ignore cover when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "vux1Y5vvULmaxZ8P",
    armyBookName: "Eternal Dynasty",
    name: "Shield Drone",
    description: "This model and its unit count as having the Regeneration special rule.",
    skirmify:
      "This model and all friendly units within 12” count as having the Regeneration special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "vux1Y5vvULmaxZ8P",
    armyBookName: "Eternal Dynasty",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "vux1Y5vvULmaxZ8P",
    armyBookName: "Eternal Dynasty",
    name: "Targeting Array",
    description:
      "Once per activation, before attacking, pick one enemy unit within 24”. Next time that a friendly unit shoots at it, that unit gets +1 to its hit rolls.",
    skirmify:
      "Once per activation, before attacking, pick one enemy unit within 24”. Next time that a friendly unit shoots at it, that unit gets +1 to its hit rolls.",
    adjusted: false,
  },
  {
    armyBookUid: "vux1Y5vvULmaxZ8P",
    armyBookName: "Eternal Dynasty",
    name: "Teleport",
    description: "Once per activation, before attacking, place this model anywhere within 6”.",
    skirmify: "Once per activation, before attacking, place this model anywhere within 6”.",
    adjusted: false,
  },
  {
    armyBookUid: "vux1Y5vvULmaxZ8P",
    armyBookName: "Eternal Dynasty",
    name: "Elite Warrior",
    description:
      "For each unmodified result of 6 to hit when attacking in melee, this model may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.",
    skirmify:
      "For each unmodified result of 6 to hit when attacking in melee, this model may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.",
    adjusted: false,
  },
  {
    armyBookUid: "-MrGWaleoZR7pxIn",
    armyBookName: "Eternal Wardens",
    name: "Warden Artillerist",
    description:
      "Once per activation, pick one friendly Artillery unit within 6”, which may either get +2 to its shooting rolls or move up to 6” during its next activation.",
    skirmify:
      "Once per activation, pick one friendly Artillery unit within 6”, which may either get +2 to its shooting rolls or move up to 6” during its next activation.",
    adjusted: false,
  },
  {
    armyBookUid: "-MrGWaleoZR7pxIn",
    armyBookName: "Eternal Wardens",
    name: "Celestial Beacon",
    description: "The hero and its unit get the Ambush special rule.",
    skirmify:
      "The hero and up to half of its army get the Ambush special rule (must deploy within 3” of the hero).",
    adjusted: true,
  },
  {
    armyBookUid: "-MrGWaleoZR7pxIn",
    armyBookName: "Eternal Wardens",
    name: "Cleanse",
    description: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    skirmify: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "-MrGWaleoZR7pxIn",
    armyBookName: "Eternal Wardens",
    name: "Empower",
    description:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "-MrGWaleoZR7pxIn",
    armyBookName: "Eternal Wardens",
    name: "Inspire",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "-MrGWaleoZR7pxIn",
    armyBookName: "Eternal Wardens",
    name: "Smite",
    description:
      "Once per activation, before attacking, pick 2 enemy units within 12”. Those units must take a morale test, if failed they take 3 hits.",
    skirmify:
      'Once per activation, before attacking, pick 2 enemy units within 12”. Those units, and all enemy units within 6" must take a morale test, if failed they take 3 hits.',
    adjusted: true,
  },
  {
    armyBookUid: "-MrGWaleoZR7pxIn",
    armyBookName: "Eternal Wardens",
    name: "Howl",
    description: "Enemy units can’t be set up within 18” of this model when using Ambush.",
    skirmify: "Enemy units can’t be set up within 18” of this model when using Ambush.",
    adjusted: false,
  },
  {
    armyBookUid: "w15ncjbqsqk3tcet",
    armyBookName: "Feudal Guard",
    name: "Bird of Prey",
    description:
      "Once per activation, before attacking, pick enemy model within 24” and roll one die, on a 2+ it takes 1 hit with AP(1).",
    skirmify:
      "Once per activation, before attacking, pick enemy model within 24” and roll one die, on a 2+ it takes 1 hit with AP(1).",
    adjusted: false,
  },
  {
    armyBookUid: "w15ncjbqsqk3tcet",
    armyBookName: "Feudal Guard",
    name: "Feudal March",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "w15ncjbqsqk3tcet",
    armyBookName: "Feudal Guard",
    name: "Feudal Standard",
    description:
      "Once per activation, pick 2 friendly units within 12”, which get +1 to their next morale test roll.",
    skirmify:
      'Once per activation, pick 2 friendly units within 12”. Those units, and all friendly units within 6" get +1 to their next morale test roll.',
    adjusted: true,
  },
  {
    armyBookUid: "w15ncjbqsqk3tcet",
    armyBookName: "Feudal Guard",
    name: "Field Radio",
    description:
      "If this unit has a hero with the Feudal March rule, then it may use it on units that have a Field Radio up to 24” away.",
    skirmify:
      "If this unit has a hero with the Feudal March rule, then it may use it on units that have a Field Radio up to 24” away.",
    adjusted: false,
  },
  {
    armyBookUid: "w15ncjbqsqk3tcet",
    armyBookName: "Feudal Guard",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "w15ncjbqsqk3tcet",
    armyBookName: "Feudal Guard",
    name: "Purity Scroll",
    description: "This model may block spells as if it had the Psychic(2) special rule.",
    skirmify: "This model may block spells as if it had the Psychic(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "w15ncjbqsqk3tcet",
    armyBookName: "Feudal Guard",
    name: "Ballistics Console",
    description: "The hero and its unit get +1 to hit when shooting.",
    skirmify: "This model and all friendly units within 12” get +1 to hit when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "mdT4HVzHUmxGevc_",
    armyBookName: "Ghostly Undead",
    name: "Bleak Return",
    description: "The hero and its unit get the Ambush special rule.",
    skirmify:
      "The hero and up to half of its army get the Ambush special rule (must deploy within 3” of the hero).",
    adjusted: true,
  },
  {
    armyBookUid: "mdT4HVzHUmxGevc_",
    armyBookName: "Ghostly Undead",
    name: "Capture Souls",
    description:
      "Once per activation, before attacking, pick one enemy unit within 12”, which gets -2 to its next morale test roll.",
    skirmify:
      'Once per activation, before attacking, pick one enemy unit within 12”. That unit, and all enemy unit within 6" gets -2 to its next morale test roll.',
    adjusted: true,
  },
  {
    armyBookUid: "mdT4HVzHUmxGevc_",
    armyBookName: "Ghostly Undead",
    name: "Chilling",
    description:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    skirmify:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "mdT4HVzHUmxGevc_",
    armyBookName: "Ghostly Undead",
    name: "Ethereal",
    description:
      "Counts as having Stealth, Strider, as well as Regeneration against non-spell attacks (this stacks with Regeneration).",
    skirmify:
      "Counts as having Stealth, Strider, as well as Regeneration against non-spell attacks (this stacks with Regeneration).",
    adjusted: false,
  },
  {
    armyBookUid: "mdT4HVzHUmxGevc_",
    armyBookName: "Ghostly Undead",
    name: "Grim Reaper",
    description: "The hero and its unit get the Reap rule in melee.",
    skirmify: "This model and all friendly units within 12” get the Reap rule in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "mdT4HVzHUmxGevc_",
    armyBookName: "Ghostly Undead",
    name: "Reap",
    description:
      "Enemies that roll to block hits from this weapon take one additional wound for each unmodified result of 1 that they roll.",
    skirmify:
      "Enemies that roll to block hits from this weapon take one additional wound for each unmodified result of 1 that they roll.",
    adjusted: false,
  },
  {
    armyBookUid: "mdT4HVzHUmxGevc_",
    armyBookName: "Ghostly Undead",
    name: "Spectral Touch",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    adjusted: false,
  },
  {
    armyBookUid: "mdT4HVzHUmxGevc_",
    armyBookName: "Ghostly Undead",
    name: "Spell Eater",
    description: "This model may block spells as if it had the Wizard(2) special rule.",
    skirmify: "This model may block spells as if it had the Wizard(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "mdT4HVzHUmxGevc_",
    armyBookName: "Ghostly Undead",
    name: "Stolen Time",
    description: "The hero and its unit count as having Defense +2.",
    skirmify: "This model and all friendly units within 12” count as having Defense +2.",
    adjusted: true,
  },
  {
    armyBookUid: "mdT4HVzHUmxGevc_",
    armyBookName: "Ghostly Undead",
    name: "Undead",
    description:
      "Whenever this unit takes a morale test, it is passed automatically. Then roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    skirmify:
      "Whenever this unit takes a morale test, it is passed automatically. Then roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    adjusted: false,
  },
  {
    armyBookUid: "HjmV6_v6dmBmEdy7",
    armyBookName: "Giant Tribes",
    name: "Monster Hunting Net",
    description: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    skirmify: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "HjmV6_v6dmBmEdy7",
    armyBookName: "Giant Tribes",
    name: "Stumble",
    description: "This models moves +D3” on Advance and +2D3” on Rush/Charge actions.",
    skirmify: "This models moves +D3” on Advance and +2D3” on Rush/Charge actions.",
    adjusted: false,
  },
  {
    armyBookUid: "HjmV6_v6dmBmEdy7",
    armyBookName: "Giant Tribes",
    name: "Thick Skin",
    description: "Enemies get -1 to hit when shooting at this model.",
    skirmify: "Enemies get -1 to hit when shooting at this model.",
    adjusted: false,
  },
  {
    armyBookUid: "q9BQlBp583ZuuOnQ",
    armyBookName: "Goblins",
    name: "Boing",
    description: "This models moves +D3” on Advance and +2D3” on Rush/Charge actions.",
    skirmify: "This models moves +D3” on Advance and +2D3” on Rush/Charge actions.",
    adjusted: false,
  },
  {
    armyBookUid: "q9BQlBp583ZuuOnQ",
    armyBookName: "Goblins",
    name: "Camouflage",
    description: "The hero and its unit get the Stealth special rule.",
    skirmify: "This model and all friendly units within 12” get the Stealth special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "q9BQlBp583ZuuOnQ",
    armyBookName: "Goblins",
    name: "Destructive",
    description:
      "This model may move through enemy units. Whenever it does, pick one of them and roll 1 die. On a 2+ it takes 3 hits with AP(1).",
    skirmify:
      "This model may move through enemy units. Whenever it does, pick one of them and roll 1 die. On a 2+ it takes 3 hits with AP(1).",
    adjusted: false,
  },
  {
    armyBookUid: "q9BQlBp583ZuuOnQ",
    armyBookName: "Goblins",
    name: "Instigator",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "q9BQlBp583ZuuOnQ",
    armyBookName: "Goblins",
    name: "Magic Potions",
    description: "The hero and its unit get AP(+1) in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "q9BQlBp583ZuuOnQ",
    armyBookName: "Goblins",
    name: "Power Shrooms",
    description:
      "Once per activation, pick one friendly unit within 6”, which gets +1 to hit rolls next time it fights in melee.",
    skirmify:
      'Once per activation, pick one friendly unit within 6”. That unit, and all friendly unit within 6" gets +1 to hit rolls next time it fights in melee.',
    adjusted: true,
  },
  {
    armyBookUid: "q9BQlBp583ZuuOnQ",
    armyBookName: "Goblins",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "q9BQlBp583ZuuOnQ",
    armyBookName: "Goblins",
    name: "Bombard",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll 2 dice. For each 2+ it takes 3 hits with AP(1).",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll 2 dice. For each 2+ it takes 3 hits with AP(1).",
    adjusted: false,
  },
  {
    armyBookUid: "q9BQlBp583ZuuOnQ",
    armyBookName: "Goblins",
    name: "Surprise",
    description:
      "This model counts as having the Ambush rule, and may be deployed up to 1” away from enemy units. Once deployed roll one die, on 2+ it deals 2 hits with AP(1) to one enemy unit within 3”.",
    skirmify:
      "This model counts as having the Ambush rule, and may be deployed up to 1” away from enemy units. Once deployed roll one die, on 2+ it deals 2 hits with AP(1) to one enemy unit within 3”.",
    adjusted: false,
  },
  {
    armyBookUid: "0EXXlzFwAk3q1n5e",
    armyBookName: "Halflings",
    name: "Attack Bombs",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll 1 die. On a 2+ it takes 3 hits with AP(1).",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll 1 die. On a 2+ it takes 3 hits with AP(1).",
    adjusted: false,
  },
  {
    armyBookUid: "0EXXlzFwAk3q1n5e",
    armyBookName: "Halflings",
    name: "Aura of Luck",
    description:
      "For each unmodified result of 6 to hit when attacking, the hero and its unit may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.",
    skirmify:
      "For each unmodified result of 6 to hit when attacking, this model and all friendly units within 12” may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.",
    adjusted: true,
  },
  {
    armyBookUid: "0EXXlzFwAk3q1n5e",
    armyBookName: "Halflings",
    name: "Halfling Artillerist",
    description:
      "Once per activation, pick one friendly Artillery unit within 6”, which may either get +2 to its shooting rolls or move up to 6” during its next activation.",
    skirmify:
      "Once per activation, pick one friendly Artillery unit within 6”, which may either get +2 to its shooting rolls or move up to 6” during its next activation.",
    adjusted: false,
  },
  {
    armyBookUid: "0EXXlzFwAk3q1n5e",
    armyBookName: "Halflings",
    name: "Chilling",
    description:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    skirmify:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "0EXXlzFwAk3q1n5e",
    armyBookName: "Halflings",
    name: "Battle Hungry",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "0EXXlzFwAk3q1n5e",
    armyBookName: "Halflings",
    name: "Sharpen Blades",
    description: "The hero and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "0EXXlzFwAk3q1n5e",
    armyBookName: "Halflings",
    name: "Slayer",
    description: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    skirmify: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "0EXXlzFwAk3q1n5e",
    armyBookName: "Halflings",
    name: "Swift",
    description: "This model may ignore the Slow rule.",
    skirmify: "This model may ignore the Slow rule.",
    adjusted: false,
  },
  {
    armyBookUid: "0EXXlzFwAk3q1n5e",
    armyBookName: "Halflings",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "0EXXlzFwAk3q1n5e",
    armyBookName: "Halflings",
    name: "Stumble",
    description: "This models moves +D3” on Advance and +2D3” on Rush/Charge actions.",
    skirmify: "This models moves +D3” on Advance and +2D3” on Rush/Charge actions.",
    adjusted: false,
  },
  {
    armyBookUid: "0EXXlzFwAk3q1n5e",
    armyBookName: "Halflings",
    name: "Surprise",
    description:
      "This models counts as having the Ambush rule, and may be deployed up to 1” away from enemy units. Once deployed roll one die, on 2+ it deals 2 hits with AP(1) to one enemy unit within 3”.",
    skirmify:
      "This models counts as having the Ambush rule, and may be deployed up to 1” away from enemy units. Once deployed roll one die, on 2+ it deals 2 hits with AP(1) to one enemy unit within 3”.",
    adjusted: false,
  },
  {
    armyBookUid: "7o6om21wxlvvy3hq",
    armyBookName: "Havoc Brothers",
    name: "Chosen Veteran",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "7o6om21wxlvvy3hq",
    armyBookName: "Havoc Brothers",
    name: "Dark Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "7o6om21wxlvvy3hq",
    armyBookName: "Havoc Brothers",
    name: "Mutations",
    description:
      "When this model fights in melee, roll one die and apply one bonus: \n* 1-3: Attacks get Rending \n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus: \n* 1-3: Attacks get Rending \n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "7o6om21wxlvvy3hq",
    armyBookName: "Havoc Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "7o6om21wxlvvy3hq",
    armyBookName: "Havoc Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "8siLk9I6-H8lk78b",
    armyBookName: "Havoc Dwarves",
    name: "Abyssal Icon",
    description:
      "Once per activation, before attacking, pick one enemy unit within 12”, which gets -2 to its next morale test roll.",
    skirmify:
      'Once per activation, before attacking, pick one enemy unit within 12”. That unit, and all enemy unit within 6" gets -2 to its next morale test roll.',
    adjusted: true,
  },
  {
    armyBookUid: "8siLk9I6-H8lk78b",
    armyBookName: "Havoc Dwarves",
    name: "Infernal Boon",
    description: "This model and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "8siLk9I6-H8lk78b",
    armyBookName: "Havoc Dwarves",
    name: "Black Heart",
    description: "This model may block spells as if it had the Wizard(2) special rule.",
    skirmify: "This model may block spells as if it had the Wizard(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "8siLk9I6-H8lk78b",
    armyBookName: "Havoc Dwarves",
    name: "Charred Shield",
    description: "The hero and its unit get the Regeneration special rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "8siLk9I6-H8lk78b",
    armyBookName: "Havoc Dwarves",
    name: "Ethereal",
    description:
      "Counts as having Stealth, Strider, as well as Regeneration against non-spell attacks (this stacks with Regeneration).",
    skirmify:
      "Counts as having Stealth, Strider, as well as Regeneration against non-spell attacks (this stacks with Regeneration).",
    adjusted: false,
  },
  {
    armyBookUid: "8siLk9I6-H8lk78b",
    armyBookName: "Havoc Dwarves",
    name: "Sadist",
    description:
      "Whenever the hero’s unit fails a morale test, you must kill one of its models, and the morale test counts as passed instead.",
    skirmify:
      "Whenever the hero’s unit fails a morale test, you must kill one of its models, and the morale test counts as passed instead.",
    adjusted: false,
  },
  {
    armyBookUid: "8siLk9I6-H8lk78b",
    armyBookName: "Havoc Dwarves",
    name: "Swift",
    description: "This model may ignore the Slow rule",
    skirmify: "This model may ignore the Slow rule",
    adjusted: false,
  },
  {
    armyBookUid: "8siLk9I6-H8lk78b",
    armyBookName: "Havoc Dwarves",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "8siLk9I6-H8lk78b",
    armyBookName: "Havoc Dwarves",
    name: "Slayer",
    description: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    skirmify: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "YtZxHkPQ5G_tPHID",
    armyBookName: "Havoc War Clans: The Beasts",
    name: "Hit & Run",
    description: "The hero and its unit may move by up to 3” after shooting.",
    skirmify: "This model and all friendly units within 12” may move by up to 3” after shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "YtZxHkPQ5G_tPHID",
    armyBookName: "Havoc War Clans: The Beasts",
    name: "Frontal Assault",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "YtZxHkPQ5G_tPHID",
    armyBookName: "Havoc War Clans: The Beasts",
    name: "Words of Haste",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "oPmF-PG99fpAR1tP",
    armyBookName: "Havoc War Clans: The Brood",
    name: "Spider Web",
    description:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    skirmify:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "oPmF-PG99fpAR1tP",
    armyBookName: "Havoc War Clans: The Brood",
    name: "Creeping Ascent",
    description: "The hero and its unit get the Scout special rule.",
    skirmify: "This model and all friendly units within 12” get the Scout special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "oPmF-PG99fpAR1tP",
    armyBookName: "Havoc War Clans: The Brood",
    name: "Summon Spiders",
    description:
      "When this model is activated, you may place a unit of 2 Spider Swarms fully within 6” of it.",
    skirmify:
      "When this model is activated, you may place a unit of 2 Spider Swarms fully within 6” of it.",
    adjusted: false,
  },
  {
    armyBookUid: "p2FhbQz3rKe-scXZ",
    armyBookName: "Havoc War Clans: The Crows",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "p2FhbQz3rKe-scXZ",
    armyBookName: "Havoc War Clans: The Crows",
    name: "Swoop Attack",
    description: "The hero and its unit get AP(+1) when charging.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "x8ApsmYO-6XallxU",
    armyBookName: "Havoc War Clans: The Cyphers",
    name: "Smoke Globes",
    description: "The hero and its unit get the Stealth special rule.",
    skirmify: "This model and all friendly units within 12” get the Stealth special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "x8ApsmYO-6XallxU",
    armyBookName: "Havoc War Clans: The Cyphers",
    name: "Shadow Illusion",
    description: "The hero and its unit get the Ambush special rule.",
    skirmify:
      "The hero and up to half of its army get the Ambush special rule (must deploy within 3” of the hero).",
    adjusted: true,
  },
  {
    armyBookUid: "CY1btmiWEHSpZHF9",
    armyBookName: "Havoc War Clans: The Golems",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "CY1btmiWEHSpZHF9",
    armyBookName: "Havoc War Clans: The Golems",
    name: "Set Example",
    description:
      "Whenever the hero’s unit fails a morale test, you must kill one of its models, and the morale test counts as passed instead.",
    skirmify:
      "Whenever the hero’s unit fails a morale test, you must kill one of its models, and the morale test counts as passed instead.",
    adjusted: false,
  },
  {
    armyBookUid: "CY1btmiWEHSpZHF9",
    armyBookName: "Havoc War Clans: The Golems",
    name: "Strong Leader",
    description: "The hero and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "CY1btmiWEHSpZHF9",
    armyBookName: "Havoc War Clans: The Golems",
    name: "Destructive",
    description:
      "This model may move through enemy units. Whenever it does, pick one of them and roll 1 die. On a 2+ it takes 3 hits with AP(1).",
    skirmify:
      "This model may move through enemy units. Whenever it does, pick one of them and roll 1 die. On a 2+ it takes 3 hits with AP(1).",
    adjusted: false,
  },
  {
    armyBookUid: "tlBKdHNTGC2GoBIP",
    armyBookName: "Havoc War Clans: The Mutilators",
    name: "Agony",
    description:
      "Whenever this unit takes a morale test, it is passed automatically. Then roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    skirmify:
      "Whenever this unit takes a morale test, it is passed automatically. Then roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    adjusted: false,
  },
  {
    armyBookUid: "tlBKdHNTGC2GoBIP",
    armyBookName: "Havoc War Clans: The Mutilators",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "tlBKdHNTGC2GoBIP",
    armyBookName: "Havoc War Clans: The Mutilators",
    name: "Torment",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "FLAHMucQ0tZWhXML",
    armyBookName: "Havoc War Clans: The Savage",
    name: "Frenzy",
    description: "This model gets +2 attacks with a weapon of your choice when charging.",
    skirmify: "This model gets +2 attacks with a weapon of your choice when charging.",
    adjusted: false,
  },
  {
    armyBookUid: "FLAHMucQ0tZWhXML",
    armyBookName: "Havoc War Clans: The Savage",
    name: "Dark Oath",
    description: "The hero and its unit get the Fast special rule.",
    skirmify: "This model and all friendly units within 12” get the Fast special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "-BpSetZWI7ifccf3",
    armyBookName: "Havoc War Clans: The Scions",
    name: "Fiery Ardour",
    description: "The hero and its unit get the Furious special rule.",
    skirmify: "This model and all friendly units within 12” get the Furious special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "-BpSetZWI7ifccf3",
    armyBookName: "Havoc War Clans: The Scions",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "jnCt04tG6Rj8XPP2",
    armyBookName: "Havoc War Clans: The Serpents",
    name: "Tireless Killer",
    description:
      "For each unmodified result of 6 to hit when attacking, the hero and its unit may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.",
    skirmify:
      "For each unmodified result of 6 to hit when attacking, this model and all friendly units within 12” may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.",
    adjusted: true,
  },
  {
    armyBookUid: "jnCt04tG6Rj8XPP2",
    armyBookName: "Havoc War Clans: The Serpents",
    name: "Serpent Call",
    description:
      "The hero and its unit's weapons with the Poison rule deal extra hits on rolls of 5-6.",
    skirmify:
      "This model and all friendly units within 12”'s weapons with the Poison rule deal extra hits on rolls of 5-6.",
    adjusted: true,
  },
  {
    armyBookUid: "b5tgp9Vkra6MYjwa",
    armyBookName: "Havoc War Clans: The Tyrants",
    name: "Battle Cry",
    description: "The hero and its unit get the Furious special rule.",
    skirmify: "This model and all friendly units within 12” get the Furious special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "b5tgp9Vkra6MYjwa",
    armyBookName: "Havoc War Clans: The Tyrants",
    name: "Defensive Stance",
    description: "The hero and its unit get the Shield Wall special rule.",
    skirmify: "This model and all friendly units within 12” get the Shield Wall special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "b5tgp9Vkra6MYjwa",
    armyBookName: "Havoc War Clans: The Tyrants",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "PGxKcq4R571OtwqD",
    armyBookName: "Havoc Warriors",
    name: "Battle Ready",
    description: "The hero and its unit get the Scout special rule.",
    skirmify: "This model and all friendly units within 12” get the Scout special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "PGxKcq4R571OtwqD",
    armyBookName: "Havoc Warriors",
    name: "Chosen Warrior",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "PGxKcq4R571OtwqD",
    armyBookName: "Havoc Warriors",
    name: "Dark Blessing",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get +1 to hit rolls next time they fight in melee.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get +1 to hit rolls next time they fight in melee.',
    adjusted: true,
  },
  {
    armyBookUid: "PGxKcq4R571OtwqD",
    armyBookName: "Havoc Warriors",
    name: "Doom Caller",
    description:
      "Once per activation, before attacking, pick one enemy unit within 12”, which gets -2 to its next morale test roll.",
    skirmify:
      'Once per activation, before attacking, pick one enemy unit within 12”. That unit, and all enemy unit within 6" gets -2 to its next morale test roll.',
    adjusted: true,
  },
  {
    armyBookUid: "PGxKcq4R571OtwqD",
    armyBookName: "Havoc Warriors",
    name: "Dark March",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "PGxKcq4R571OtwqD",
    armyBookName: "Havoc Warriors",
    name: "Mutations",
    description:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "7i7blhft75q9zfdc",
    armyBookName: "High Elf Fleets",
    name: "Drop Grenades",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    adjusted: false,
  },
  {
    armyBookUid: "7i7blhft75q9zfdc",
    armyBookName: "High Elf Fleets",
    name: "Hit & Run",
    description: "The hero and its unit may move by up to 3” after shooting.",
    skirmify: "This model and all friendly units within 12” may move by up to 3” after shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "7i7blhft75q9zfdc",
    armyBookName: "High Elf Fleets",
    name: "Seer Council",
    description:
      "Models with this rule count as having Psychic(1), however only one of them in the unit may cast or block spells each round. When casting or blocking spells, roll as many dice as models with this rule in the unit, and pick the highest result.",
    skirmify:
      "Models with this rule count as having Psychic(1), however only one of them in the unit may cast or block spells each round. When casting or blocking spells, roll as many dice as models with this rule in the unit, and pick the highest result.",
    adjusted: false,
  },
  {
    armyBookUid: "7i7blhft75q9zfdc",
    armyBookName: "High Elf Fleets",
    name: "Shield of Grace",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "7i7blhft75q9zfdc",
    armyBookName: "High Elf Fleets",
    name: "Teleport",
    description: "Once per activation, before attacking, place this model anywhere within 6”.",
    skirmify: "Once per activation, before attacking, place this model anywhere within 6”.",
    adjusted: false,
  },
  {
    armyBookUid: "7i7blhft75q9zfdc",
    armyBookName: "High Elf Fleets",
    name: "Very Fast",
    description: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    skirmify: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    adjusted: false,
  },
  {
    armyBookUid: "7i7blhft75q9zfdc",
    armyBookName: "High Elf Fleets",
    name: "Repair",
    description:
      "Once per turn, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per turn, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "7i7blhft75q9zfdc",
    armyBookName: "High Elf Fleets",
    name: "Speed Boost",
    description: "This model counts as having Very Fast instead of Fast.",
    skirmify: "This model counts as having Very Fast instead of Fast.",
    adjusted: false,
  },
  {
    armyBookUid: "bPAtRGFrpFfyAjLW",
    armyBookName: "High Elves",
    name: "Flame Attack",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 3 hits with AP(1).",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 3 hits with AP(1).",
    adjusted: false,
  },
  {
    armyBookUid: "bPAtRGFrpFfyAjLW",
    armyBookName: "High Elves",
    name: "High Prowess",
    description: "The hero and its unit get +1 to hit when in melee.",
    skirmify: "This model and all friendly units within 12” get +1 to hit when in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "bPAtRGFrpFfyAjLW",
    armyBookName: "High Elves",
    name: "Hit & Run",
    description: "The hero and its unit may move by up to 3” after shooting.",
    skirmify: "This model and all friendly units within 12” may move by up to 3” after shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "bPAtRGFrpFfyAjLW",
    armyBookName: "High Elves",
    name: "Icy Aura",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it gets -1 to hit next time it fights in melee.",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it gets -1 to hit next time it fights in melee.",
    adjusted: false,
  },
  {
    armyBookUid: "bPAtRGFrpFfyAjLW",
    armyBookName: "High Elves",
    name: "Mountain Blast",
    description:
      "Once per activation, before attacking, roll 2 dice. For each 2+ deal 3 hits with AP(1) to one enemy unit within 6” (this may target multiple units).",
    skirmify:
      "Once per activation, before attacking, roll 2 dice. For each 2+ deal 3 hits with AP(1) to one enemy unit within 6” (this may target multiple units).",
    adjusted: false,
  },
  {
    armyBookUid: "bPAtRGFrpFfyAjLW",
    armyBookName: "High Elves",
    name: "Protective Aura",
    description: "The hero and its unit get the Stealth special rule.",
    skirmify: "This model and all friendly units within 12” get the Stealth special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "bPAtRGFrpFfyAjLW",
    armyBookName: "High Elves",
    name: "Quick Shot",
    description: "This model may shoot even after using Rush actions.",
    skirmify: "This model may shoot even after using Rush actions.",
    adjusted: false,
  },
  {
    armyBookUid: "QLc-VZfaCrA-upfK",
    armyBookName: "Hive City Gangs: The Artisans",
    name: "Radiation",
    description:
      "Enemies that roll to block hits from this weapon take one additional wound for each unmodified result of 1 that they roll.",
    skirmify:
      "Enemies that roll to block hits from this weapon take one additional wound for each unmodified result of 1 that they roll.",
    adjusted: false,
  },
  {
    armyBookUid: "QLc-VZfaCrA-upfK",
    armyBookName: "Hive City Gangs: The Artisans",
    name: "Radiation Power",
    description: "The hero and its unit get the Radiation rule when shooting.",
    skirmify: "This model and all friendly units within 12” get the Radiation rule when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "QLc-VZfaCrA-upfK",
    armyBookName: "Hive City Gangs: The Artisans",
    name: "Overseer",
    description: "The hero and its unit get +6” range when shooting.",
    skirmify: "This model and all friendly units within 12” get +6” range when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "QLc-VZfaCrA-upfK",
    armyBookName: "Hive City Gangs: The Artisans",
    name: "Cyber-Eyes",
    description: "This model gets +1 to hit rolls when shooting.",
    skirmify: "This model gets +1 to hit rolls when shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "dE1QAHu--chopv1H",
    armyBookName: "Hive City Gangs: The Brutes",
    name: "Pit Fighter",
    description: "The hero and its unit get +1 to hit in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 to hit in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "dE1QAHu--chopv1H",
    armyBookName: "Hive City Gangs: The Brutes",
    name: "Stubborn",
    description: "The hero and its unit get the Fearless special rule.",
    skirmify: "This model and all friendly units within 12” get the Fearless special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "M7JR7Jwr2fq1I6tw",
    armyBookName: "Hive City Gangs: The Cannibals",
    name: "Frenzy",
    description: "This model gets +2 attacks with a weapon of your choice when charging.",
    skirmify: "This model gets +2 attacks with a weapon of your choice when charging.",
    adjusted: false,
  },
  {
    armyBookUid: "M7JR7Jwr2fq1I6tw",
    armyBookName: "Hive City Gangs: The Cannibals",
    name: "Feeding Frenzy",
    description: "The hero and its unit move +4” on Charge actions.",
    skirmify: "This model and all friendly units within 12” move +4” on Charge actions.",
    adjusted: true,
  },
  {
    armyBookUid: "M7JR7Jwr2fq1I6tw",
    armyBookName: "Hive City Gangs: The Cannibals",
    name: "Sharpen Blades",
    description: "The hero and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "_1Qyu99g45wBxBLJ",
    armyBookName: "Hive City Gangs: The Cult",
    name: "Cult Icon",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "_1Qyu99g45wBxBLJ",
    armyBookName: "Hive City Gangs: The Cult",
    name: "Redemption",
    description: 'The hero and its unit get +1 to hit rolls when shooting at enemies within 12".',
    skirmify:
      'This model and all friendly units within 12” get +1 to hit rolls when shooting at enemies within 12".',
    adjusted: true,
  },
  {
    armyBookUid: "_1Qyu99g45wBxBLJ",
    armyBookName: "Hive City Gangs: The Cult",
    name: "Visionary",
    description: "The hero and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "4iqkVA8YrsKpGC0L",
    armyBookName: "Hive City Gangs: The Enforcers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "4iqkVA8YrsKpGC0L",
    armyBookName: "Hive City Gangs: The Enforcers",
    name: "Boot Stomp",
    description: "The hero and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "4iqkVA8YrsKpGC0L",
    armyBookName: "Hive City Gangs: The Enforcers",
    name: "Maintain Order",
    description:
      'Once per activation, before attacking, pick one enemy unit within 12” of this model, which you may move by up to 6" in any direction.',
    skirmify:
      'Once per activation, before attacking, pick one enemy unit within 12” of this model. That unit, and all enemy unit within 6" you may move by up to 6" in any direction.',
    adjusted: true,
  },
  {
    armyBookUid: "785w6AayhGJ-eAsl",
    armyBookName: "Hive City Gangs: The Femmes",
    name: "Provider",
    description: "The hero and its unit get AP(+1) when shooting.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "785w6AayhGJ-eAsl",
    armyBookName: "Hive City Gangs: The Femmes",
    name: "Rageaholic",
    description: "The hero and its unit get the Furious special rule.",
    skirmify: "This model and all friendly units within 12” get the Furious special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "iTqvOzPAUtIrWy2d",
    armyBookName: "Hive City Gangs: The Hidden",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "iTqvOzPAUtIrWy2d",
    armyBookName: "Hive City Gangs: The Hidden",
    name: "Saboteur",
    description: "The hero and its unit get the Ambush special rule.",
    skirmify:
      "The hero and up to half of its army get the Ambush special rule (must deploy within 3” of the hero).",
    adjusted: true,
  },
  {
    armyBookUid: "iTqvOzPAUtIrWy2d",
    armyBookName: "Hive City Gangs: The Hidden",
    name: "Silent Assassin",
    description:
      "The hero and its unit get +1 attack when charging enemies that were outside of line of sight when they activated.",
    skirmify:
      "This model and all friendly units within 12” get +1 attack when charging enemies that were outside of line of sight when they activated.",
    adjusted: true,
  },
  {
    armyBookUid: "AUd5CVbHgU8gA3cn",
    armyBookName: "Hive City Gangs: The Mercenaries",
    name: "Ammo Box",
    description: "The hero and its unit get AP(+1) when shooting.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "AUd5CVbHgU8gA3cn",
    armyBookName: "Hive City Gangs: The Mercenaries",
    name: "Slop Rations",
    description: "The hero and its unit get AP(+1) in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "AUd5CVbHgU8gA3cn",
    armyBookName: "Hive City Gangs: The Mercenaries",
    name: "Mark Enemies",
    description: 'The hero and its unit get +6" range when shooting.',
    skirmify: 'This model and all friendly units within 12” get +6" range when shooting.',
    adjusted: true,
  },
  {
    armyBookUid: "AUd5CVbHgU8gA3cn",
    armyBookName: "Hive City Gangs: The Mercenaries",
    name: "Medic",
    description: "The hero and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "rmT8eNwtIZDFdY7d",
    armyBookName: "Hive City Gangs: The Miners",
    name: "Fighting Spirit",
    description: "The hero and its unit may shoot even after using Rush actions.",
    skirmify:
      "This model and all friendly units within 12” may shoot even after using Rush actions.",
    adjusted: true,
  },
  {
    armyBookUid: "rmT8eNwtIZDFdY7d",
    armyBookName: "Hive City Gangs: The Miners",
    name: "Stand Ground",
    description: "The hero and its unit get +1 attack with a weapon of your choice when charged.",
    skirmify:
      "This model and all friendly units within 12” get +1 attack with a weapon of your choice when charged.",
    adjusted: true,
  },
  {
    armyBookUid: "HHB5bOViGIsqqfRG",
    armyBookName: "Hive City Gangs: The Nomads",
    name: "Taser",
    description: "Unmodified results of 6 to hit are multiplied by 4.",
    skirmify: "Unmodified results of 6 to hit are multiplied by 4.",
    adjusted: false,
  },
  {
    armyBookUid: "HHB5bOViGIsqqfRG",
    armyBookName: "Hive City Gangs: The Nomads",
    name: "Martial Prowess",
    description:
      "The hero and its unit get +2 to hit rolls in melee or shooting whilst inside terrain (pick one).",
    skirmify:
      "This model and all friendly units within 12” get +2 to hit rolls in melee or shooting whilst inside terrain (pick one).",
    adjusted: true,
  },
  {
    armyBookUid: "HHB5bOViGIsqqfRG",
    armyBookName: "Hive City Gangs: The Nomads",
    name: "Prowl",
    description:
      "Enemy units over 18” away get -2 to their rolls when shooting at the hero and its unit whilst they are inside terrain.",
    skirmify:
      "Enemy units over 18” away get -2 to their rolls when shooting at this model and all friendly units within 12” whilst they are inside terrain.",
    adjusted: true,
  },
  {
    armyBookUid: "HeKDsYrUHjzIwyfj",
    armyBookName: "Hive City Gangs: The Ogres",
    name: "Taser",
    description: "Unmodified results of 6 to hit are multiplied by 4.",
    skirmify: "Unmodified results of 6 to hit are multiplied by 4.",
    adjusted: false,
  },
  {
    armyBookUid: "HeKDsYrUHjzIwyfj",
    armyBookName: "Hive City Gangs: The Ogres",
    name: "Sharpen Blades",
    description: "The hero and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "HeKDsYrUHjzIwyfj",
    armyBookName: "Hive City Gangs: The Ogres",
    name: "Pit Fighter",
    description: "The hero and its unit get +1 to hit in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 to hit in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "z65fgu0l29i4lnlu",
    armyBookName: "Human Defense Force",
    name: "Battle Drills",
    description: "The hero and its unit get the Furious special rule.",
    skirmify: "This model and all friendly units within 12” get the Furious special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "z65fgu0l29i4lnlu",
    armyBookName: "Human Defense Force",
    name: "Double Time",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "z65fgu0l29i4lnlu",
    armyBookName: "Human Defense Force",
    name: "Company Standard",
    description:
      "Once per activation, pick 2 friendly units within 12”, which get +1 to their next morale test roll.",
    skirmify:
      'Once per activation, pick 2 friendly units within 12”. Those units, and all friendly units within 6" get +1 to their next morale test roll.',
    adjusted: true,
  },
  {
    armyBookUid: "z65fgu0l29i4lnlu",
    armyBookName: "Human Defense Force",
    name: "Field Radio",
    description:
      "If this unit has a hero with the Double Time, Focus Fire or Take Aim rule, then it may use it on units that have a Field Radio up to 24” away.",
    skirmify:
      "If this unit has a hero with the Double Time, Focus Fire or Take Aim rule, then it may use it on units that have a Field Radio up to 24” away.",
    adjusted: false,
  },
  {
    armyBookUid: "z65fgu0l29i4lnlu",
    armyBookName: "Human Defense Force",
    name: "Take Aim",
    description:
      "Once per activation, before attacking, pick one friendly unit within 12” of this model, which gets +1 to hit next time it shoots.",
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" gets +1 to hit next time it shoots.',
    adjusted: true,
  },
  {
    armyBookUid: "z65fgu0l29i4lnlu",
    armyBookName: "Human Defense Force",
    name: "Focus Fire",
    description:
      "Once per activation, before attacking, pick one friendly unit within 12” of this model, which gets AP(+1) next time it shoots.",
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" gets AP(+1) next time it shoots.',
    adjusted: true,
  },
  {
    armyBookUid: "z65fgu0l29i4lnlu",
    armyBookName: "Human Defense Force",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "z65fgu0l29i4lnlu",
    armyBookName: "Human Defense Force",
    name: "Set Example",
    description:
      "Whenever the hero’s unit fails a morale test, you must kill one of its models, and the morale test counts as passed instead.",
    skirmify:
      "Whenever the hero’s unit fails a morale test, you must kill one of its models, and the morale test counts as passed instead.",
    adjusted: false,
  },
  {
    armyBookUid: "jpc0kyil0juwy602",
    armyBookName: "Human Inquisition",
    name: "Alien Hunter",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "jpc0kyil0juwy602",
    armyBookName: "Human Inquisition",
    name: "Beacon",
    description:
      "Friendly units using Ambush may ignore distance restrictions from enemies if they are deployed within 6” of this model.",
    skirmify:
      "Friendly units using Ambush may ignore distance restrictions from enemies if they are deployed within 6” of this model.",
    adjusted: false,
  },
  {
    armyBookUid: "jpc0kyil0juwy602",
    armyBookName: "Human Inquisition",
    name: "Daemon Hunter",
    description: "Enemy units can’t be set up within 18” of the hero when using Ambush.",
    skirmify: "Enemy units can’t be set up within 18” of the hero when using Ambush.",
    adjusted: false,
  },
  {
    armyBookUid: "jpc0kyil0juwy602",
    armyBookName: "Human Inquisition",
    name: "Psychic Host",
    description:
      "Models with this rule count as having Psychic(1), however only one of them in the unit may cast or block spells each round. When casting or blocking spells, roll as many dice as models with this rule in the unit, and pick the highest result.",
    skirmify:
      "Models with this rule count as having Psychic(1), however only one of them in the unit may cast or block spells each round. When casting or blocking spells, roll as many dice as models with this rule in the unit, and pick the highest result.",
    adjusted: false,
  },
  {
    armyBookUid: "jpc0kyil0juwy602",
    armyBookName: "Human Inquisition",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "jpc0kyil0juwy602",
    armyBookName: "Human Inquisition",
    name: "Witch Hunter",
    description:
      "This model may block spells as if it had the Psychic(2) special rule. If it is a Psychic then it gets +2 to spell block rolls.",
    skirmify:
      "This model may block spells as if it had the Psychic(2) special rule. If it is a Psychic then it gets +2 to spell block rolls.",
    adjusted: false,
  },
  {
    armyBookUid: "jZ02AVPLx_S48Mnb",
    armyBookName: "Humans",
    name: "Aura of Fury",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get Furious next time they fight in melee.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get Furious next time they fight in melee.',
    adjusted: true,
  },
  {
    armyBookUid: "jZ02AVPLx_S48Mnb",
    armyBookName: "Humans",
    name: "Artillerist",
    description:
      "Once per activation, pick one friendly Artillery unit within 6”, which may either get +2 to its shooting rolls or move up to 6” during its next activation.",
    skirmify:
      "Once per activation, pick one friendly Artillery unit within 6”, which may either get +2 to its shooting rolls or move up to 6” during its next activation.",
    adjusted: false,
  },
  {
    armyBookUid: "jZ02AVPLx_S48Mnb",
    armyBookName: "Humans",
    name: "Battle Aura",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get +1 to hit rolls next time they fight in melee.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get +1 to hit rolls next time they fight in melee.',
    adjusted: true,
  },
  {
    armyBookUid: "jZ02AVPLx_S48Mnb",
    armyBookName: "Humans",
    name: "Battle Chant",
    description: "The hero and its unit get the Furious special rule.",
    skirmify: "This model and all friendly units within 12” get the Furious special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "jZ02AVPLx_S48Mnb",
    armyBookName: "Humans",
    name: "Inspiring",
    description: "If the hero is part of a unit of Infantrymen, it counts as having Quality 4+.",
    skirmify: "If the hero is part of a unit of Infantrymen, it counts as having Quality 4+.",
    adjusted: false,
  },
  {
    armyBookUid: "jZ02AVPLx_S48Mnb",
    armyBookName: "Humans",
    name: "Protective Aura",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get +1 to their defense rolls next time they take hits.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get +1 to their defense rolls next time they take hits.',
    adjusted: true,
  },
  {
    armyBookUid: "jZ02AVPLx_S48Mnb",
    armyBookName: "Humans",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "jZ02AVPLx_S48Mnb",
    armyBookName: "Humans",
    name: "Battle March",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "jZ02AVPLx_S48Mnb",
    armyBookName: "Humans",
    name: "Boing",
    description: "This models moves +D3” on Advance and +2D3” on Rush/Charge actions.",
    skirmify: "This models moves +D3” on Advance and +2D3” on Rush/Charge actions.",
    adjusted: false,
  },
  {
    armyBookUid: "dnthspt7c0klhmt8",
    armyBookName: "Infected Colonies",
    name: "Bloodthirsty",
    description: "The hero and its unit get the Furious special rule.",
    skirmify: "This model and all friendly units within 12” get the Furious special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "dnthspt7c0klhmt8",
    armyBookName: "Infected Colonies",
    name: "Boom",
    description: "If this model is killed in melee, the attacking unit takes 3 automatic hits.",
    skirmify: "If this model is killed in melee, the attacking unit takes 3 automatic hits.",
    adjusted: false,
  },
  {
    armyBookUid: "dnthspt7c0klhmt8",
    armyBookName: "Infected Colonies",
    name: "Mutating",
    description: "The hero and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "dnthspt7c0klhmt8",
    armyBookName: "Infected Colonies",
    name: "Plague Command",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "dnthspt7c0klhmt8",
    armyBookName: "Infected Colonies",
    name: "Terrifying",
    description:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    skirmify:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "dnthspt7c0klhmt8",
    armyBookName: "Infected Colonies",
    name: "Undead",
    description:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    skirmify:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    adjusted: false,
  },
  {
    armyBookUid: "BKi_hJaJflN8ZorH",
    armyBookName: "Jackals",
    name: "Beacon",
    description:
      "Friendly units using Ambush may ignore distance restrictions from enemies if they are deployed within 6” of this model.",
    skirmify:
      "Friendly units using Ambush may ignore distance restrictions from enemies if they are deployed within 6” of this model.",
    adjusted: false,
  },
  {
    armyBookUid: "BKi_hJaJflN8ZorH",
    armyBookName: "Jackals",
    name: "Bounding",
    description: "This models moves +D3” on Advance and +2D3” on Rush/Charge actions.",
    skirmify: "This models moves +D3” on Advance and +2D3” on Rush/Charge actions.",
    adjusted: false,
  },
  {
    armyBookUid: "BKi_hJaJflN8ZorH",
    armyBookName: "Jackals",
    name: "Charged Ammo",
    description:
      "This model counts as having the Ambush rule, and gets AP(+3) when shooting on the round in which it deploys.",
    skirmify:
      "This model counts as having the Ambush rule, and gets AP(+3) when shooting on the round in which it deploys.",
    adjusted: false,
  },
  {
    armyBookUid: "BKi_hJaJflN8ZorH",
    armyBookName: "Jackals",
    name: "Dodge",
    description: "This model gets +2 to defense rolls when fighting in melee.",
    skirmify: "This model gets +2 to defense rolls when fighting in melee.",
    adjusted: false,
  },
  {
    armyBookUid: "BKi_hJaJflN8ZorH",
    armyBookName: "Jackals",
    name: "Hidden Route",
    description: "The hero and its unit get the Ambush special rule.",
    skirmify:
      "The hero and up to half of its army get the Ambush special rule (must deploy within 3” of the hero).",
    adjusted: true,
  },
  {
    armyBookUid: "BKi_hJaJflN8ZorH",
    armyBookName: "Jackals",
    name: "Martial Prowess",
    description:
      "The hero and its unit get +2 to hit rolls in melee or shooting whilst inside terrain (pick one).",
    skirmify:
      "This model and all friendly units within 12” get +2 to hit rolls in melee or shooting whilst inside terrain (pick one).",
    adjusted: true,
  },
  {
    armyBookUid: "BKi_hJaJflN8ZorH",
    armyBookName: "Jackals",
    name: "Prowl",
    description:
      "Enemy units over 18” away get -2 to their rolls when shooting at the hero and its unit whilst they are inside terrain.",
    skirmify:
      "Enemy units over 18” away get -2 to their rolls when shooting at this model and all friendly units within 12” whilst they are inside terrain.",
    adjusted: true,
  },
  {
    armyBookUid: "BKi_hJaJflN8ZorH",
    armyBookName: "Jackals",
    name: "Scrap Ammo",
    description: "The hero and its unit get Rending when shooting.",
    skirmify: "This model and all friendly units within 12” get Rending when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "BKi_hJaJflN8ZorH",
    armyBookName: "Jackals",
    name: "Stinger Bombs",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    adjusted: false,
  },
  {
    armyBookUid: "BKi_hJaJflN8ZorH",
    armyBookName: "Jackals",
    name: "Taser",
    description: "Unmodified results of 6 to hit are multiplied by 4.",
    skirmify: "Unmodified results of 6 to hit are multiplied by 4.",
    adjusted: false,
  },
  {
    armyBookUid: "BKi_hJaJflN8ZorH",
    armyBookName: "Jackals",
    name: "Carnivore",
    description: "This model gets +1 to hit rolls when in melee.",
    skirmify: "This model gets +1 to hit rolls when in melee.",
    adjusted: false,
  },
  {
    armyBookUid: "RgHxqAlAXnUuF3ty",
    armyBookName: "Kingdom of Angels",
    name: "Angelic Aura",
    description:
      "Once per activation, pick 2 friendly units within 12”, which get +1 to their next morale test roll.",
    skirmify:
      'Once per activation, pick 2 friendly units within 12”. Those units, and all friendly units within 6" get +1 to their next morale test roll.',
    adjusted: true,
  },
  {
    armyBookUid: "RgHxqAlAXnUuF3ty",
    armyBookName: "Kingdom of Angels",
    name: "Angelic Shield",
    description: "This model may block spells as if it had the Wizard(2) special rule.",
    skirmify: "This model may block spells as if it had the Wizard(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "RgHxqAlAXnUuF3ty",
    armyBookName: "Kingdom of Angels",
    name: "At the Double",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "RgHxqAlAXnUuF3ty",
    armyBookName: "Kingdom of Angels",
    name: "Embers",
    description:
      "Whenever this unit moves over enemy units, pick one of them and roll one die, on a 2+ it takes 3 hits with AP(1).",
    skirmify:
      "Whenever this unit moves over enemy units, pick one of them and roll one die, on a 2+ it takes 3 hits with AP(1).",
    adjusted: false,
  },
  {
    armyBookUid: "RgHxqAlAXnUuF3ty",
    armyBookName: "Kingdom of Angels",
    name: "Frost",
    description:
      "Whenever this unit moves over enemy units, pick one of them and roll one die, on a 2+ it gets -1 to hit next time it fights in melee.",
    skirmify:
      "Whenever this unit moves over enemy units, pick one of them and roll one die, on a 2+ it gets -1 to hit next time it fights in melee.",
    adjusted: false,
  },
  {
    armyBookUid: "RgHxqAlAXnUuF3ty",
    armyBookName: "Kingdom of Angels",
    name: "Harsh Master",
    description: "The hero and its unit get +1 to hit rolls in melee.",
    skirmify: "This model and all friendly units within 12” get +1 to hit rolls in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "w70ha3o85pa7nigq",
    armyBookName: "Knight Brothers",
    name: "Advanced Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "w70ha3o85pa7nigq",
    armyBookName: "Knight Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "w70ha3o85pa7nigq",
    armyBookName: "Knight Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "w70ha3o85pa7nigq",
    armyBookName: "Knight Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "w70ha3o85pa7nigq",
    armyBookName: "Knight Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "w70ha3o85pa7nigq",
    armyBookName: "Knight Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "w70ha3o85pa7nigq",
    armyBookName: "Knight Brothers",
    name: "Veteran Walker",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "w70ha3o85pa7nigq",
    armyBookName: "Knight Brothers",
    name: "Aegis",
    description:
      "This unit may block spells as if it had the Psychic(2) special rule. If it is a Psychic then it gets +2 to spell block rolls.",
    skirmify:
      "This unit may block spells as if it had the Psychic(2) special rule. If it is a Psychic then it gets +2 to spell block rolls.",
    adjusted: false,
  },
  {
    armyBookUid: "w70ha3o85pa7nigq",
    armyBookName: "Knight Brothers",
    name: "Combat Master",
    description:
      "When this model fights in melee, roll one die and apply the bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply the bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "w70ha3o85pa7nigq",
    armyBookName: "Knight Brothers",
    name: "Destroyer Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "w70ha3o85pa7nigq",
    armyBookName: "Knight Brothers",
    name: "Teleport",
    description: "Once per activation, before attacking, place this model anywhere within 6”.",
    skirmify: "Once per activation, before attacking, place this model anywhere within 6”.",
    adjusted: false,
  },
  {
    armyBookUid: "wopr4xvwa51xh3mc",
    armyBookName: "Knight Prime Brothers",
    name: "Battle Rites",
    description: "The hero and its unit get +1 to hit when shooting.",
    skirmify: "This model and all friendly units within 12” get +1 to hit when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "wopr4xvwa51xh3mc",
    armyBookName: "Knight Prime Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "wopr4xvwa51xh3mc",
    armyBookName: "Knight Prime Brothers",
    name: "Precision Shots",
    description: "The hero and its unit get AP(+1) when shooting.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "wopr4xvwa51xh3mc",
    armyBookName: "Knight Prime Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "wopr4xvwa51xh3mc",
    armyBookName: "Knight Prime Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "wopr4xvwa51xh3mc",
    armyBookName: "Knight Prime Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "wopr4xvwa51xh3mc",
    armyBookName: "Knight Prime Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "wopr4xvwa51xh3mc",
    armyBookName: "Knight Prime Brothers",
    name: "Aegis",
    description:
      "This unit may block spells as if it had the Psychic(2) special rule. If it is a Psychic then it gets +2 to spell block rolls.",
    skirmify:
      "This unit may block spells as if it had the Psychic(2) special rule. If it is a Psychic then it gets +2 to spell block rolls.",
    adjusted: false,
  },
  {
    armyBookUid: "wopr4xvwa51xh3mc",
    armyBookName: "Knight Prime Brothers",
    name: "Combat Master",
    description:
      "When the hero fights in melee, roll one die and apply the bonus:\n• 1-2: Attacks get Poison\n• 3-4: Attacks get Rending\n• 5-6: Attacks get AP(+1)",
    skirmify:
      "When the hero fights in melee, roll one die and apply the bonus:\n• 1-2: Attacks get Poison\n• 3-4: Attacks get Rending\n• 5-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "drqw1iswxmuugp3d",
    armyBookName: "Lust Disciples",
    name: "Chosen Veteran",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "drqw1iswxmuugp3d",
    armyBookName: "Lust Disciples",
    name: "Dark Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "drqw1iswxmuugp3d",
    armyBookName: "Lust Disciples",
    name: "Mutations",
    description:
      "When this model fights in melee, roll one die and apply one bonus: \n* 1-3: Attacks get Rending \n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus: \n* 1-3: Attacks get Rending \n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "drqw1iswxmuugp3d",
    armyBookName: "Lust Disciples",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "drqw1iswxmuugp3d",
    armyBookName: "Lust Disciples",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "drqw1iswxmuugp3d",
    armyBookName: "Lust Disciples",
    name: "Gift of Lust",
    description: "The hero and its unit move +2” on Advance and +4” on Rush/Charge.",
    skirmify:
      "This model and all friendly units within 12” move +2” on Advance and +4” on Rush/Charge.",
    adjusted: true,
  },
  {
    armyBookUid: "drqw1iswxmuugp3d",
    armyBookName: "Lust Disciples",
    name: "Speed Boost",
    description: "This model counts as having Very Fast instead of Fast.",
    skirmify: "This model counts as having Very Fast instead of Fast.",
    adjusted: false,
  },
  {
    armyBookUid: "drqw1iswxmuugp3d",
    armyBookName: "Lust Disciples",
    name: "Very Fast",
    description: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    skirmify: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    adjusted: false,
  },
  {
    armyBookUid: "zZ3RNHVtFJIZqzzN",
    armyBookName: "Lust Disciples",
    name: "Battle Ready",
    description: "The hero and its unit get the Scout special rule.",
    skirmify: "This model and all friendly units within 12” get the Scout special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "zZ3RNHVtFJIZqzzN",
    armyBookName: "Lust Disciples",
    name: "Chosen Warrior",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "zZ3RNHVtFJIZqzzN",
    armyBookName: "Lust Disciples",
    name: "Dark Blessing",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get +1 to hit rolls next time they fight in melee.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get +1 to hit rolls next time they fight in melee.',
    adjusted: true,
  },
  {
    armyBookUid: "zZ3RNHVtFJIZqzzN",
    armyBookName: "Lust Disciples",
    name: "Doom Caller",
    description:
      "Once per activation, before attacking, pick 2 enemy units within 12”, which get -2 to their next morale roll.",
    skirmify:
      'Once per activation, before attacking, pick 2 enemy units within 12”. Those units, and all enemy units within 6" get -2 to their next morale roll.',
    adjusted: true,
  },
  {
    armyBookUid: "zZ3RNHVtFJIZqzzN",
    armyBookName: "Lust Disciples",
    name: "Dark March",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "zZ3RNHVtFJIZqzzN",
    armyBookName: "Lust Disciples",
    name: "Mutations",
    description:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "zZ3RNHVtFJIZqzzN",
    armyBookName: "Lust Disciples",
    name: "Blessing of Lust",
    description: "The hero and its unit move +2” on Advance and +4” on Rush/Charge.",
    skirmify:
      "This model and all friendly units within 12” move +2” on Advance and +4” on Rush/Charge.",
    adjusted: true,
  },
  {
    armyBookUid: "zZ3RNHVtFJIZqzzN",
    armyBookName: "Lust Disciples",
    name: "Twin Souls",
    description:
      "For each unmodified result of 6 to hit when attacking, this model may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.",
    skirmify:
      "For each unmodified result of 6 to hit when attacking, this model may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.",
    adjusted: false,
  },
  {
    armyBookUid: "zZ3RNHVtFJIZqzzN",
    armyBookName: "Lust Disciples",
    name: "Very Fast",
    description: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    skirmify: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    adjusted: false,
  },
  {
    armyBookUid: "zZ3RNHVtFJIZqzzN",
    armyBookName: "Lust Disciples",
    name: "Speed Boost",
    description: "This model counts as having Very Fast instead of Fast.",
    skirmify: "This model counts as having Very Fast instead of Fast.",
    adjusted: false,
  },
  {
    armyBookUid: "7el7k3hgy5pb9o9i",
    armyBookName: "Machine Cult",
    name: "Canticles",
    description: "The hero and its unit get AP(+1) when shooting.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "7el7k3hgy5pb9o9i",
    armyBookName: "Machine Cult",
    name: "Cluster Grenades",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    adjusted: false,
  },
  {
    armyBookUid: "7el7k3hgy5pb9o9i",
    armyBookName: "Machine Cult",
    name: "Phosphor",
    description: "This weapon ignores cover.",
    skirmify: "This weapon ignores cover.",
    adjusted: false,
  },
  {
    armyBookUid: "7el7k3hgy5pb9o9i",
    armyBookName: "Machine Cult",
    name: "Psalms",
    description: "The hero and its unit move +2” on Advance and +4” on Rush/Charge.",
    skirmify:
      "This model and all friendly units within 12” move +2” on Advance and +4” on Rush/Charge.",
    adjusted: true,
  },
  {
    armyBookUid: "7el7k3hgy5pb9o9i",
    armyBookName: "Machine Cult",
    name: "Radiation",
    description:
      "Enemies that roll to block hits from this weapon take one additional wound for each unmodified result of 1 that they roll.",
    skirmify:
      "Enemies that roll to block hits from this weapon take one additional wound for each unmodified result of 1 that they roll.",
    adjusted: false,
  },
  {
    armyBookUid: "7el7k3hgy5pb9o9i",
    armyBookName: "Machine Cult",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "7el7k3hgy5pb9o9i",
    armyBookName: "Machine Cult",
    name: "Anti-Charge System",
    description:
      "Enemy units charging this model must take a dangerous terrain test rolling twice the amount of dice.",
    skirmify:
      "Enemy units charging this model must take a dangerous terrain test rolling twice the amount of dice.",
    adjusted: false,
  },
  {
    armyBookUid: "t-sIke2snonFSL6Q",
    armyBookName: "Mummified Undead",
    name: "Ancient Wrath",
    description: "The hero and its unit get the Furious special rule.",
    skirmify: "This model and all friendly units within 12” get the Furious special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "t-sIke2snonFSL6Q",
    armyBookName: "Mummified Undead",
    name: "Cursed Ammo",
    description: "Ignores all negative modifiers to hit rolls when shooting.",
    skirmify: "Ignores all negative modifiers to hit rolls when shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "t-sIke2snonFSL6Q",
    armyBookName: "Mummified Undead",
    name: "Private Guard",
    description:
      "If the hero is part of a unit of Skeleton Warriors, the unit counts as having Quality 4+.",
    skirmify: 'All friendly units of Skeleton Warriors within 12" count as having Quality 4+.',
    adjusted: true,
  },
  {
    armyBookUid: "t-sIke2snonFSL6Q",
    armyBookName: "Mummified Undead",
    name: "Undead",
    description:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    skirmify:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    adjusted: false,
  },
  {
    armyBookUid: "t-sIke2snonFSL6Q",
    armyBookName: "Mummified Undead",
    name: "Poison Blades",
    description: "The hero and its unit get the Poison special rule in melee.",
    skirmify: "This model and all friendly units within 12” get the Poison special rule in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "lpRj9EBwROpO1um7",
    armyBookName: "Ogres",
    name: "Bully",
    description:
      "Whenever the hero’s unit fails a morale test, it takes D3 wounds, and the morale test counts as passed instead.",
    skirmify:
      "Whenever the hero’s unit fails a morale test, it takes D3 wounds, and the morale test counts as passed instead.",
    adjusted: false,
  },
  {
    armyBookUid: "lpRj9EBwROpO1um7",
    armyBookName: "Ogres",
    name: "Chilling Aura",
    description:
      "Once per activation, pick 2 enemy units within 6”, which get -1 to hit rolls next time they fight in melee.",
    skirmify:
      'Once per activation, pick 2 enemy units within 6”. Those units, and all enemy units within 6" get -1 to hit rolls next time they fight in melee.',
    adjusted: true,
  },
  {
    armyBookUid: "lpRj9EBwROpO1um7",
    armyBookName: "Ogres",
    name: "Devour",
    description:
      "Enemies that roll to block melee hits from this model take one additional wound for each unmodified result of 1 that they roll.",
    skirmify:
      "Enemies that roll to block melee hits from this model take one additional wound for each unmodified result of 1 that they roll.",
    adjusted: false,
  },
  {
    armyBookUid: "lpRj9EBwROpO1um7",
    armyBookName: "Ogres",
    name: "Chilling",
    description:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    skirmify:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "lpRj9EBwROpO1um7",
    armyBookName: "Ogres",
    name: "Healing Aura",
    description: "The hero and its unit count as having Regeneration.",
    skirmify: "This model and all friendly units within 12” count as having Regeneration.",
    adjusted: true,
  },
  {
    armyBookUid: "lpRj9EBwROpO1um7",
    armyBookName: "Ogres",
    name: "Hunter",
    description: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    skirmify: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "lpRj9EBwROpO1um7",
    armyBookName: "Ogres",
    name: "Trample",
    description: "The hero and its unit count as having Impact(1).",
    skirmify: "This model and all friendly units within 12” count as having Impact(1).",
    adjusted: true,
  },
  {
    armyBookUid: "lpRj9EBwROpO1um7",
    armyBookName: "Ogres",
    name: "Stone Bones",
    description: "Ignores AP when blocking hits.",
    skirmify: "Ignores AP when blocking hits.",
    adjusted: false,
  },
  {
    armyBookUid: "1wj1ysgxpuuz9bc7",
    armyBookName: "Orc Marauders",
    name: "Bad Shot",
    description: "This model shoots at Quality 5+.",
    skirmify: "This model shoots at Quality 5+.",
    adjusted: false,
  },
  {
    armyBookUid: "1wj1ysgxpuuz9bc7",
    armyBookName: "Orc Marauders",
    name: "Energy Field",
    description: "The hero and its unit get the Stealth special rule.",
    skirmify: "This model and all friendly units within 12” get the Stealth special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "1wj1ysgxpuuz9bc7",
    armyBookName: "Orc Marauders",
    name: "Good Shot",
    description: "This model shoots at Quality 4+.",
    skirmify: "This model shoots at Quality 4+.",
    adjusted: false,
  },
  {
    armyBookUid: "1wj1ysgxpuuz9bc7",
    armyBookName: "Orc Marauders",
    name: "Mad Doctor",
    description: "This model and its unit get the Regeneration special rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "1wj1ysgxpuuz9bc7",
    armyBookName: "Orc Marauders",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "1wj1ysgxpuuz9bc7",
    armyBookName: "Orc Marauders",
    name: "Shooting Frenzy",
    description: "The hero and its unit get the Relentless special rule.",
    skirmify: "This model and all friendly units within 12” get the Relentless special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "1wj1ysgxpuuz9bc7",
    armyBookName: "Orc Marauders",
    name: "War Cry",
    description: "The hero and its unit move +2” on advance and +4” on rush/charge actions.",
    skirmify:
      "This model and all friendly units within 12” move +2” on advance and +4” on rush/charge actions.",
    adjusted: true,
  },
  {
    armyBookUid: "1wj1ysgxpuuz9bc7",
    armyBookName: "Orc Marauders",
    name: "Red Paint Job",
    description: "This model moves +2” on Advance and +4” on Rush/Charge actions.",
    skirmify: "This model moves +2” on Advance and +4” on Rush/Charge actions.",
    adjusted: false,
  },
  {
    armyBookUid: "1wj1ysgxpuuz9bc7",
    armyBookName: "Orc Marauders",
    name: "Teleport",
    description:
      "When this model is activated it may teleport by up to 6” in any direction, ignoring all units and terrain.",
    skirmify:
      "When this model is activated it may teleport by up to 6” in any direction, ignoring all units and terrain.",
    adjusted: false,
  },
  {
    armyBookUid: "1wj1ysgxpuuz9bc7",
    armyBookName: "Orc Marauders",
    name: "Assault Bombs",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    adjusted: false,
  },
  {
    armyBookUid: "AQSDPFVL1DiNNnSU",
    armyBookName: "Orcs",
    name: "Execution",
    description:
      "Whenever the hero’s unit fails a morale test you must kill one of its models and the morale test counts as passed instead.",
    skirmify:
      'Whenever a friendly unit within 12" fails a morale test, you must kill one of its models", and then all friendly units within 12" of the killed model automatically pass morale tests until the end of the round.',
    adjusted: true,
  },
  {
    armyBookUid: "AQSDPFVL1DiNNnSU",
    armyBookName: "Orcs",
    name: "Frenzy",
    description: "This model gets +2 attacks with a weapon of your choice when charging.",
    skirmify: "This model gets +2 attacks with a weapon of your choice when charging.",
    adjusted: false,
  },
  {
    armyBookUid: "AQSDPFVL1DiNNnSU",
    armyBookName: "Orcs",
    name: "Head Chop",
    description: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    skirmify: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "AQSDPFVL1DiNNnSU",
    armyBookName: "Orcs",
    name: "Scary Shields",
    description:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    skirmify:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "AQSDPFVL1DiNNnSU",
    armyBookName: "Orcs",
    name: "Violent Trance",
    description: "The hero and its unit get +1 to hit rolls when fighting in melee.",
    skirmify:
      "This model and all friendly units within 12” get +1 to hit rolls when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "AQSDPFVL1DiNNnSU",
    armyBookName: "Orcs",
    name: "War Cry",
    description: "The hero and its unit move +2” on Advance, and +4” on Rush/Charge actions.",
    skirmify:
      "This model and all friendly units within 12” move +2” on Advance, and +4” on Rush/Charge actions.",
    adjusted: true,
  },
  {
    armyBookUid: "AQSDPFVL1DiNNnSU",
    armyBookName: "Orcs",
    name: "War Drum",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get +1 to hit rolls next time they fight in melee.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get +1 to hit rolls next time they fight in melee.',
    adjusted: true,
  },
  {
    armyBookUid: "a_HXTYv06IFtSs9G",
    armyBookName: "Ossified Undead",
    name: "Arcane Power",
    description:
      "This model may block spells as if it had the Wizard(2) special rule. If it is a Wizard then it gets +2 to spell block rolls.",
    skirmify:
      "This model may block spells as if it had the Wizard(2) special rule. If it is a Wizard then it gets +2 to spell block rolls.",
    adjusted: false,
  },
  {
    armyBookUid: "a_HXTYv06IFtSs9G",
    armyBookName: "Ossified Undead",
    name: "Artisan of Shards",
    description: "The hero and its unit get the Regeneration special rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "a_HXTYv06IFtSs9G",
    armyBookName: "Ossified Undead",
    name: "Eternal Duty",
    description: "The hero and its unit get the Fearless and Furious special rules.",
    skirmify:
      "This model and all friendly units within 12” get the Fearless and Furious special rules.",
    adjusted: true,
  },
  {
    armyBookUid: "a_HXTYv06IFtSs9G",
    armyBookName: "Ossified Undead",
    name: "Harvest Bones",
    description:
      "Once per activation, pick one friendly unit within 6”, which gets Regeneration next time it takes wounds.",
    skirmify:
      'Once per activation, pick one friendly unit within 6”. That unit, and all friendly unit within 6" gets Regeneration next time it takes wounds.',
    adjusted: true,
  },
  {
    armyBookUid: "a_HXTYv06IFtSs9G",
    armyBookName: "Ossified Undead",
    name: "Swift",
    description: "This model may ignore the Slow rule.",
    skirmify: "This model may ignore the Slow rule.",
    adjusted: false,
  },
  {
    armyBookUid: "a_HXTYv06IFtSs9G",
    armyBookName: "Ossified Undead",
    name: "War Aspect",
    description:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "a_HXTYv06IFtSs9G",
    armyBookName: "Ossified Undead",
    name: "Unstoppable",
    description: "The hero and its unit may ignore the Slow rule.",
    skirmify: "This model and all friendly units within 12” may ignore the Slow rule.",
    adjusted: true,
  },
  {
    armyBookUid: "a_HXTYv06IFtSs9G",
    armyBookName: "Ossified Undead",
    name: "Undead",
    description:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    skirmify:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    adjusted: false,
  },
  {
    armyBookUid: "a_HXTYv06IFtSs9G",
    armyBookName: "Ossified Undead",
    name: "Ossified",
    description: "Attacks targeting this model count as having AP(-1), to a min. of AP(0).",
    skirmify: "Attacks targeting this model count as having AP(-1), to a min. of AP(0).",
    adjusted: false,
  },
  {
    armyBookUid: "upWNWC9UIXtQP2o_",
    armyBookName: "Plague Disciples",
    name: "Battle Ready",
    description: "The hero and its unit get the Scout special rule.",
    skirmify: "This model and all friendly units within 12” get the Scout special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "upWNWC9UIXtQP2o_",
    armyBookName: "Plague Disciples",
    name: "Chosen Warrior",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "upWNWC9UIXtQP2o_",
    armyBookName: "Plague Disciples",
    name: "Dark Blessing",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get +1 to hit rolls next time they fight in melee.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get +1 to hit rolls next time they fight in melee.',
    adjusted: true,
  },
  {
    armyBookUid: "upWNWC9UIXtQP2o_",
    armyBookName: "Plague Disciples",
    name: "Doom Caller",
    description:
      "Once per activation, before attacking, pick 2 enemy units within 12”, which get -2 to their next morale roll.",
    skirmify:
      'Once per activation, before attacking, pick 2 enemy units within 12”. Those units, and all enemy units within 6" get -2 to their next morale roll.',
    adjusted: true,
  },
  {
    armyBookUid: "upWNWC9UIXtQP2o_",
    armyBookName: "Plague Disciples",
    name: "Dark March",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "upWNWC9UIXtQP2o_",
    armyBookName: "Plague Disciples",
    name: "Mutations",
    description:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "upWNWC9UIXtQP2o_",
    armyBookName: "Plague Disciples",
    name: "Blessing of Plague",
    description: "The hero and its unit get +1 to Regeneration rolls.",
    skirmify: "This model and all friendly units within 12” get +1 to Regeneration rolls.",
    adjusted: true,
  },
  {
    armyBookUid: "jlray7cwf8mvw5sn",
    armyBookName: "Plague Disciples",
    name: "Chosen Veteran",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "jlray7cwf8mvw5sn",
    armyBookName: "Plague Disciples",
    name: "Dark Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "jlray7cwf8mvw5sn",
    armyBookName: "Plague Disciples",
    name: "Mutations",
    description:
      "When this model fights in melee, roll one die and apply one bonus: \n* 1-3: Attacks get Rending \n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus: \n* 1-3: Attacks get Rending \n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "jlray7cwf8mvw5sn",
    armyBookName: "Plague Disciples",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "jlray7cwf8mvw5sn",
    armyBookName: "Plague Disciples",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "jlray7cwf8mvw5sn",
    armyBookName: "Plague Disciples",
    name: "Gift of Plague",
    description: "The hero and its unit get +1 to Regeneration rolls.",
    skirmify: "This model and all friendly units within 12” get +1 to Regeneration rolls.",
    adjusted: true,
  },
  {
    armyBookUid: "jlray7cwf8mvw5sn",
    armyBookName: "Plague Disciples",
    name: "Ring the Bell",
    description: "The hero and its unit get the Fast special rule.",
    skirmify: "This model and all friendly units within 12” get the Fast special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "jlray7cwf8mvw5sn",
    armyBookName: "Plague Disciples",
    name: "Undead",
    description:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    skirmify:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    adjusted: false,
  },
  {
    armyBookUid: "oqnnu0gk8q6hyyny",
    armyBookName: "Prime Brothers",
    name: "Battle Rites",
    description: "The hero and its unit get +1 to hit when shooting.",
    skirmify: "This model and all friendly units within 12” get +1 to hit when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "oqnnu0gk8q6hyyny",
    armyBookName: "Prime Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "oqnnu0gk8q6hyyny",
    armyBookName: "Prime Brothers",
    name: "Precision Shots",
    description: "The hero and its unit get AP(+1) when shooting.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "oqnnu0gk8q6hyyny",
    armyBookName: "Prime Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "oqnnu0gk8q6hyyny",
    armyBookName: "Prime Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "oqnnu0gk8q6hyyny",
    armyBookName: "Prime Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "oqnnu0gk8q6hyyny",
    armyBookName: "Prime Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "tOWt5fgqK2nfpoBN",
    armyBookName: "Ratmen",
    name: "Smoke Bombs",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "tOWt5fgqK2nfpoBN",
    armyBookName: "Ratmen",
    name: "Resistance",
    description: "This model may block spells as if it had the Wizard(2) special rule.",
    skirmify: "This model may block spells as if it had the Wizard(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "tOWt5fgqK2nfpoBN",
    armyBookName: "Ratmen",
    name: "Tunnel Drill",
    description: "The hero and its unit get the Ambush special rule.",
    skirmify:
      "The hero and up to half of its army get the Ambush special rule (must deploy within 3” of the hero).",
    adjusted: true,
  },
  {
    armyBookUid: "tOWt5fgqK2nfpoBN",
    armyBookName: "Ratmen",
    name: "Expert Thrower",
    description:
      "This model may ignores the penalties from shooting after moving when using weapons with Indirect.",
    skirmify:
      "This model may ignores the penalties from shooting after moving when using weapons with Indirect.",
    adjusted: false,
  },
  {
    armyBookUid: "tOWt5fgqK2nfpoBN",
    armyBookName: "Ratmen",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "tOWt5fgqK2nfpoBN",
    armyBookName: "Ratmen",
    name: "Great Bell",
    description:
      "Once per activation, before attacking, roll 2 dice. For each 2+ deal 3 hits with AP(1) to one enemy unit within 6” (this may target multiple units).",
    skirmify:
      "Once per activation, before attacking, roll 2 dice. For each 2+ deal 3 hits with AP(1) to one enemy unit within 6” (this may target multiple units).",
    adjusted: false,
  },
  {
    armyBookUid: "tOWt5fgqK2nfpoBN",
    armyBookName: "Ratmen",
    name: "Holy Statue",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get +1 to hit rolls next time they fight in melee.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get +1 to hit rolls next time they fight in melee.',
    adjusted: true,
  },
  {
    armyBookUid: "tOWt5fgqK2nfpoBN",
    armyBookName: "Ratmen",
    name: "Artificer",
    description: "This model and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "tOWt5fgqK2nfpoBN",
    armyBookName: "Ratmen",
    name: "Strength in Numbers",
    description:
      "Once per activation, before attacking, pick 2 friendly units within 12”, which get +1 to their next morale test roll.",
    skirmify:
      'Once per activation, before attacking, pick 2 friendly units within 12”. Those units, and all friendly units within 6" get +1 to their next morale test roll.',
    adjusted: true,
  },
  {
    armyBookUid: "hk70l4d471plza00",
    armyBookName: "Ratmen Clans",
    name: "Scurry Away",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "hk70l4d471plza00",
    armyBookName: "Ratmen Clans",
    name: "Lead from Behind",
    description:
      "Whenever the hero’s unit fails a morale test you must kill one of its models and the morale test counts as passed.",
    skirmify:
      'Whenever a friendly unit within 12" fails a morale test, you must kill one of its models", and then all friendly units within 12" of the killed model automatically pass morale tests until the end of the round.',
    adjusted: true,
  },
  {
    armyBookUid: "hk70l4d471plza00",
    armyBookName: "Ratmen Clans",
    name: "Piper's Calling",
    description: "The hero and its unit get the Furious special rule.",
    skirmify: "This model and all friendly units within 12” get the Furious special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "hk70l4d471plza00",
    armyBookName: "Ratmen Clans",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "hk70l4d471plza00",
    armyBookName: "Ratmen Clans",
    name: "Safety in Numbers",
    description:
      "Once per activation, pick 2 friendly units within 12”, which get +1 to their next morale test roll.",
    skirmify:
      'Once per activation, pick 2 friendly units within 12”. Those units, and all friendly units within 6" get +1 to their next morale test roll.',
    adjusted: true,
  },
  {
    armyBookUid: "5wbcv465hacdwvkb",
    armyBookName: "Rebel Guerrillas",
    name: "Dug In",
    description:
      "Enemies charging this unit don’t count as having charged for the purpose of special rules, and they must take a dangerous terrain test before attacking.",
    skirmify:
      "Enemies charging this unit don’t count as having charged for the purpose of special rules, and they must take a dangerous terrain test before attacking.",
    adjusted: false,
  },
  {
    armyBookUid: "5wbcv465hacdwvkb",
    armyBookName: "Rebel Guerrillas",
    name: "Guerrilla Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "5wbcv465hacdwvkb",
    armyBookName: "Rebel Guerrillas",
    name: "Hidden Tunnels",
    description: "The hero and its unit get the Ambush special rule.",
    skirmify:
      "The hero and up to half of its army get the Ambush special rule (must deploy within 3” of the hero).",
    adjusted: true,
  },
  {
    armyBookUid: "5wbcv465hacdwvkb",
    armyBookName: "Rebel Guerrillas",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "5wbcv465hacdwvkb",
    armyBookName: "Rebel Guerrillas",
    name: "Spotting Laser",
    description:
      "This model may try to mark an enemy instead of firing one of its weapons. Pick one unit within 30” and in line of sight and roll one die, on a 4+ it’s marked. Friendly units may remove markers from the target to get +X to their shooting rolls it, where X is the number of removed markers.",
    skirmify:
      "This model may try to mark an enemy instead of firing one of its weapons. Pick one unit within 30” and in line of sight and roll one die, on a 4+ it’s marked. Friendly units may remove markers from the target to get +X to their shooting rolls it, where X is the number of removed markers.",
    adjusted: false,
  },
  {
    armyBookUid: "5wbcv465hacdwvkb",
    armyBookName: "Rebel Guerrillas",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "yxVDySKYQYRhdEgA",
    armyBookName: "Rift Daemons of Change",
    name: "Banner of Change",
    description: "This model and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "yxVDySKYQYRhdEgA",
    armyBookName: "Rift Daemons of Change",
    name: "Daemon",
    description: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    skirmify: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    adjusted: false,
  },
  {
    armyBookUid: "yxVDySKYQYRhdEgA",
    armyBookName: "Rift Daemons of Change",
    name: "Split",
    description:
      "Whenever a Pink Warrior is killed you may replace it with 2 Blue Warriors. Note that you may only start assigning wounds to Blue Warriors once all Pink Warriors in the unit have been killed.",
    skirmify:
      "Whenever a Pink Warrior is killed you may replace it with 2 Blue Warriors. Note that you may only start assigning wounds to Blue Warriors once all Pink Warriors in the unit have been killed.",
    adjusted: false,
  },
  {
    armyBookUid: "yxVDySKYQYRhdEgA",
    armyBookName: "Rift Daemons of Change",
    name: "Split Again",
    description:
      "Whenever a Blue Warrior is killed you may replace it with 1 Yellow Warrior. Note that you may only start assigning wounds to Yellow Warriors once all Blue Warriors in the unit have been killed.",
    skirmify:
      "Whenever a Blue Warrior is killed you may replace it with 1 Yellow Warrior. Note that you may only start assigning wounds to Yellow Warriors once all Blue Warriors in the unit have been killed.",
    adjusted: false,
  },
  {
    armyBookUid: "yxVDySKYQYRhdEgA",
    armyBookName: "Rift Daemons of Change",
    name: "Symbol of Change",
    description:
      "Once per activation, before attacking, roll X dice. For each 4+ one enemy model within 18” takes 1 automatic hit with AP(3) and Deadly(3).",
    skirmify:
      "Once per activation, before attacking, roll X dice. For each 4+ one enemy model within 18” takes 1 automatic hit with AP(3) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "CuyCCyZTIHo5rc0Z",
    armyBookName: "Rift Daemons of Lust",
    name: "Banner of Lust",
    description: "This model and its unit count as having the Strider special rule.",
    skirmify:
      "This model and all friendly units within 12” count as having the Strider special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "CuyCCyZTIHo5rc0Z",
    armyBookName: "Rift Daemons of Lust",
    name: "Daemon",
    description: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    skirmify: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    adjusted: false,
  },
  {
    armyBookUid: "CuyCCyZTIHo5rc0Z",
    armyBookName: "Rift Daemons of Lust",
    name: "Magic Absorption",
    description: "This model gets +2 to its rolls when blocking enemy spells.",
    skirmify: "This model gets +2 to its rolls when blocking enemy spells.",
    adjusted: false,
  },
  {
    armyBookUid: "CuyCCyZTIHo5rc0Z",
    armyBookName: "Rift Daemons of Lust",
    name: "Song of Banishment",
    description:
      "Once per activation, before attacking, pick one enemy unit within 18”, which takes a Dangerous Terrain test.",
    skirmify:
      'Once per activation, before attacking, pick one enemy unit within 18”. That unit, and all enemy unit within 6" takes a Dangerous Terrain test.',
    adjusted: true,
  },
  {
    armyBookUid: "CuyCCyZTIHo5rc0Z",
    armyBookName: "Rift Daemons of Lust",
    name: "Song of Summoning",
    description:
      "When this model is activated you may place a unit of 5 Lust Warriors fully within 6” of this unit.",
    skirmify:
      "When this model is activated you may place a unit of 5 Lust Warriors fully within 6” of this unit.",
    adjusted: false,
  },
  {
    armyBookUid: "CuyCCyZTIHo5rc0Z",
    armyBookName: "Rift Daemons of Lust",
    name: "Very Fast",
    description: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    skirmify: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    adjusted: false,
  },
  {
    armyBookUid: "CuyCCyZTIHo5rc0Z",
    armyBookName: "Rift Daemons of Lust",
    name: "Speed Boost",
    description: "This model counts as having Very Fast instead of Fast.",
    skirmify: "This model counts as having Very Fast instead of Fast.",
    adjusted: false,
  },
  {
    armyBookUid: "CuyCCyZTIHo5rc0Z",
    armyBookName: "Rift Daemons of Lust",
    name: "Symbol of Lust",
    description:
      "Once per activation, before attacking, roll X dice. For each 4+ two enemy units within 12” take 3 automatic hits each.",
    skirmify:
      "Once per activation, before attacking, roll X dice. For each 4+ two enemy units within 12” take 3 automatic hits each.",
    adjusted: false,
  },
  {
    armyBookUid: "vJuokTQpJWj3_MrJ",
    armyBookName: "Rift Daemons of Plague",
    name: "Banner of Plague",
    description: "The model and its unit get Rending when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get Rending when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "vJuokTQpJWj3_MrJ",
    armyBookName: "Rift Daemons of Plague",
    name: "Daemon",
    description: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    skirmify: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    adjusted: false,
  },
  {
    armyBookUid: "vJuokTQpJWj3_MrJ",
    armyBookName: "Rift Daemons of Plague",
    name: "Slime Trap",
    description:
      "Enemy units that fight in melee against the hero count as having the Slow special rule for the rest of the game.",
    skirmify:
      "Enemy units that fight in melee against the hero count as having the Slow special rule for the rest of the game.",
    adjusted: false,
  },
  {
    armyBookUid: "vJuokTQpJWj3_MrJ",
    armyBookName: "Rift Daemons of Plague",
    name: "Symbol of Plague",
    description:
      "Once per activation, before attacking, roll X dice. For each 4+ one enemy unit within 18” must immediately take a Dangerous Terrain test.",
    skirmify:
      "Once per activation, before attacking, roll X dice. For each 4+ one enemy unit within 18” must immediately take a Dangerous Terrain test.",
    adjusted: false,
  },
  {
    armyBookUid: "Q59-nh6A1AhRBrLR",
    armyBookName: "Rift Daemons of War",
    name: "Banner of War",
    description: "This model and its unit count as having the Impact(1) special rule.",
    skirmify:
      "This model and all friendly units within 12” count as having the Impact(1) special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "Q59-nh6A1AhRBrLR",
    armyBookName: "Rift Daemons of War",
    name: "Daemon",
    description: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    skirmify: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    adjusted: false,
  },
  {
    armyBookUid: "Q59-nh6A1AhRBrLR",
    armyBookName: "Rift Daemons of War",
    name: "Resistance",
    description: "This model may block spells as if it had the Wizard(2) special rule.",
    skirmify: "This model may block spells as if it had the Wizard(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "Q59-nh6A1AhRBrLR",
    armyBookName: "Rift Daemons of War",
    name: "Symbol of War",
    description:
      "Once per activation, before attacking, roll X dice. For each 4+ one enemy unit within 18” takes 3 hits with AP(2).",
    skirmify:
      "Once per activation, before attacking, roll X dice. For each 4+ one enemy unit within 18” takes 3 hits with AP(2).",
    adjusted: false,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Gloom-Protocol",
    description: "This model may block spells as if it had the Psychic(2) special rule.",
    skirmify: "This model may block spells as if it had the Psychic(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Hunter",
    description:
      "This model counts as having the Ambush rule, and gets AP(+3) when shooting on the round in which it deploys.",
    skirmify:
      "This model counts as having the Ambush rule, and gets AP(+3) when shooting on the round in which it deploys.",
    adjusted: false,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Regen-Protocol",
    description: "The hero and its unit get +1 to Regeneration rolls.",
    skirmify: "This model and all friendly units within 12” get +1 to Regeneration rolls.",
    adjusted: true,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Release Swarm",
    description:
      "When this model is activated, you may place a unit of 2 Bot Swarms fully within 6” of it.",
    skirmify:
      "When this model is activated, you may place a unit of 2 Bot Swarms fully within 6” of it.",
    adjusted: false,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Robot",
    description:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    skirmify:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    adjusted: false,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Royal March",
    description: "The hero and its unit may ignore the Slow special rule.",
    skirmify: "This model and all friendly units within 12” may ignore the Slow special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Shadow-Protocol",
    description: "The hero and its unit get the Ambush special rule.",
    skirmify:
      "The hero and up to half of its army get the Ambush special rule (must deploy within 3” of the hero).",
    adjusted: true,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Tunneller",
    description:
      "This model counts as having the Ambush rule, and may be deployed up to 1” away from enemy units.",
    skirmify:
      "This model counts as having the Ambush rule, and may be deployed up to 1” away from enemy units.",
    adjusted: false,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Psychic Master",
    description:
      "This model counts as having the Psychic(2) rule, and may cast or block up to 3 spells each round, however whenever it fails to cast a spell, it takes 3 wounds.",
    skirmify:
      "This model counts as having the Psychic(2) rule, and may cast or block up to 3 spells each round, however whenever it fails to cast a spell, it takes 3 wounds.",
    adjusted: false,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Psychic Warden",
    description:
      "Whenever a model within 6” would take wounds from Psychic Master, you may put all wounds on this model instead.",
    skirmify:
      "Whenever a model within 6” would take wounds from Psychic Master, you may put all wounds on this model instead.",
    adjusted: false,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Reanimator",
    description:
      "Once per activation, pick one friendly unit within 12”, which gets +1 to Regeneration rolls next time it takes wounds.",
    skirmify:
      'Once per activation, pick one friendly unit within 12”. That unit, and all friendly unit within 6" gets +1 to Regeneration rolls next time it takes wounds.',
    adjusted: true,
  },
  {
    armyBookUid: "4k5amkxoybdiqotm",
    armyBookName: "Robot Legions",
    name: "Royal March Order",
    description:
      "Once per activation, pick one friendly unit within 12”, which may ignore the Slow special rule next time it moves.",
    skirmify:
      'Once per activation, pick one friendly unit within 12”. That unit, and all friendly unit within 6" may ignore the Slow special rule next time it moves.',
    adjusted: true,
  },
  {
    armyBookUid: "BubhE1kUpgYbqZvW",
    armyBookName: "Saurians",
    name: "Ferocious",
    description: "The hero and its unit get +1 to hit when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get +1 to hit when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "BubhE1kUpgYbqZvW",
    armyBookName: "Saurians",
    name: "Bait",
    description:
      "Before the game starts, pick one enemy unit. All models with this special rule get +2 to hit in melee when fighting it.",
    skirmify:
      "Before the game starts, pick one enemy unit. All models with this special rule get +2 to hit in melee when fighting it.",
    adjusted: false,
  },
  {
    armyBookUid: "BubhE1kUpgYbqZvW",
    armyBookName: "Saurians",
    name: "Destined Leader",
    description: "The hero and its unit get the Fast special rule.",
    skirmify: "This model and all friendly units within 12” get the Fast special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "BubhE1kUpgYbqZvW",
    armyBookName: "Saurians",
    name: "Drop Rocks",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll 1 die. On a 2+ it takes 3 hits with AP(1).",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll 1 die. On a 2+ it takes 3 hits with AP(1).",
    adjusted: false,
  },
  {
    armyBookUid: "BubhE1kUpgYbqZvW",
    armyBookName: "Saurians",
    name: "Good Shot",
    description: "This model shoots at Quality 4+.",
    skirmify: "This model shoots at Quality 4+.",
    adjusted: false,
  },
  {
    armyBookUid: "BubhE1kUpgYbqZvW",
    armyBookName: "Saurians",
    name: "Predator",
    description:
      "For each unmodified result of 6 to hit when attacking, this model may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.",
    skirmify:
      "For each unmodified result of 6 to hit when attacking, this model may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.",
    adjusted: false,
  },
  {
    armyBookUid: "BubhE1kUpgYbqZvW",
    armyBookName: "Saurians",
    name: "Primal Roar",
    description:
      "Once per activation, pick 2 friendly units within 6” with Predator, which may roll extra attacks on results of 5-6 next time they attack.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6” with Predator. Those units, and all friendly units within 6" may roll extra attacks on results of 5-6 next time they attack.',
    adjusted: true,
  },
  {
    armyBookUid: "BubhE1kUpgYbqZvW",
    armyBookName: "Saurians",
    name: "Release Snakes",
    description:
      "When this model is activated, you may place a unit of 2 Snake Swarms fully within 6” of it.",
    skirmify:
      "When this model is activated, you may place a unit of 2 Snake Swarms fully within 6” of it.",
    adjusted: false,
  },
  {
    armyBookUid: "BubhE1kUpgYbqZvW",
    armyBookName: "Saurians",
    name: "Hit & Run",
    description: "The hero and its unit may move by up to 3” after shooting.",
    skirmify: "This model and all friendly units within 12” may move by up to 3” after shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "BubhE1kUpgYbqZvW",
    armyBookName: "Saurians",
    name: "Ancient Wrath",
    description: "The hero and its unit get the Furious special rule.",
    skirmify: "This model and all friendly units within 12” get the Furious special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "BubhE1kUpgYbqZvW",
    armyBookName: "Saurians",
    name: "Transport",
    description:
      "May transport up to X other models. Units embark by moving into contact, and may use any action to disembark, but only move by up to 6”. Units may also be deployed inside of a transport. If a unit is inside a transport when it is destroyed, then it takes a dangerous terrain test, is immediately Wavering, and surviving models must be placed within 6” of the transport before it is removed.",
    skirmify:
      "May transport up to X other models. Units embark by moving into contact, and may use any action to disembark, but only move by up to 6”. Units may also be deployed inside of a transport. If a unit is inside a transport when it is destroyed, then it takes a dangerous terrain test, is immediately Wavering, and surviving models must be placed within 6” of the transport before it is removed.",
    adjusted: false,
  },
  {
    armyBookUid: "gHTrjw-g76vfGCSt",
    armyBookName: "Shadow Stalkers",
    name: "Ensnare",
    description:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    skirmify:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "gHTrjw-g76vfGCSt",
    armyBookName: "Shadow Stalkers",
    name: "Sense Magic",
    description: "This model may block spells as if it had the Wizard(2) special rule.",
    skirmify: "This model may block spells as if it had the Wizard(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "gHTrjw-g76vfGCSt",
    armyBookName: "Shadow Stalkers",
    name: "Undead",
    description:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    skirmify:
      "Whenever this unit takes a morale test, it is passed automatically. Then, roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    adjusted: false,
  },
  {
    armyBookUid: "gHTrjw-g76vfGCSt",
    armyBookName: "Shadow Stalkers",
    name: "Pumpkin Master",
    description: "The hero and its unit get +1 to hit rolls in melee.",
    skirmify: "This model and all friendly units within 12” get +1 to hit rolls in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "gHTrjw-g76vfGCSt",
    armyBookName: "Shadow Stalkers",
    name: "Soul Hunter",
    description: "The hero and its unit get the Fast special rule.",
    skirmify: "This model and all friendly units within 12” get the Fast special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "gHTrjw-g76vfGCSt",
    armyBookName: "Shadow Stalkers",
    name: "Vicious Aura",
    description: "The hero and its unit get the Poison rule in melee.",
    skirmify: "This model and all friendly units within 12” get the Poison rule in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "gHTrjw-g76vfGCSt",
    armyBookName: "Shadow Stalkers",
    name: "Ethereal",
    description:
      "Counts as having Stealth, Strider, as well as Regeneration against non-spell attacks (this stacks with Regeneration).",
    skirmify:
      "Counts as having Stealth, Strider, as well as Regeneration against non-spell attacks (this stacks with Regeneration).",
    adjusted: false,
  },
  {
    armyBookUid: "AcDXPPXmWrgHChlS",
    armyBookName: "Sky-City Dwarves",
    name: "Augment",
    description: 'The hero and its unit get +1 to hit rolls when shooting at enemies within 12".',
    skirmify:
      'This model and all friendly units within 12” get +1 to hit rolls when shooting at enemies within 12".',
    adjusted: true,
  },
  {
    armyBookUid: "AcDXPPXmWrgHChlS",
    armyBookName: "Sky-City Dwarves",
    name: "Follow the Code",
    description: "The hero and its unit get the Fearless and Furious special rules.",
    skirmify:
      "This model and all friendly units within 12” get the Fearless and Furious special rules.",
    adjusted: true,
  },
  {
    armyBookUid: "AcDXPPXmWrgHChlS",
    armyBookName: "Sky-City Dwarves",
    name: "Grappling Hook",
    description: "This model and its unit may move by up to 3” after shooting.",
    skirmify: "This model and all friendly units within 12” may move by up to 3” after shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "AcDXPPXmWrgHChlS",
    armyBookName: "Sky-City Dwarves",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "AcDXPPXmWrgHChlS",
    armyBookName: "Sky-City Dwarves",
    name: "Storm Sight",
    description: "This model may block spells as if it had the Wizard(2) special rule.",
    skirmify: "This model may block spells as if it had the Wizard(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "AcDXPPXmWrgHChlS",
    armyBookName: "Sky-City Dwarves",
    name: "Wind Reader",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "AcDXPPXmWrgHChlS",
    armyBookName: "Sky-City Dwarves",
    name: "Transport",
    description:
      "May transport up to X other models. Units embark by moving into contact, and may use any action to disembark, but only move by up to 6”. Units may also be deployed inside of a transport. If a unit is inside a transport when it is destroyed, then it takes a dangerous terrain test, is immediately Wavering, and surviving models must be placed within 6” of the transport before it is removed.",
    skirmify:
      "May transport up to X other models. Units embark by moving into contact, and may use any action to disembark, but only move by up to 6”. Units may also be deployed inside of a transport. If a unit is inside a transport when it is destroyed, then it takes a dangerous terrain test, is immediately Wavering, and surviving models must be placed within 6” of the transport before it is removed.",
    adjusted: false,
  },
  {
    armyBookUid: "AcDXPPXmWrgHChlS",
    armyBookName: "Sky-City Dwarves",
    name: "Drop Bombs",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll X dice. For each 2+ it takes 3 hits with AP(1).",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll X dice. For each 2+ it takes 3 hits with AP(1).",
    adjusted: false,
  },
  {
    armyBookUid: "zz3kp5ry7ks6mxcx",
    armyBookName: "Soul-Snatcher Cults",
    name: "Agitator",
    description: "The hero and its unit get Furious.",
    skirmify: "This model and all friendly units within 12” get Furious.",
    adjusted: true,
  },
  {
    armyBookUid: "zz3kp5ry7ks6mxcx",
    armyBookName: "Soul-Snatcher Cults",
    name: "Banner",
    description: "The hero and its unit get the Regeneration special rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "zz3kp5ry7ks6mxcx",
    armyBookName: "Soul-Snatcher Cults",
    name: "Experiments",
    description:
      "When the hero and its unit fight in melee, roll one die and apply one bonus: \n* 1-3: Attacks get Rending \n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model and all friendly units within 12” fight in melee, roll one die and apply one bonus: \n* 1-3: Attacks get Rending \n* 4-6: Attacks get AP(+1)",
    adjusted: true,
  },
  {
    armyBookUid: "zz3kp5ry7ks6mxcx",
    armyBookName: "Soul-Snatcher Cults",
    name: "Megaphone",
    description: "The hero and its unit get Fast.",
    skirmify: "This model and all friendly units within 12” get Fast.",
    adjusted: true,
  },
  {
    armyBookUid: "zz3kp5ry7ks6mxcx",
    armyBookName: "Soul-Snatcher Cults",
    name: "Resistance",
    description: "This model gets +2 to its rolls when blocking enemy spells.",
    skirmify: "This model gets +2 to its rolls when blocking enemy spells.",
    adjusted: false,
  },
  {
    armyBookUid: "zz3kp5ry7ks6mxcx",
    armyBookName: "Soul-Snatcher Cults",
    name: "Tactical Console",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "zz3kp5ry7ks6mxcx",
    armyBookName: "Soul-Snatcher Cults",
    name: "Takedown",
    description:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    skirmify:
      "When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "zz3kp5ry7ks6mxcx",
    armyBookName: "Soul-Snatcher Cults",
    name: "Flare Gun",
    description:
      'Once per activation, pick one friendly unit within 12”, which gets +2" on Advance and +4" on Rush/Charge actions next time it moves.',
    skirmify:
      'Once per activation, pick one friendly unit within 12”. That unit, and all friendly unit within 6" gets +2" on Advance and +4" on Rush/Charge actions next time it moves.',
    adjusted: true,
  },
  {
    armyBookUid: "zz3kp5ry7ks6mxcx",
    armyBookName: "Soul-Snatcher Cults",
    name: "Spotter",
    description:
      "Once per activation, before attacking, pick one friendly unit within 6”. That unit’s weapons get +6” range next time it shoots.",
    skirmify:
      "Once per activation, before attacking, pick one friendly unit within 6”. That unit’s weapons get +6” range next time it shoots.",
    adjusted: false,
  },
  {
    armyBookUid: "zz3kp5ry7ks6mxcx",
    armyBookName: "Soul-Snatcher Cults",
    name: "Survey Vehicle",
    description:
      "Once per activation, before attacking, pick one enemy unit within 24”. Next time that a friendly unit shoots at it, that units gets +1 to its hit rolls.",
    skirmify:
      "Once per activation, before attacking, pick one enemy unit within 24”. Next time that a friendly unit shoots at it, that units gets +1 to its hit rolls.",
    adjusted: false,
  },
  {
    armyBookUid: "3ot4qwt2t2n8d8b6",
    armyBookName: "Space Wolves Kill Team",
    name: "Advanced Tactics",
    description:
      "Once per activation, before attacking, pick 2 friendly units within 12” of this model, which may move by up to 3” each.",
    skirmify:
      'Once per activation, before attacking, pick 2 friendly units within 12” of this model. Those units, and all friendly units within 6" may move by up to 3” each.',
    adjusted: true,
  },
  {
    armyBookUid: "3ot4qwt2t2n8d8b6",
    armyBookName: "Space Wolves Kill Team",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "3ot4qwt2t2n8d8b6",
    armyBookName: "Space Wolves Kill Team",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "3ot4qwt2t2n8d8b6",
    armyBookName: "Space Wolves Kill Team",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "3ot4qwt2t2n8d8b6",
    armyBookName: "Space Wolves Kill Team",
    name: "Veteran Infantry",
    description: "This model gets +1 to its attack rolls for melee and shooting.",
    skirmify: "This model gets +1 to its attack rolls for melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "3ot4qwt2t2n8d8b6",
    armyBookName: "Space Wolves Kill Team",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "3ot4qwt2t2n8d8b6",
    armyBookName: "Space Wolves Kill Team",
    name: "Rear Grapples",
    description:
      "This unit may transport a single Attack Walker in addition to any other units that it is transporting.",
    skirmify:
      "This unit may transport a single Attack Walker in addition to any other units that it is transporting.",
    adjusted: false,
  },
  {
    armyBookUid: "3ot4qwt2t2n8d8b6",
    armyBookName: "Space Wolves Kill Team",
    name: "Veteran Walker",
    description: "This model gets +1 to its attack rolls for melee and shooting.",
    skirmify: "This model gets +1 to its attack rolls for melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "z8205ez2boggzs22",
    armyBookName: "TAO Coalition",
    name: "Accelerator Drone",
    description: "This model and its unit get +6” range when firing their Pulse Carbines.",
    skirmify:
      "This model and all friendly units within 12” get +6” range when firing their Pulse Carbines.",
    adjusted: true,
  },
  {
    armyBookUid: "z8205ez2boggzs22",
    armyBookName: "TAO Coalition",
    name: "Beacon",
    description:
      "Friendly units using Ambush may ignore distance restrictions from enemies if they are deployed within 6” of this model.",
    skirmify:
      "Friendly units using Ambush may ignore distance restrictions from enemies if they are deployed within 6” of this model.",
    adjusted: false,
  },
  {
    armyBookUid: "z8205ez2boggzs22",
    armyBookName: "TAO Coalition",
    name: "Elemental Power",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "z8205ez2boggzs22",
    armyBookName: "TAO Coalition",
    name: "Good Shot",
    description: "This model shoots at Quality 4+.",
    skirmify: "This model shoots at Quality 4+.",
    adjusted: false,
  },
  {
    armyBookUid: "z8205ez2boggzs22",
    armyBookName: "TAO Coalition",
    name: "Inhibitor Drone",
    description: "Enemies get -3” movement when trying to charge this model and its unit.",
    skirmify:
      "Enemies get -3” movement when trying to charge this model and all friendly units within 12”.",
    adjusted: true,
  },
  {
    armyBookUid: "z8205ez2boggzs22",
    armyBookName: "TAO Coalition",
    name: "Shield Drone",
    description: "This model and its unit count as having the Regeneration special rule.",
    skirmify:
      "This model and all friendly units within 12” count as having the Regeneration special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "z8205ez2boggzs22",
    armyBookName: "TAO Coalition",
    name: "Spotting Laser",
    description:
      "This model may try to mark an enemy instead of firing one of its weapons. Pick one unit within 30” and in line of sight and roll one die, on a 4+ it’s marked. Friendly units may remove markers from their target to get +X to hit rolls when shooting, where X is the number of removed markers.",
    skirmify:
      "This model may try to mark an enemy instead of firing one of its weapons. Pick one unit within 30” and in line of sight and roll one die, on a 4+ it’s marked. Friendly units may remove markers from their target to get +X to hit rolls when shooting, where X is the number of removed markers.",
    adjusted: false,
  },
  {
    armyBookUid: "z8205ez2boggzs22",
    armyBookName: "TAO Coalition",
    name: "Stinger Bombs",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    adjusted: false,
  },
  {
    armyBookUid: "z8205ez2boggzs22",
    armyBookName: "TAO Coalition",
    name: "Volley Fire",
    description: "The hero and its unit count as having the Relentless special rule.",
    skirmify:
      "This model and all friendly units within 12” count as having the Relentless special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "z8205ez2boggzs22",
    armyBookName: "TAO Coalition",
    name: "Anti-Charge System",
    description:
      "Enemy units charging this model must take a dangerous terrain test rolling twice the amount of dice.",
    skirmify:
      "Enemy units charging this model must take a dangerous terrain test rolling twice the amount of dice.",
    adjusted: false,
  },
  {
    armyBookUid: "z8205ez2boggzs22",
    armyBookName: "TAO Coalition",
    name: "Stealth Drone",
    description: "Enemy units over 18” away get -1 to hit rolls when shooting per drone.",
    skirmify: "Enemy units over 18” away get -1 to hit rolls when shooting per drone.",
    adjusted: false,
  },
  {
    armyBookUid: "z8205ez2boggzs22",
    armyBookName: "TAO Coalition",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "57tqyxpdk5jrg3x7",
    armyBookName: "TAO Poy'per",
    name: "Accelerator Drone",
    description: "This unit gets +6” range when firing its Pulse Carbines.",
    skirmify: "This unit gets +6” range when firing its Pulse Carbines.",
    adjusted: false,
  },
  {
    armyBookUid: "57tqyxpdk5jrg3x7",
    armyBookName: "TAO Poy'per",
    name: "Beacon",
    description:
      "Friendly units using Ambush may ignore distance restrictions from enemies if they are deployed within 6” of this model.",
    skirmify:
      "Friendly units using Ambush may ignore distance restrictions from enemies if they are deployed within 6” of this model.",
    adjusted: false,
  },
  {
    armyBookUid: "57tqyxpdk5jrg3x7",
    armyBookName: "TAO Poy'per",
    name: "Elemental Power",
    description:
      "Once per activation, before attacking, pick 2 friendly units within 12” of the hero, which may move by up to 3” each.",
    skirmify:
      'Once per activation, before attacking, pick 2 friendly units within 12” of the hero. Those units, and all friendly units within 6" may move by up to 3” each.',
    adjusted: true,
  },
  {
    armyBookUid: "57tqyxpdk5jrg3x7",
    armyBookName: "TAO Poy'per",
    name: "Good Shot",
    description: "This model shoots at Quality 4+.",
    skirmify: "This model shoots at Quality 4+.",
    adjusted: false,
  },
  {
    armyBookUid: "57tqyxpdk5jrg3x7",
    armyBookName: "TAO Poy'per",
    name: "Inhibitor Drone",
    description: "Enemies get -3” movement when trying to charge this unit.",
    skirmify: "Enemies get -3” movement when trying to charge this unit.",
    adjusted: false,
  },
  {
    armyBookUid: "57tqyxpdk5jrg3x7",
    armyBookName: "TAO Poy'per",
    name: "Shield Drone",
    description: "This model and its unit count as having the Regeneration special rule.",
    skirmify:
      "This model and all friendly units within 12” count as having the Regeneration special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "57tqyxpdk5jrg3x7",
    armyBookName: "TAO Poy'per",
    name: "Spotting Laser",
    description:
      "This model may try to mark an enemy instead of firing one of its weapons. Pick one unit within 30” and in line of sight and roll one die, on a 4+ it’s marked. Friendly units may remove markers from the target to get +X to their shooting rolls it, where X is the number of removed markers.",
    skirmify:
      "This model may try to mark an enemy instead of firing one of its weapons. Pick one unit within 30” and in line of sight and roll one die, on a 4+ it’s marked. Friendly units may remove markers from the target to get +X to their shooting rolls it, where X is the number of removed markers.",
    adjusted: false,
  },
  {
    armyBookUid: "57tqyxpdk5jrg3x7",
    armyBookName: "TAO Poy'per",
    name: "Stinger Bombs",
    description:
      "Whenever this model moves over enemies, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    skirmify:
      "Whenever this model moves over enemies, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    adjusted: false,
  },
  {
    armyBookUid: "57tqyxpdk5jrg3x7",
    armyBookName: "TAO Poy'per",
    name: "Volley Fire",
    description: "The hero and its unit count as having the Relentless special rule.",
    skirmify:
      "This model and all friendly units within 12” count as having the Relentless special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "57tqyxpdk5jrg3x7",
    armyBookName: "TAO Poy'per",
    name: "Anti-Charge System",
    description:
      "Enemy units charging this model must take a dangerous terrain test rolling twice the amount of dice.",
    skirmify:
      "Enemy units charging this model must take a dangerous terrain test rolling twice the amount of dice.",
    adjusted: false,
  },
  {
    armyBookUid: "57tqyxpdk5jrg3x7",
    armyBookName: "TAO Poy'per",
    name: "Stealth Drone",
    description: "Enemy units over 18” away get -1 to shooting rolls per drone.",
    skirmify: "Enemy units over 18” away get -1 to shooting rolls per drone.",
    adjusted: false,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Chilling",
    description:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    skirmify:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Ethereal",
    description:
      "Counts as having Stealth, Strider, as well as Regeneration against non-spell attacks (this stacks with Regeneration).",
    skirmify:
      "Counts as having Stealth, Strider, as well as Regeneration against non-spell attacks (this stacks with Regeneration).",
    adjusted: false,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Reap",
    description:
      "Enemies that roll to block hits from this weapon take one additional wound for each unmodified result of 1 that they roll.",
    skirmify:
      "Enemies that roll to block hits from this weapon take one additional wound for each unmodified result of 1 that they roll.",
    adjusted: false,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Spectral Touch",
    description:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    skirmify:
      "Whenever this model moves over enemy units, pick one of them and roll one die, on a 2+ it takes 1 hit.",
    adjusted: false,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Undead",
    description:
      "Whenever this unit takes a morale test, it is passed automatically. Then roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    skirmify:
      "Whenever this unit takes a morale test, it is passed automatically. Then roll as many dice as remaining models/tough in the unit, and for each result of 1-2 the unit takes one wound, which can’t be regenerated.",
    adjusted: false,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Corpse Pile",
    description:
      "Once per activation, pick one friendly unit within 6”, which gets Regeneration next time it takes wounds.",
    skirmify:
      'Once per activation, pick one friendly unit within 6”. That unit, and all friendly unit within 6" gets Regeneration next time it takes wounds.',
    adjusted: true,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Cursed Lodestone",
    description:
      "Once per activation, pick one friendly Wizard within 6”, which gets +1 to its roll next time it casts/blocks a spell.",
    skirmify:
      "Once per activation, pick one friendly Wizard within 6”, which gets +1 to its roll next time it casts/blocks a spell.",
    adjusted: false,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Seduce",
    description:
      "Once per activation, before attacking, pick one enemy unit within 12”, which must take a morale test. If failed, you may move that unit by up to 6” in any direction.",
    skirmify:
      'Once per activation, before attacking, pick one enemy unit within 12”. That unit, and all enemy unit within 6" must take a morale test. If failed, you may move that unit by up to 6” in any direction.',
    adjusted: true,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Unholy Brazier",
    description: "This model may block spells as if it had the Wizard(2) special rule.",
    skirmify: "This model may block spells as if it had the Wizard(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Unsatiable Hunger",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Blood Chalice",
    description: "The hero and its unit get the Regeneration special rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Raise Dead",
    description:
      "When this model is activated, you may place a unit of 5 Zombies fully within 6” of it.",
    skirmify:
      "When this model is activated, you may place a unit of 5 Zombies fully within 6” of it.",
    adjusted: false,
  },
  {
    armyBookUid: "qABIfXYbYxmA75yL",
    armyBookName: "Vampiric Undead",
    name: "Frightful Gaze",
    description:
      "Once per activation, before attacking, pick one enemy unit within 12”, which gets -2 to its next morale test roll.",
    skirmify:
      'Once per activation, before attacking, pick one enemy unit within 12”. That unit, and all enemy unit within 6" gets -2 to its next morale test roll.',
    adjusted: true,
  },
  {
    armyBookUid: "Ir5XtqTM8JS3YEAJ",
    armyBookName: "Volcanic Dwarves",
    name: "Ancient Icon",
    description: "Enemies get -1 to hit when attacking the hero and its unit.",
    skirmify: "Enemies get -1 to hit when attacking this model or any friendly unit within 12”.",
    adjusted: true,
  },
  {
    armyBookUid: "Ir5XtqTM8JS3YEAJ",
    armyBookName: "Volcanic Dwarves",
    name: "Doom Call",
    description: "The hero and its unit may ignore the Slow rule.",
    skirmify: "This model and all friendly units within 12” may ignore the Slow rule.",
    adjusted: true,
  },
  {
    armyBookUid: "Ir5XtqTM8JS3YEAJ",
    armyBookName: "Volcanic Dwarves",
    name: "Ethereal",
    description:
      "Counts as having Stealth, Strider, as well as Regeneration against non-spell attacks (this stacks with Regeneration).",
    skirmify:
      "Counts as having Stealth, Strider, as well as Regeneration against non-spell attacks (this stacks with Regeneration).",
    adjusted: false,
  },
  {
    armyBookUid: "Ir5XtqTM8JS3YEAJ",
    armyBookName: "Volcanic Dwarves",
    name: "Oath of Wrath",
    description: "The hero and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "Ir5XtqTM8JS3YEAJ",
    armyBookName: "Volcanic Dwarves",
    name: "Slayer",
    description: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    skirmify: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "Ir5XtqTM8JS3YEAJ",
    armyBookName: "Volcanic Dwarves",
    name: "Swift",
    description: "This model may ignore the Slow rule.",
    skirmify: "This model may ignore the Slow rule.",
    adjusted: false,
  },
  {
    armyBookUid: "Ir5XtqTM8JS3YEAJ",
    armyBookName: "Volcanic Dwarves",
    name: "Volcanic Leader",
    description: "The hero and its unit get the Ambush special rule.",
    skirmify:
      "The hero and up to half of its army get the Ambush special rule (must deploy within 3” of the hero).",
    adjusted: true,
  },
  {
    armyBookUid: "TjNtGnCDVts3l3ER",
    armyBookName: "War Disciples",
    name: "Battle Ready",
    description: "The hero and its unit get the Scout special rule.",
    skirmify: "This model and all friendly units within 12” get the Scout special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "TjNtGnCDVts3l3ER",
    armyBookName: "War Disciples",
    name: "Chosen Warrior",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "TjNtGnCDVts3l3ER",
    armyBookName: "War Disciples",
    name: "Dark Blessing",
    description:
      "Once per activation, pick 2 friendly units within 6”, which get +1 to hit rolls next time they fight in melee.",
    skirmify:
      'Once per activation, pick 2 friendly units within 6”. Those units, and all friendly units within 6" get +1 to hit rolls next time they fight in melee.',
    adjusted: true,
  },
  {
    armyBookUid: "TjNtGnCDVts3l3ER",
    armyBookName: "War Disciples",
    name: "Doom Caller",
    description:
      "Once per activation, before attacking, pick 2 enemy units within 12”, which get -2 to their next morale roll.",
    skirmify:
      'Once per activation, before attacking, pick 2 enemy units within 12”. Those units, and all enemy units within 6" get -2 to their next morale roll.',
    adjusted: true,
  },
  {
    armyBookUid: "TjNtGnCDVts3l3ER",
    armyBookName: "War Disciples",
    name: "Dark March",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "TjNtGnCDVts3l3ER",
    armyBookName: "War Disciples",
    name: "Mutations",
    description:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "TjNtGnCDVts3l3ER",
    armyBookName: "War Disciples",
    name: "Frenzy",
    description: "This model gets +2 attacks with a weapon of your choice when charging.",
    skirmify: "This model gets +2 attacks with a weapon of your choice when charging.",
    adjusted: false,
  },
  {
    armyBookUid: "TjNtGnCDVts3l3ER",
    armyBookName: "War Disciples",
    name: "Blood Icon",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "TjNtGnCDVts3l3ER",
    armyBookName: "War Disciples",
    name: "Blessing of War",
    description: "The hero and its unit get +1 to hit rolls when fighting in melee.",
    skirmify:
      "This model and all friendly units within 12” get +1 to hit rolls when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "31xjrm9ivdimkjxp",
    armyBookName: "War Disciples",
    name: "Chosen Veteran",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "31xjrm9ivdimkjxp",
    armyBookName: "War Disciples",
    name: "Dark Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "31xjrm9ivdimkjxp",
    armyBookName: "War Disciples",
    name: "Mutations",
    description:
      "When this model fights in melee, roll one die and apply one bonus: \n* 1-3: Attacks get Rending \n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus: \n* 1-3: Attacks get Rending \n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "31xjrm9ivdimkjxp",
    armyBookName: "War Disciples",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "31xjrm9ivdimkjxp",
    armyBookName: "War Disciples",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "31xjrm9ivdimkjxp",
    armyBookName: "War Disciples",
    name: "Gift of War",
    description: "The hero and its unit get +1 to hit rolls when fighting in melee.",
    skirmify:
      "This model and all friendly units within 12” get +1 to hit rolls when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "31xjrm9ivdimkjxp",
    armyBookName: "War Disciples",
    name: "Frenzy",
    description: "This model gets +2 attacks with a weapon of your choice when charging.",
    skirmify: "This model gets +2 attacks with a weapon of your choice when charging.",
    adjusted: false,
  },
  {
    armyBookUid: "rvvb3kdn2x2pqkki",
    armyBookName: "Watch Brothers",
    name: "Advanced Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "rvvb3kdn2x2pqkki",
    armyBookName: "Watch Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "rvvb3kdn2x2pqkki",
    armyBookName: "Watch Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "rvvb3kdn2x2pqkki",
    armyBookName: "Watch Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "rvvb3kdn2x2pqkki",
    armyBookName: "Watch Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "rvvb3kdn2x2pqkki",
    armyBookName: "Watch Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "rvvb3kdn2x2pqkki",
    armyBookName: "Watch Brothers",
    name: "Veteran Walker",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "rvvb3kdn2x2pqkki",
    armyBookName: "Watch Brothers",
    name: "Special Ammo",
    description: "The hero and its unit get Rending when shooting and may ignore cover.",
    skirmify:
      "This model and all friendly units within 12” get Rending when shooting and may ignore cover.",
    adjusted: true,
  },
  {
    armyBookUid: "rvvb3kdn2x2pqkki",
    armyBookName: "Watch Brothers",
    name: "Disciplined",
    description: 'This model gets +1 to hit rolls when shooting at enemies within 12".',
    skirmify: 'This model gets +1 to hit rolls when shooting at enemies within 12".',
    adjusted: false,
  },
  {
    armyBookUid: "rl7ympklz4r0ls38",
    armyBookName: "Watch Prime Brothers",
    name: "Battle Rites",
    description: "The hero and its unit get +1 to hit when shooting.",
    skirmify: "This model and all friendly units within 12” get +1 to hit when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "rl7ympklz4r0ls38",
    armyBookName: "Watch Prime Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "rl7ympklz4r0ls38",
    armyBookName: "Watch Prime Brothers",
    name: "Precision Shots",
    description: "The hero and its unit get AP(+1) when shooting.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "rl7ympklz4r0ls38",
    armyBookName: "Watch Prime Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "rl7ympklz4r0ls38",
    armyBookName: "Watch Prime Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "rl7ympklz4r0ls38",
    armyBookName: "Watch Prime Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "rl7ympklz4r0ls38",
    armyBookName: "Watch Prime Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "rl7ympklz4r0ls38",
    armyBookName: "Watch Prime Brothers",
    name: "Special Ammo",
    description: "The hero and its unit get Rending when shooting and may ignore cover.",
    skirmify:
      "This model and all friendly units within 12” get Rending when shooting and may ignore cover.",
    adjusted: true,
  },
  {
    armyBookUid: "rl7ympklz4r0ls38",
    armyBookName: "Watch Prime Brothers",
    name: "Disciplined",
    description: 'This model gets +1 to hit rolls when shooting at enemies within 12".',
    skirmify: 'This model gets +1 to hit rolls when shooting at enemies within 12".',
    adjusted: false,
  },
  {
    armyBookUid: "yxjboa8oma9bbdck",
    armyBookName: "Wolf Brothers",
    name: "Advanced Tactics",
    description:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".',
    skirmify:
      'Once per activation, before attacking, pick one friendly unit within 12” of this model. That unit, and all friendly unit within 6" may move by up to 6".',
    adjusted: true,
  },
  {
    armyBookUid: "yxjboa8oma9bbdck",
    armyBookName: "Wolf Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "yxjboa8oma9bbdck",
    armyBookName: "Wolf Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "yxjboa8oma9bbdck",
    armyBookName: "Wolf Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "yxjboa8oma9bbdck",
    armyBookName: "Wolf Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "yxjboa8oma9bbdck",
    armyBookName: "Wolf Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "yxjboa8oma9bbdck",
    armyBookName: "Wolf Brothers",
    name: "Veteran Walker",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "yxjboa8oma9bbdck",
    armyBookName: "Wolf Brothers",
    name: "Counter",
    description: "Gets +1 attack with a weapon of your choice when charged.",
    skirmify: "Gets +1 attack with a weapon of your choice when charged.",
    adjusted: false,
  },
  {
    armyBookUid: "e8mflytiz51kc4n6",
    armyBookName: "Wolf Prime Brothers",
    name: "Battle Rites",
    description: "The hero and its unit get +1 to hit when shooting.",
    skirmify: "This model and all friendly units within 12” get +1 to hit when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "e8mflytiz51kc4n6",
    armyBookName: "Wolf Prime Brothers",
    name: "Medical Training",
    description: "This model and its unit get the Regeneration rule.",
    skirmify: "This model and all friendly units within 12” get the Regeneration rule.",
    adjusted: true,
  },
  {
    armyBookUid: "e8mflytiz51kc4n6",
    armyBookName: "Wolf Prime Brothers",
    name: "Precision Shots",
    description: "The hero and its unit get AP(+1) when shooting.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when shooting.",
    adjusted: true,
  },
  {
    armyBookUid: "e8mflytiz51kc4n6",
    armyBookName: "Wolf Prime Brothers",
    name: "Repair",
    description:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    skirmify:
      "Once per activation, if within 2” of a unit with Tough, roll one die. On a 2+ you may repair D3 wounds from the target.",
    adjusted: false,
  },
  {
    armyBookUid: "e8mflytiz51kc4n6",
    armyBookName: "Wolf Prime Brothers",
    name: "Shield Wall",
    description: "Enemies get -1 to hit when they attack units where all models have this rule.",
    skirmify: "Enemies get -1 to hit when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "e8mflytiz51kc4n6",
    armyBookName: "Wolf Prime Brothers",
    name: "Veteran Infantry",
    description: "This model gets +1 to hit rolls in melee and shooting.",
    skirmify: "This model gets +1 to hit rolls in melee and shooting.",
    adjusted: false,
  },
  {
    armyBookUid: "e8mflytiz51kc4n6",
    armyBookName: "Wolf Prime Brothers",
    name: "War Chant",
    description: "The hero and its unit get +1 attack in melee when charging.",
    skirmify: "This model and all friendly units within 12” get +1 attack in melee when charging.",
    adjusted: true,
  },
  {
    armyBookUid: "e8mflytiz51kc4n6",
    armyBookName: "Wolf Prime Brothers",
    name: "Counter",
    description: "Gets +1 attack with a weapon of your choice when charged.",
    skirmify: "Gets +1 attack with a weapon of your choice when charged.",
    adjusted: false,
  },
  {
    armyBookUid: "qtuyeoRfXKlNflK0",
    armyBookName: "Wood Elves",
    name: "Battle Call",
    description:
      "The hero and its unit get +2 to hit rolls in melee or shooting whilst inside terrain (pick one).",
    skirmify:
      "This model and all friendly units within 12” get +2 to hit rolls in melee or shooting whilst inside terrain (pick one).",
    adjusted: true,
  },
  {
    armyBookUid: "qtuyeoRfXKlNflK0",
    armyBookName: "Wood Elves",
    name: "Eagle-Eyed",
    description: "This model shoots at Quality 2+.",
    skirmify: "This model shoots at Quality 2+.",
    adjusted: false,
  },
  {
    armyBookUid: "qtuyeoRfXKlNflK0",
    armyBookName: "Wood Elves",
    name: "Malice",
    description:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    skirmify:
      "Enemies get -1 to hit in melee when they attack units where all models have this rule.",
    adjusted: false,
  },
  {
    armyBookUid: "qtuyeoRfXKlNflK0",
    armyBookName: "Wood Elves",
    name: "Monster Hunter",
    description: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    skirmify: "This model gets AP(+2) against units where most models have Tough(3) or higher.",
    adjusted: false,
  },
  {
    armyBookUid: "qtuyeoRfXKlNflK0",
    armyBookName: "Wood Elves",
    name: "Protector",
    description: "The hero and its unit get +2 to Defense rolls whilst inside terrain.",
    skirmify:
      "This model and all friendly units within 12” get +2 to Defense rolls whilst inside terrain.",
    adjusted: true,
  },
  {
    armyBookUid: "qtuyeoRfXKlNflK0",
    armyBookName: "Wood Elves",
    name: "War Dance",
    description:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    skirmify:
      "When this model fights in melee, roll one die and apply one bonus:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)",
    adjusted: false,
  },
  {
    armyBookUid: "qtuyeoRfXKlNflK0",
    armyBookName: "Wood Elves",
    name: "Wild Hunt",
    description: "The hero and its unit get the Ambush special rule.",
    skirmify:
      "The hero and up to half of its army get the Ambush special rule (must deploy within 3” of the hero).",
    adjusted: true,
  },
  {
    armyBookUid: "04z57ua0bwth37zh",
    armyBookName: "Wormhole Daemons of Change",
    name: "Banner of Change",
    description: "This model and its unit get AP(+1) when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get AP(+1) when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "04z57ua0bwth37zh",
    armyBookName: "Wormhole Daemons of Change",
    name: "Daemon",
    description: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    skirmify: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    adjusted: false,
  },
  {
    armyBookUid: "04z57ua0bwth37zh",
    armyBookName: "Wormhole Daemons of Change",
    name: "Split",
    description:
      "Whenever a Pink Warrior is killed you may replace it with 2 Blue Warriors. Note that you may only start assigning wounds to Blue Warriors once all Pink Warriors in the unit have been killed.",
    skirmify:
      "Whenever a Pink Warrior is killed you may replace it with 2 Blue Warriors. Note that you may only start assigning wounds to Blue Warriors once all Pink Warriors in the unit have been killed.",
    adjusted: false,
  },
  {
    armyBookUid: "04z57ua0bwth37zh",
    armyBookName: "Wormhole Daemons of Change",
    name: "Split Again",
    description:
      "Whenever a Blue Warrior is killed you may replace it with 1 Yellow Warrior. Note that you may only start assigning wounds to Yellow Warriors once all Blue Warriors in the unit have been killed.",
    skirmify:
      "Whenever a Blue Warrior is killed you may replace it with 1 Yellow Warrior. Note that you may only start assigning wounds to Yellow Warriors once all Blue Warriors in the unit have been killed.",
    adjusted: false,
  },
  {
    armyBookUid: "04z57ua0bwth37zh",
    armyBookName: "Wormhole Daemons of Change",
    name: "Symbol of Change",
    description:
      "Once per activation, before attacking, roll X dice. For each 4+ one enemy model within 18” takes 1 automatic hit with AP(3) and Deadly(3).",
    skirmify:
      "Once per activation, before attacking, roll X dice. For each 4+ one enemy model within 18” takes 1 automatic hit with AP(3) and Deadly(3).",
    adjusted: false,
  },
  {
    armyBookUid: "9qvy1oufoangt2gl",
    armyBookName: "Wormhole Daemons of Lust",
    name: "Banner of Lust",
    description: "This model and its unit count as having the Strider special rule.",
    skirmify:
      "This model and all friendly units within 12” count as having the Strider special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "9qvy1oufoangt2gl",
    armyBookName: "Wormhole Daemons of Lust",
    name: "Daemon",
    description: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    skirmify: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    adjusted: false,
  },
  {
    armyBookUid: "9qvy1oufoangt2gl",
    armyBookName: "Wormhole Daemons of Lust",
    name: "Magic Absorption",
    description: "This model gets +2 to its rolls when blocking enemy spells.",
    skirmify: "This model gets +2 to its rolls when blocking enemy spells.",
    adjusted: false,
  },
  {
    armyBookUid: "9qvy1oufoangt2gl",
    armyBookName: "Wormhole Daemons of Lust",
    name: "Song of Banishment",
    description:
      "Once per activation, before attacking, pick one enemy unit within 18”, which takes a Dangerous Terrain test.",
    skirmify:
      'Once per activation, before attacking, pick one enemy unit within 18”. That unit, and all enemy unit within 6" takes a Dangerous Terrain test.',
    adjusted: true,
  },
  {
    armyBookUid: "9qvy1oufoangt2gl",
    armyBookName: "Wormhole Daemons of Lust",
    name: "Song of Summoning",
    description:
      "When this model is activated you may place a unit of 5 Lust Warriors fully within 6” of this unit.",
    skirmify:
      "When this model is activated you may place a unit of 5 Lust Warriors fully within 6” of this unit.",
    adjusted: false,
  },
  {
    armyBookUid: "9qvy1oufoangt2gl",
    armyBookName: "Wormhole Daemons of Lust",
    name: "Very Fast",
    description: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    skirmify: "This model moves +4” when using Advance and +8” when using Rush/Charge.",
    adjusted: false,
  },
  {
    armyBookUid: "9qvy1oufoangt2gl",
    armyBookName: "Wormhole Daemons of Lust",
    name: "Symbol of Lust",
    description:
      "Once per activation, before attacking, roll X dice. For each 4+ two enemy units within 12” take 3 automatic hits each.",
    skirmify:
      "Once per activation, before attacking, roll X dice. For each 4+ two enemy units within 12” take 3 automatic hits each.",
    adjusted: false,
  },
  {
    armyBookUid: "9qvy1oufoangt2gl",
    armyBookName: "Wormhole Daemons of Lust",
    name: "Speed Boost",
    description: "This model counts as having Very Fast instead of Fast.",
    skirmify: "This model counts as having Very Fast instead of Fast.",
    adjusted: false,
  },
  {
    armyBookUid: "fmuqw5lr5l6dq0mq",
    armyBookName: "Wormhole Daemons of Plague",
    name: "Banner of Plague",
    description: "This model and its unit get Rending when fighting in melee.",
    skirmify: "This model and all friendly units within 12” get Rending when fighting in melee.",
    adjusted: true,
  },
  {
    armyBookUid: "fmuqw5lr5l6dq0mq",
    armyBookName: "Wormhole Daemons of Plague",
    name: "Daemon",
    description: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    skirmify: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    adjusted: false,
  },
  {
    armyBookUid: "fmuqw5lr5l6dq0mq",
    armyBookName: "Wormhole Daemons of Plague",
    name: "Slime Trap",
    description:
      "Enemy units that fight in melee against the hero count as having the Slow special rule for the rest of the game.",
    skirmify:
      "Enemy units that fight in melee against the hero count as having the Slow special rule for the rest of the game.",
    adjusted: false,
  },
  {
    armyBookUid: "fmuqw5lr5l6dq0mq",
    armyBookName: "Wormhole Daemons of Plague",
    name: "Symbol of Plague",
    description:
      "Once per activation, before attacking, roll X dice. For each 4+ one enemy unit within 18” must immediately take a Dangerous Terrain test.",
    skirmify:
      "Once per activation, before attacking, roll X dice. For each 4+ one enemy unit within 18” must immediately take a Dangerous Terrain test.",
    adjusted: false,
  },
  {
    armyBookUid: "prsajf5ot936qznk",
    armyBookName: "Wormhole Daemons of War",
    name: "Banner of War",
    description: "This model and its unit count as having the Impact(1) special rule.",
    skirmify:
      "This model and all friendly units within 12” count as having the Impact(1) special rule.",
    adjusted: true,
  },
  {
    armyBookUid: "prsajf5ot936qznk",
    armyBookName: "Wormhole Daemons of War",
    name: "Daemon",
    description: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    skirmify: "This model may be deployed as if it had the Ambush or the Scout rule (pick one).",
    adjusted: false,
  },
  {
    armyBookUid: "prsajf5ot936qznk",
    armyBookName: "Wormhole Daemons of War",
    name: "Resistance",
    description: "This model may block spells as if it had the Psychic(2) special rule.",
    skirmify: "This model may block spells as if it had the Psychic(2) special rule.",
    adjusted: false,
  },
  {
    armyBookUid: "prsajf5ot936qznk",
    armyBookName: "Wormhole Daemons of War",
    name: "Symbol of War",
    description:
      "Once per activation, before attacking, roll X dice. For each 4+ one enemy unit within 18” takes 3 hits with AP(2).",
    skirmify:
      "Once per activation, before attacking, roll X dice. For each 4+ one enemy unit within 18” takes 3 hits with AP(2).",
    adjusted: false,
  },
];
