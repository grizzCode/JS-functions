import {
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray,
  doubleLikes,
  moreThan100Likes,
  justArtistMoreThan100Likes,
  numberOfLikes,
  findObjByName
} from '../app'

describe('originalArray Tests:', ()=>{
  test('originalArray should return itself', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe('doubleArray Tests:', ()=> {
  test('Should double each num in array', ()=> {
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8]);
    expect(doubleArray([2,4,6,8])).toEqual([4,8,12,16]);
    expect(doubleArray([0,0,0,0])).toEqual([0,0,0,0]);
  })
})

describe('evensOnlyArray Tests:', ()=> {
  test('Should only return even nums in a given array', ()=> {
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4])
  })
  test('Should only return even nums in a given array', ()=> {
    expect(evensOnlyArray([1,3,5,7])).toEqual([])
  })
})

describe('sumArray Tests:', ()=> {
  test('Should sum all nums in passed array', ()=> {
    expect(arraySum([1,2,3,4])).toEqual(10)
  })
  test('Should sum all nums in passed array', ()=> {
    expect(arraySum([10,20,30,40])).toEqual(100)
  })
})

describe('allNumbersGreaterThanZero Tests:', ()=> {
  test('Should return true if all array items are > zero', ()=> {
    expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true)
  })
  test('Should return false if some array items are <= zero', ()=> {
    expect(allNumbersGreaterThanZero([0,1,1,1])).toEqual(false)
  })
})

describe('someNumbersAreOdd Tests:', ()=> {
  test('Should return true if any item in array is odd', ()=> {
    expect(someNumbersAreOdd([1,2,3,4])).toEqual(true)
  })
  test('Should return false if no item in array is odd', ()=> {
    expect(someNumbersAreOdd([6,4,2,2])).toEqual(false)
  })
})

describe('evensOnlyAndDoubleArray Tests:', ()=> {
  test('Should filter even nums in array then double them', ()=> {
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8])
  })
  test('Should filter even nums in array then double them', ()=> {
    expect(evensOnlyAndDoubleArray([1,3,5,7])).toEqual([])
  })
})

describe('findItem Tests:', ()=> {
  test('Should return passed argument if found in array', ()=> {
    expect(findItem([1,2,3,4],1)).toEqual(1)
  })
  test('Should return undefined if passed arg is not present in array', ()=> {
    expect(findItem([1,3,5,7],8)).toEqual(undefined)
  })
})
describe('sortArray Tests:', ()=> {
  test('Should sort array in descending order', ()=> {
    expect(sortArray([1,2,3,4])).toEqual([4,3,2,1])
  })
  test('Should return undefined if passed arg is not present in array', ()=> {
    expect(sortArray([7,8,5,2])).toEqual([8,7,5,2])
  })
})

// Part 2
describe('doubleLikes Test:', ()=> {
  let artists = [
    {name: 'a', likes:100},
    {name: 'b', likes:99},
    {name: 'c', likes:101}, 
  ]
  
  test('Should double likes of object', ()=> {
    expect(doubleLikes(artists)).toEqual([
      {name: 'a', likes:200},
      {name: 'b', likes:198},
      {name: 'c', likes:202}, 
    ])
  })
})

describe('moreThan100Likes Test:', ()=> {
  let artists = [
    {name: 'a', likes:100},
    {name: 'b', likes:99},
    {name: 'c', likes:101}, 
  ]
  
  test('Should return objects with more than 100 likes', ()=> {
    expect(moreThan100Likes(artists)).toEqual([
      {name: 'c', likes:101} 
    ])
  })
})

describe('justArtistMoreThan100Likes Test:', ()=> {
  let artists = [
    {name: 'a', likes:100},
    {name: 'b', likes:99},
    {name: 'c', likes:101}, 
  ]
  
  test('Should return artist name only in array that has more than 100 likes', ()=> {
    expect(justArtistMoreThan100Likes(artists)).toEqual(['c'])
  })
})

describe('numberOfLikes Test:', ()=> {
  let artists = [
    {name: 'a', likes:100},
    {name: 'b', likes:99},
    {name: 'c', likes:101}, 
  ]
  
  test('Should return sum of all likes in array', ()=> {
    expect(numberOfLikes(artists)).toEqual(300)
  })
})

describe('findObjByName Test:', ()=> {
  let artists = [
    {name: 'a', likes:100},
    {name: 'b', likes:99},
    {name: 'c', likes:101}, 
  ]
  
  test('Should return object that matches passed param', ()=> {
    expect(findObjByName(artists, 'a')).toEqual({name: "a", likes: 100})
  })
  test('Should return not found for objects not in array', ()=> {
    expect(findObjByName(artists, 'd')).toEqual('not found')
  })
})