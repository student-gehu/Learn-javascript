alert("Enter the value of a!")
let a=prompt("Enter the a here")
a=Number.parseInt(a)              //change string into a int type
document.write("you entered a of type " + ( typeof a ))    
let write=confirm("do you want to write it to the page")
if(write){
    document.write(a)             // it will print the number or user input on the web page 
}else{
    document.write(" please allow me to write")
}
