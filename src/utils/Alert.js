export class Alert{
    openingTag = "<div class='alert alert-primary alert-dismissible' role='alert'>";
    closingTag = "</div>";
    innerHTML = "";

    constructor(content = "") {
        this.innerHTML = content;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    };
}