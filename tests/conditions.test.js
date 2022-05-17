it('testing conditions',()=>{
    //if statements
    //if else statements
    //if elseIf else statements
    let num = 14
    let isOdd 

    if(num % 2 === 0){
        isOdd = false
    } else{
        isOdd = true
    }
    expect(isOdd).toBe(false)


    let jonAge = 21
    let beccaAge = 24
    let ryanAge = 19

    function canDrink(personAge){
        if(personAge >= 21){
            return true
        }else{
            return false
        }
    }
expect(canDrink(jonAge)).toBe(true)
    

})