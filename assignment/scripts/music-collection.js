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

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

console.log( addToCollection( 'Californian Soil', 'London Grammar', 2021 ) );

console.log( addToCollection( 'dont smile at me', 'Billie Eilish', 2017 ) );

console.log( addToCollection( 'Sing To Me Instead', 'Ben Platt', 2019 ) );

console.log( addToCollection( 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', 'Billie Eilish', 2019 ) );

console.log( addToCollection( 'In The Lonely Hour', 'Sam Smith', 2014 ) );

console.log( addToCollection( 'Days Are Gone', 'HAIM', 2013 ) );

console.log(`Check to make sure the albums were added to my collection:`);
console.log( collection );
