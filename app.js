
export const originalArray = (array) => {
  return array
}

const numberArray = [1,2,3,4]

// ARRAY ITERATOR METHODS
// return array with double values in array
export const doubleArray = (numberArray)=> {
  return numberArray.map(item => item * 2)
}

// return array with all even numbers
export const evensOnlyArray = (numberArray)=> {
  return numberArray.filter(item => item % 2 === 0)
}

// return array with sum of numbers
export const arraySum = (numberArray)=> {
  return numberArray.reduce((sum,current)=> sum + current, 0)
}

// // return true if every item greater than 0
export const allNumbersGreaterThanZero = (numberArray)=> {
  return numberArray.every(x => x > 0)
}

// // return true if some item greater than 0
export const someNumbersAreOdd = (numberArray)=> {
  return numberArray.some(x => x > 0)
}

// // return array double and even
export const evensOnlyAndDoubleArray = (numberArray)=> {
  return numberArray.filter(item=> item % 2 === 0).map(item => item * 2)
}

// find an item method return 'not found' if not found
export const findItem = (numberArray, num)=> {
  return numberArray.find(item => item === num)
}

// Sort array in descending order
export const sortArray = (numberArray)=> {
  return numberArray.sort( (a, b) => b - a )
}


// ARRAY ITERATOR METHODS ON Objects
const artists = [
  {name: 'a', likes:100},
  {name: 'c', likes:99},
  {name: 'c', likes:101}, 
]

// doubles likes of artist
export const doubleLikes = (artists)=> {
  for (let i of artists) {
    i.likes = i.likes * 2; 
  }
  return artists
}
// // => [
// //   {name: 'a', likes:200},
// //   {name: 'c', likes:198},
// //   {name: 'c', likes:202},  
// // ]; 

// moreThan100Likes(artists)// =>[ {name: 'c', likes:101} ]; // use filter
// //  return an array of strings of artist name

// justArtistMoreThan100Likes(artists) //=> ['c']; // use filter
// // get total number of likes fo all artists

// numberOfLikes(artists) //=> 300; // get all likes
// // find an item method. Returns 'not found' if not found

// findObjByName(artists, 'a') // => {name: 'a', likes:200}
// // returns array of artist sorted by likes

// sortArtistByName(artists)