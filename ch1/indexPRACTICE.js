//chapter 1 --> Q1
let a="Rahul"
let b=6
console.log(a+b)

//chapter 1 --> Q2
console.log(typeof (a+b))

//chapter 1 --> Q3
const a1 = {
    name:"Rahul",
    section: 1,
    isPrincipal: false
}
//a1="harry"  in question 3 we can not redeclare the value of a1 , for any number or any object only add some objects

//chapter 1 --> Q4
a1['friend']="Aman"
console.log(a1)     //now Aman is added to a const a1

//chapter 1 --> Q5

const dict = {
    Eloquent: "Fluent or persuasive in speaking or writing",
    Meticulous: "Showing great attention to detail",
    Serendipity: "The occurrence of events by chance in a happy or beneficial way",
    Ephemeral: "Lasting for a very short time",
    Ubiquitous: "Present, appearing",
}
console.log(dict['Ephemeral'])
console.log(dict.Ubiquitous)   // here is two type of sintex to print the dictionary
