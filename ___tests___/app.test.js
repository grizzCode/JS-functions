import {
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray
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
  test('Should return true if any item in array is > 0', ()=> {
    expect(someNumbersAreOdd([1,2,3,4])).toEqual(true)
  })
  test('Should return false if no item in array is > 0', ()=> {
    expect(allNumbersGreaterThanZero([0,0,0,0])).toEqual(false)
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