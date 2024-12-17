export class Column{
    openingTag = `"<div class='col' >"`;
    closingTag = `"</div>"`;
    innerHTML = `""`;

    constructor(content = "") {
        this.innerHTML = content;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`
    }
}