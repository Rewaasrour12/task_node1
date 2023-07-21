
const fs = require ("fs")
// create object person
const person = {
fname : "ahmed" , 
lname : "hossam" , 
age : 20 ,
city : "alex"
}  
//console.log(person)

// change obj to Json 
const personjson = JSON.stringify (person)
//console.log(personjson)

// store in file
fs.writeFileSync("person.json", personjson);

// read file (json)
const read_file_Json = fs.readFileSync("person.json");

// Convert to obj 
const person_update = JSON.parse (read_file_Json)
//console.log(person_update)

// Update data
person_update.fname = "adel";
person_update.lname = "ahmed";
person_update.age = 40;
person_update.city = "cairo";

//console.log(person_update)

// convert obj to Json 
const person_update_json = JSON.stringify (person_update)

// store in file
fs.writeFileSync("person_update.json", person_update_json);
