//CONVERTS BOOSTSTRAP OBJECT CARDS INTO A TEMPLATE STRING
function convertCard(cardObject) {
    const cardString = `<div class="card">
            <img
              class="card-body"
              alt="${cardObject.alt}"
              src="${cardObject.src}"
              height="500px" width="500px"
            />
            <h3 class="card-title">${cardObject.title}</h3> 
            <h4 class="card-summary">${cardObject.summary}</h4>
          </div>`

    return cardString;
}


function display(message) {
    document.write(message);
}


function output(myMessage) {
    window.outputTag.innerHTML += window.outputTag.innerHTML + myMessage;
}