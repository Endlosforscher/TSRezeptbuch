/* In TypeScript, a union type allows a variable 
 to have more than one type. This means that a variable
 can store values of different types at different times.
 Union types are specified using the | operator 
 between each type. */
let produktId: string | number 
produktId = '30' // Valid assignment
produktId =  30 // Valid assignment

let daten: boolean | number[];
daten = true; // Valid assignment
daten = [1, 2, 3]; // Valid assignment

let ergebnis: string | null;
ergebnis = "success"; // Valid assignment
ergebnis = null; // Valid assignment