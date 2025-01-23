export class Card{
    openingTag = "<div class='card' >";
    closingTag = "</div>";
    innerHTML = "";

    constructor(content = "") {
        this.innerHTML = content;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`
    }
}

/*
const bsCard = new Card(content = ""){
    `<div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    </div>`;
}
*/