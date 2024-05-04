//CH->6   Question->1

/*let age=prompt("Enter you age")
age=Number.parseInt(age)

const canDrive=(age)=>{
    return age>=18?true:false
}
if(canDrive(age)){
    alert("yes you can drive")
}else{
    alert("you cannot drive")
}*/

//CH->6   Question->2

/*
let age=prompt("Enter you age")
age=Number.parseInt(age)
const canDrive=(age)=>{
    return age>=18?true:false
}
let runagain=true
while(runagain){
    let age=prompt("Enter you age")
    age=Number.parseInt(age)
    if(age<0){
        console.error("Fuck you enter real age nonsence!");
        break;
    }
    if(canDrive(age)){
    alert("yes you can drive")
    }else{
    alert("you cannot drive")
    }
    runagain=confirm("do you want to run again")
}
*/

//CH->6   Question->3  redirect to google.com if number is less than 4

let number=prompt("Enter the number");
number=Number.parseInt(number)

if(number<4){
    location.href="https://google.com"
}

let color=prompt("Enter the page backgroung color")
document.body.style.background=color
