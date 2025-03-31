
let building_type = "residential building"
let adverb = "stinky"
let access_type = "Denied"
let booleanValue = access_type.includes("Granted")
let numberOne = 49
let numberTwo = 7
let mathResults = numberOne/numberTwo

let person_object ={
    name: "Suzy",
    age: 25,
    dogs_owned: 3
};


const story = `In a hidden ${building_type}, I stumbled upon a hidden robot factory. The ${adverb} machines were assembling gadgets endlessly. One robot, named Robo${person_object.name}, handed me a metallic keycard. It beeped and said, 'Access ${access_type}!' Did you know ${numberOne} ÷ ${numberTwo} equals ${mathResults}? Fascinating, right?`

document.getElementById("madlibs-output").textContent = story;
document.getElementById('boolean').textContent = boolean


console.log(story);
console.log(booleanValue);



