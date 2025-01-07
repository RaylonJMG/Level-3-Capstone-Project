import { ListGroupItem } from "./ListGroupItem.js";

export class ListGroup{
    openingTag = " <ul class='list-group text-primary border border-5 border-primary'>";
    closingTag = "</ul>";
    innerHTML = "";

    addListGroupItem(listGroupItem = new ListGroupItem()) {
        this.innerHTML += listGroupItem;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    };
}
