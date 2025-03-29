
let building_type = "residential building"
let adverb = "stinky"
let access_type = "Denied"
let booleanValue = access_type.includes("afternoon")
let numberOne = 5
let numberTwo = 7
let mathResults = numberOne/numberTwo

let person_object ={
    name: "Suzy",
    age: 25,
    dogs_owned: 3
};
pick_name = person_object.name

const story = `In a hidden ${building_type}, I stumbled upon a hidden robot factory. The ${adverb} machines were assembling gadgets endlessly. One robot, named Robo${pick_name}, handed me a metallic keycard. It beeped and said, 'Access Granted!' Did you know ${numberOne} ÷ ${numberTwo} equals ${person_object.dogs_owned}? Fascinating, right?`

document.getElementById("madlibs-output").textContent = story;


console.log(story);
console.log(booleanValue);



