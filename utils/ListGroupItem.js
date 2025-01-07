export class ListGroupItem{
    openingTag = "<li class='list-group-item'>";
    closingTag = "</li>";
    innerHTML = "";

    constructor(content = "") {
        this.innerHTML = content;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    };
}