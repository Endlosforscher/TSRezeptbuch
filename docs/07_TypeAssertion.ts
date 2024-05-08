/* In TypeScript, type assertion is a way to explicitly
specify the type of a value when you know more about
the type than TypeScript does. It's like a type cast in 
other languages, but it doesn't perform any special checking
or restructuring of data; it's purely a way to tell 
the compiler what you know about the type. */

// Typescript type assertion using angle-bracket notation
let nutzersId: any = 20
let nutzersNeueId = <number>nutzersId

let someValue: any = "Hello, TypeScript!";
let strLength: number = (<string>someValue).length;

// Typescript type assertion using as keyword
let nutzsersMitAsId: any = 30
let nutzsersNeueMitAsId = nutzsersMitAsId as number

let someValueMitAs: any = "Hello as Keyword"
let strMitAsLenght: number = (someValueMitAs as string).length

// Type assertion with union types
let meinValue: string | number = "TypeScript";
let strLength2: number = (meinValue as string).length;
