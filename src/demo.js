function add(num1, num2){
    return num1 + num2
}
function callFunc(foo){
    return foo(1,1)
}

//expect this function to be given a string
//of words separated by spaces
//it should return the number of words
function wordCount(words){
    let array = words.split(' ')
    let count = array.length
    return count
}

module.exports = {
    add,
    callFunc,
    wordCount
}