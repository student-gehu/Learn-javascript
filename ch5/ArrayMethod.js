//Array Methods

let num = [1,2,3,4,5]
let b=num.toString()   //b is now a string
console.log(b)

let c = num.join("_")
console.log(c)
console.log(c,typeof c)

let r=num.pop()       // pop returns the popped(nikali hui value) element;
console.log(num, r) 

let r1=num.push(56)       // push returns the new array element
console.log(num,r1) 

let r2=num.shift()
console.log(r2,num)       //removes an element from the start of the array and print it on front

let r3=num.unshift(78)
console.log(r3,num)      //add an element from the start of the array and give it's length also




