//program to add first n natural numbers
let sum=0
let n=prompt("Enter the value of n:")
n=Number.parseInt(n)
for(let i=0; i<n; i++){  // here let is only work for block if you want to print the value of i after the loop you want to use globel variable var
    sum+=(i+1)
}
console.log("sum of first" + n + "natural number is" +sum)


let obj={
    harry:90,
    shubh:45,
    shivika:54,
    rahul:98,
    aman:97,
}
//for in loop
for(let a in obj){
    console.log("marks of " + a + " are " + obj[a])
}

//for of loop
for(let b of "Harry"){
    console.log(b)
}