/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

let tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4 



// Print out the concatenated string

 console.log(tongueTwister)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const parT1 = part1.slice(0, -1) + part1 [part1.length -1].toUpperCase()
const parT2 = part2.slice(0, -1) + part2 [part2.length -1].toUpperCase()
const result = parT1 + " " + parT2


// Print the cameLtaiL-formatted string

console.log(result)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)


let totalBill = billTotal * 0.15

// Print out the tipAmount

console.log(totalBill)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

let randomNum =  Math.floor(Math.random() * 10) + 1; // por qué no al revés? primero random luego floor?

// Print the generated random number

console.log(randomNum)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

// False

const expression2 = a || b;

// True

const expression3 = !a && b;

// False (la ! niega la a, por tanto es falsa, por tanto todo falso)

const expression4 = !(a && b);

// True  (el interior del paréntesis es false, la explamación niega el paréntesis por tanto es true.)

const expression5 = !a || !b;

// True (al menos uno va a ser true, en este caso la "b")

const expression6 = !(a || b);

// False (el interior va a ser true y se niega desde fuera)

const expression7 = a && a;

// True. Todo es true.

