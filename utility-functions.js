function createColumnGroups( contentsArray, grouping) {
  const myColumns = [];
  let position = 0;   
  do {
    let columns = "";
    for (let count = 0; count < grouping ; count++) {
      const content = contentsArray[position];
      if ( content !== undefined) {
        columns += createColumn( content );  
      }
      position++;
    }
    myColumns.push( columns );
  } while (position < contentsArray.length);  
  return myColumns;
}

//CREATES COLUMNS FROM ARRAYS
function createColumns(contentsArray){
  let columnString = "";
  for (let position=0; position < contentsArray.length; position++) {
    const content = contentsArray[position];
    columnString += createColumn( content );   
  } 
  return columnString;
}