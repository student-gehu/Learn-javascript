let name = "Rahul\""       //here \" is a escape secquence whose count is 1 
console.log(name.length)   // 6

console.log(name.toUpperCase())  //RAHUL
console.log(name.toLowerCase())

//slice string
console.log(name.slice(2,4))  //hu
console.log(name.slice(2))  //hul    because we not give second argument

//replace string
console.log(name.replace("Rah","Gun"))  //Gunul

//concat string
let friend = "rishabh"
console.log(name.concat("is a friend of ", friend, " OK "))  //Rahul is a friend of rishab OK
let friend2="         Daksh          "
console.log(friend2.trim())         // if we not trim it will give space also


let fr="Nandni" + " Rahul"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
console.log(fr[4])
console.log(fr[5])
console.log(fr)

//use a for loop to print a string

let str = "Hello, world!";

// Iterate over each character of the string using a for loop
for (let i = 0; i < str.length; i++) {
    // Print each character
    console.log(str[i]);
}
