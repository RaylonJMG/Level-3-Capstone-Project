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