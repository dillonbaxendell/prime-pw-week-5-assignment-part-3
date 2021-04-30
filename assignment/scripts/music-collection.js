console.log('***** Music Collection *****');
let collection = []; //create a variable 'collection' as an array

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

function addToCollection( title, artist, yearPublished ) {
  console.log( `In addToCollection` ); //check to make sure we're in function
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }; //creates a new object with properties that mimick the input parameters
  collection.push( album ); //adds the object to the end of the collection array
  return album; //end function
}

addToCollection( 'Californian Soil', 'London Grammar', 2021 );

console.log( collection );
