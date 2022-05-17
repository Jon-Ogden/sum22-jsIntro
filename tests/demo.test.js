//TDD Test Driven Development
// -we write our tests before we write our code

import{ add, callFunc, wordCount } from '../src/demo'

it('tests add', ()=>{

    let sum1 = add(1,11)
    let sum2 = add(2,6)
    let str1 = "Hello, my name is Jon Ogden!"

    expect(sum1).toBe(12)
    expect(typeof add).toBe('function')
    expect(typeof add(1,1)).toBe('number')


    expect(wordCount(str1)).toBe(6)
})