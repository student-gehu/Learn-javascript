/*let num=[3,54,1,2,4]

for(let i=0;i<num.length; i++){
    console.log(num[i])
}

//for each loop
num.forEach((element)=>{
    console.log(element*element)       //function for square a number in for in loop
})
*/

//Array.from
let name="Harry"
let arr=Array.from(name)
console.log(arr)           //convert string or html collection into array

//for...of loop
let num2=[1,2,3,4,5]
for(let i of num2){
    console.log(i)          //output is 1,2,3,4,5
}

//for...in
for(let i in num2){
    console.log(num2[i])      //output is 1,2,3,4,5
}
