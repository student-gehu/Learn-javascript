// Chapter 2
// problem no 1
let age=prompt("Hay whats your age:");
age=Number.parseInt(age);

if(age>10&&age<20){
    alert("you are a right person!")
}
else{
    alert("not for you!")
}


// problem no 2
let age2=prompt("Hay whats your age:");
switch(age2){
    case '12':
        console.log("your age is 12")
        break;
    case '13':
        console.log("your age is 13")
        break;
    case '14':
        console.log("your age is 14")
        break;
    case '15':
        console.log("your age is 15")
        break;
    default:
        console.log("your age is not special")
}

// problem no 3
let num=prompt("Hay whats the number:");
num=Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("your number is divisible by 2 and 3")
}
else{
    console.log("your number is not divisible by 2 and 3")
}
