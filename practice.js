//chapter 3 practice
//question 1

let marks = {
    harry: 90,
    rahul: 95,
    monika: 40,
    daksh: 58,
}
for (let i=0 ; i<Object.keys(marks).length;i++){
    console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//question 2 --> for in loop 
let marks1 = {
    harry: 90,
    rahul: 95,
    monika: 40,
    daksh: 58,
}
for (let key in marks1){
    console.log("the marks of " + key + " are " + marks[key])
}

//question 3 
let cn = 4
let i
while(i!=cn){
    console.log("Try again")
    i=prompt("enter a number:")
}
console.log("you have enter the correct number!")

//question 4
const mean = (a,b,c,d)=>{
    return(a+b+c+d)/4
}
console.log(mean(4,5,6,7))