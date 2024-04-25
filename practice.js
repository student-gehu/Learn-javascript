//charpter 5 practce set
// //practice question->1
// let arr=[1,2,3,4,5,6,7,12]
// let a = prompt("Enter a number")
// a=Number.parseInt(a)
// arr.push(a)
// console.log(arr)         //push the new number to the array

//practice question->2
// let arr=[1,2,3,4,5,6,7,12]
// let a;
// do{
//     a = prompt("Enter a number")
//     a=Number.parseInt(a)
//     arr.push(a)
// }while(a!=0);            //take numbers until you press the 0
// console.log(arr)

//Practice question->3
// let arr1=[1,2,3,4,5,6,7,12,10,670]
// let n=arr1.filter((x)=>{
//     return x%10==0
// })
// console.log(n)          //output[10,670]

//Practice question->4
// let arr1=[1,2,3,4,5,6,7,12,10,670]
// let n=arr1.map((x)=>{
//     return x*x
// })
// console.log(n)    

//Practice question->5
let arr1=[1,2,3,4]
let n=arr1.reduce((x1,x2)=>{      //reduce function multiply element one by one 
    return x1*x2
})
console.log(n)     //24
