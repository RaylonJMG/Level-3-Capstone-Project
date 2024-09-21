function display(){
  document.write();
}

//CONVERTS BOOSTSTRAP OBJECT CARDS INTO A STRING
function convertCard(cardObject) {
 return cardString
}


//CREATES COLUMNS FROM ARRAYS
function createColumns(contentsArray){
  let columnString = "";
  for (let position=0; position < contentsArray.length; position++) {
    const content = contentsArray[position];
    columnString += createColumns( content );   
  } 
  return columnString;
}

 //CREATES ROWS FROM AN ARRAY OF COLUMNS
function createRows( columnsArray) {
  let myRows = "";
  for (let position = 0; position < columnsArray.length; position++) {
    const columns = columnsArray[position];
    myRows += createRows( columns );
  }
  return myRows;
}

function createColumn(contentString) {
  const myColumnString = `<div class="col">${contentString}</div>`;
  return myColumnString;
}

function createRow(columnString) {
  const rowString = `<div class="row">
      ${columnString}</div>`;
  return rowString;
}
function createContainer(rowString){
  const containerString = `<div class="container">
    ${rowString}
  </div>`;
  return containerString;
}
