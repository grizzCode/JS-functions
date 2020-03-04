import {
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
} from '../app'

describe('originalArray Tests:', ()=>{
  test('originalArray should return itself', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe('doubleArray Tests:', ()=> {
  test('doubleArray should double each num in array', ()=> {
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8]);
    expect(doubleArray([2,4,6,8])).toEqual([4,8,12,16]);
    expect(doubleArray([0,0,0,0])).toEqual([0,0,0,0]);
  })
})

describe('evensOnlyArray Tests:', ()=> {
  test('evensOnlyArray should only return even nums in a given array', ()=> {
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4])
  })
  test('evensOnlyArray should only return even nums in a given array', ()=> {
    expect(evensOnlyArray([1,3,5,7])).toEqual([])
  })
})
describe('sumArray Tests:', ()=> {
  test('sumArray should sum all nums in array', ()=> {
    expect(arraySum([1,2,3,4])).toEqual(10)
  })
  test('sumArray should sum all nums in array', ()=> {
    expect(arraySum([10,20,30,40])).toEqual(100)
  })
})
describe('allNumbersGreaterThanZero Tests:', ()=> {
  test('allNumbersGreaterThanZero should return true if all array items are > zero', ()=> {
    expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true)
  })
  test('allNumbersGreaterThanZero should return true if all array items are > zero', ()=> {
    expect(allNumbersGreaterThanZero([0,1,1,1])).toEqual(false)
  })
})