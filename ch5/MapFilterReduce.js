//here is the difference b/w the map and for each loop , in map we are free to do operation on array and print new array 
//and in for each we are not print new array perform looping in main array
let arr = [23,12,56]    
// array map method     
let a=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+1
})
console.log(a)


//array filter method
let arr2=[45,23,21,2,3,4]
let a2=arr2.filter((a)=>{
    return a<10
})
console.log(a2)            //[2,3,4]

//Array reduce method
let arr3=[1,2,3,4,5,5]
let newarr3 = arr3.reduce((h1,h2)=>{    //add all value one by one 
    return h1+h2
})
console.log(newarr3)

//Array reduce method  also take function as a variable
let arr4=[1,2,3,4,5,5]
let reduce_func=((h1,h2)=>{    //add all value one by one 
    return h1+h2
})
let newarr4 = arr4.reduce(reduce_func)
console.log(newarr3)
