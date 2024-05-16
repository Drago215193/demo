const name= "Ankit"
const repoCount = 10

//  console.log(name +" "+ repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is around ${repoCount}`);   //string interpolation  #note- preferred

const gameName = new String("drago-go")
console.table([gameName[0],gameName[1],gameName[2],gameName[3],gameName[4]]);

console.log(gameName.__proto__);

console.log(gameName.length);       //length of string
    
console.log(gameName.toUpperCase());        //convert string to upper case

console.log(gameName.charAt(2));        //provides character at index given in this case 2

console.log(gameName.indexOf("g"));     //provides index of given character


const newString = gameName.substring(0,6)   //provides string from initial index to final index, #note- it does't support -ve index
console.log(newString);

const newString2 = gameName.slice(-6, 4)    //provides string from initial to final index, #supports -ve index
console.log(newString2);

const newStringOne = "  drago  "
console.log(newStringOne);      
console.log(newStringOne.trim());   //trim removes extra space in start and end of string

const url= "https://drago215193/drago 215193"

console.log(url);

console.log(url.replace(" ", ""));      //replace given character with provided one

console.log(url.includes("drago"))      //checks and return true/false if given character is present in parent string
console.log(url.includes("ankit"))

console.log(gameName.split("-"));       //splits according to provided character and provided result in array