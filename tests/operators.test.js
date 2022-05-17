//basic test format
//it('string here',()=>{
    //write tests
//})
it('testing operators', ()=>{
    expect(4 * 4).toBe(16)
    expect(14 - 12).toBe(2)

// ++ adds 1 -- subtracts 1
// % returns remainder of divisiony
// num+= adds 10

//LOGIC OPERATORS
// && (AND) - || (OR) - ! (NOT)

expect(true && true).toBe(true)
expect(true && false).toBe(false)

expect(true || false).toBe(true)
expect(true || true).toBe(true)
expect(false || false).toBe(false)

expect( !false).toBe(true)
expect( !true).toBe(false)
})