// Iteration 1: Names and Input
const hacker1 = "Victor";
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Carolina";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

if (hacker2.length === hacker1.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let upperCase = hacker1.toUpperCase();
let space = " ";
for (let i = 0; i < upperCase.length; i++){
    space += upperCase[i] + " ";
    }
console.log(space); 


let reversed = " ";
for ( let i = hacker1.length - 1; i >= 0; i--) {
    reversed += hacker1[i];
}
console.log(reversed)


if (hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.")
}

if (hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first, definitely.")
}
if (hacker1.localeCompare(hacker2) === 0){
    console.log("What?! You both have the same name?")
}

//Will be doing the bonus time later. Thank youu!!