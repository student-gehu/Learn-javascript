/*let a =1;
let b =2;
let c =3;

console.log("average of a and b is" , (a+b)/2)
console.log("done")
console.log("average of b and c is" , (b+c)/2)
console.log("done")
console.log("average of c and a is" , (c+a)/2)
console.log("done")
//now we want to add one in the average so we use function for our easyness
*/

const hello=()=>{
    console.log("hey how are you")
    return "hi fine"
}

function onePlusAvg(x,y){
    console.log("Done")
    return 1+(x+y)/2
}

const sum=(q,p)=>{         // advance javascript method to write functions
    return p+q
}

let a =1;
let b =2;
let c =3;
let v=hello()

console.log(v)
console.log("one plus average of a and b is" , onePlusAvg(a,b))
console.log("one plus average of b and c is" , onePlusAvg(b,c))
console.log("one plus average of c and a is" , onePlusAvg(c,a))
console.log(sum(10,20))
