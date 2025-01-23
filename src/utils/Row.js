import { Column } from "./Column,js";

export class Row {
    openingTag = "<div class='row'>";
    closingTag = "</div>";
    innerHTML = "";
    
    addColumn(column = new Column()) {
        this.innerHTML += column;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`
    }
}