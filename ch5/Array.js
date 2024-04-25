let marks_class_12=[51,45,66,78,false,"Not Present"]

console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])  //undefine

console.log("The length of marks_class_12 is",marks_class_12.length)
marks_class_12[6]=89  // Adding a new element in the array
marks_class_12[0]=71  //changing the value of an array

console.log(marks_class_12)
console.log(typeof marks_class_12)    // array is always a object




//write a program to input element within a array


// Define an empty array to store elements
let arr = [];

// Prompt the user for the number of elements to input
let numElements = parseInt(prompt("Enter the number of elements:"));

// Loop to input elements
for (let i = 0; i < numElements; i++) {
    // Prompt the user to input each element
    let element = prompt(`Enter element ${i + 1}:`);
    
    // Add the element to the array
    arr.push(element);
}

// Display the array
console.log("The elements entered are:");
console.log(arr);
