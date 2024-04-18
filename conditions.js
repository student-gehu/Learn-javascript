let a= prompt("Hey whats you age?")
a = Number.parseInt(a);   //Converting the sting to a number
// console.log(typeof a)     print number as output
if(a<0){
    alert("this is an invalid age");   //samicolen is not important
}
else if(a<9){
   alert("you are a kid and you connot even think of driving");
}
else if(a<18 && a>=9){
    alert("you are a kid and you can think of driving after 18");
}
else{
    alert("you can now drive as you are above 18")
}
console.log("Done")

//homeWork - Explor and write a program by yourself

const order='Momos';
switch(order){
    case'choming':
    console.log('choming is 50Rs/plate:')
    break;

    case'Momos':
    console.log('Momos is 80Rs/plate:')
    break;

    case'burger':
    console.log('burger is 30Rs:')
    break;

    case'somosa':
    console.log('somosa is 20Rs:')
    break;

}

//ternary operator
console.log("you can", a<18? "not drive":"drive")