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

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any
//     collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted
//     like: `TITLE by ARTIST, published in YEAR`.

function showCollection( array ) {
  console.log('In showCollection'); // check to make sure we're in the function
  console.log( `This collection has ${array.length} objects.` ); // logs how many objects are in the input array
  for (let i = 0; i < array.length; i++) {
    console.log( `${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
  } // end for loop - runs through the input array to log each title, artist and year published for each
} // end showCollection function

// - Test the `showCollection` function.

console.log('Showing collection through showCollection function:');
showCollection( collection );

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist( artist ) {
  console.log( 'In findByArtist' ); // check to make sure we're in the function
  let byArtist = []; //create a new array to filter by artist
  for (let i = 0; i < collection.length; i++) {
    if (artist == collection[i].artist) {
      byArtist.push( collection[i] );
    } // a for loop that runs through the collection array and adds to the findByArtist
      // array if the input artist matches the artist for each object
  }
  return byArtist; // returns new array
} // end findByArtist function

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection,
// as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

console.log( 'Find Billie Eilish in my collection (expect 2 objects in the array):', findByArtist( 'Billie Eilish' ) );
console.log( 'Find Childish Gambino in my collection (expect 0 objects in the array):', findByArtist( 'Childish Gambino' ) );

console.log( '****STRETCH GOALS****' );

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. The search criteria might look sosomething like this:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - Return a new array of all items in the `collection` matching *all* of the search criteria.
//   - If no results are found, return an empty array.
//   - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

function search( {artist: artist, year: year}, array ) {
  console.log('In search function');
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array.artist === artist && array.yearPublished === year) {
      newArray.push( array[i] );
      return newArray;
    } else if (array.artist !== artist && array.yearPublished !== year) {
      return newArray;
    } else {
      return array;
    }
  }
}

console.log( search( {'artist': '', 'year':  }, collection ) );
