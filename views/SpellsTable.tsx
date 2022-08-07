import CSS from "csstype";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../data/store";
import { ISelectedUnit } from "../data/interfaces";

export interface SpellsTableProps {
  unit: ISelectedUnit;
}

export default function SpellsTable({ unit }: SpellsTableProps) {
  const loadedArmyBooks = useSelector((state: RootState) => state.army.loadedArmyBooks);
  const army = loadedArmyBooks.find((book) => book.uid === unit.armyId);
  const spells = army?.spells;

  const cellStyle = {
    px: 1,
  };
  const headerStyle: CSS.Properties = {
    ...cellStyle,
    fontWeight: 600,
    whiteSpace: "nowrap",
  };

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "action.hover", fontWeight: 600 }}>
            <TableCell sx={headerStyle}>Spell</TableCell>
            <TableCell sx={headerStyle}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spells &&
            spells.map((spell) => (
              <TableRow key={spell.name}>
                <TableCell sx={headerStyle}>
                  {spell.name} ({spell.threshold}+)
                </TableCell>
                <TableCell sx={cellStyle}>{spell.effect}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
