//CREATES COLUMNS FROM ARRAYS
function createColumns(contentsArray){
  let columnString = "";
  for (let position=0; position < contentsArray.length; position++) {
    const content = contentsArray[position];
    columnString += createColumns( content );   
  } 
  return columnString;
}