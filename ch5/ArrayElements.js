/*
let num = [1,2,4,5,6,7,8,9]
let num_more=[10,11,12,13,14,15]
let num_even_more=[101,102,103,104,105,106]
delete num[0]
console.log(num.length)    //length does not effect because of deleat num[0]

let newArray=num.concat(num_more, num_even_more)
console.log(newArray)
*/

/*
//sort method

let compare=(a,b)=>{
    return a-b           //sorting in desending order , if you want to sort array in assending then do b-a
}
let num=[551,22,3,14,5,6,7,8,229]
num.sort()
console.log(num)  //it will short element alphabatically not by small num the big  [14,22,229,3,5,551,6,7,8] 

num.sort(compare)
console.log(num)  //now it weel compare element numericaly
num.reverse()     //reverse an array
*/


//splice and slice
let num=[551,22,3,14,5,6,7,8,229]
num.splice(2,3,1022,1055,1023)     //here 2 show start from 2 index (then 3 show remove 3 element (3,14,5))(then add their (1022,1055,1023))
console.log(num)

//slice

let newNum=num.slice(3)       //slice not directly change in main array it will demand the new array first
console.log(newNum)
