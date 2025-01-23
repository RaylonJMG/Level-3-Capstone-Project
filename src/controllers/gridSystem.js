import { Column } from "../utils/Column.js";
import { GridSystem } from "../utils/gridSystem.js";
import { output } from "../utils/output.js";
import { Row } from "../utils/Row.js";

window.gridSystem = gridSystem;

export function gridSystem() {
    debugger;
    const gridSystem = new GridSystem();
    for (let rowNumber = 1; rowNumber <= 3; rowNumber++){
        const row = new Row();
        
        for (let columnNumber = 1; columnNumber <= 3; columnNumber++){
            const column = new Column(`COLUMN ${columnNumber}`);
            row.addColumn(column);
        }

         gridSystem.addRow(row);
    }
    output(gridSystem);
}