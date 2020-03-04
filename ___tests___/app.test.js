import {
  // method1,
  // method2,
  originalArray
} from '../app'

describe('originalArray Tests:', () => {
  test('originalArray should return itself', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})