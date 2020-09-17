// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

const checkTemp = (temp) => {
  if(temp1 <= 212){
    return `${temp1} is below boiling point`
  }
  else if(temp2 >= 212){
    return `${temp2} is above boiling point`
  }
  else if(temp3 === 212){
    return `${temp3} is at boiling point`
  }
}
console.log(checkTemp(temp1))



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

  for(let i= 0; i < myNumbers1.length; i++) {
    console.log(myNumbers1[i] * 5)
  }




// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

const mult5 = (array) => {
  return array.map(value => value * 5)
}
console.log(mult5(myNumbers2))


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const noVowels = (string) => {
  let newArray = string.split("")
  let filteredArray = newArray.filter(value => {
    return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
  })
  let newString = filteredArray.join("")
  return newString
}
console.log(noVowels(stringWithVowels2))


// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var notAString1 = true
var notAString2 = 42
//
// const noVowels = (string) => {
//   // let newArray = string.split("")
//   // let filteredArray = newArray.filter(value => {
//   //   return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
//   // })
//   // let newString = filteredArray.join("")
//   // return newString
//   if(true !== string){
//     return "true is not a string"
//   }
//   else if(42 !== string) {
//     return "42 is not a string"
//   }
// }
// // console.log(noVowels(notAString1))


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]

var cats = toonimals.filter(value => {
  if(value === "cat"){
    return value.name
  }
})
console.log(cats.name)

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]

var nonCats = toonimals.filter(value => {
  if(value.name !== "cat"){
    return value.name
  }
})
console.log(nonCats.name)
