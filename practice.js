//practice set chapter 4

// question -->1
let str="Rah\""
console.log(str.length)

//question -->2
let str2 = "Hello, world!";

// Check if the string contains a specific substring
let substring = "world";
if (str2.includes(substring)) {            // include chuck the yes or no 
    console.log(`The string "${str2}" contains the substring "${substring}".`);
} else {
    console.log(`The string "${str2}" does not contain the substring "${substring}".`);
}

//second example with endwith

let str3 = "Hello, world!";

// Check if the string ends with a specific suffix
let suffix = "world!";
if (str3.endsWith(suffix)) {
    console.log(`The string "${str3}" ends with the suffix "${suffix}".`);
} else {
    console.log(`The string "${str3}" does not end with the suffix "${suffix}".`);
}

//third example with startwith
let str4 = "Hello, world!";

// Check if the string starts with a specific prefix
let prefix = "Hello";
if (str4.startsWith(prefix)) {
    console.log(`The string "${str4}" starts with the prefix "${prefix}".`);
} else {
    console.log(`The string "${str4}" does not start with the prefix "${prefix}".`);
}


//question -->3
let str5="RaHul"
console.log(str5.toLowerCase())

//question -->4
let str6="Please give Rs 1000"
let amount=str6.slice("Please give Rs ".length)
let amount2=Number.parseInt(str6.slice(15))
console.log(amount)
console.log(typeof amount) // string
console.log(typeof amount2)  //number


//question -->4
let friend="Aman"
friend[3]="R"
console.log(friend)     //friend in not changed , because string is immutable