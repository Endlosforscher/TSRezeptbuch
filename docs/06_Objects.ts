/* In TypeScript, objects are collections of 
key-value pairs where each key is a string (or a Symbol) 
and each value is any valid TypeScript data type, 
including primitives, arrays, functions, or other objects.
Objects allow you to represent complex data structures 
and are fundamental to modeling real-world entities in your code. */

// Object representing a person
let schuler: { 
    name: string, 
    age: number, 
    isStudent: boolean 
} = {
    name: 'Max',
    age: 25,
    isStudent: true
};

// Object representing a car
let auto: { 
    marke: string, 
    farbe: string, 
    jahr: number 
} = {
    marke: 'Volkswagen',
    farbe: 'blau',
    jahr: 2020
};

// Object representing a book
let buch: { 
    titel: string, 
    autor: string, 
    seiten: number 
} = {
    titel: 'Der kleine Prinz',
    autor: 'Antoine de Saint-Exupéry',
    seiten: 96
};

// Create a type that represent object
type Nutzer = {
    id: number,
    name : string
}

let nutzer: Nutzer = {
    id: 3,
    name: 'Ludwig Beethoven'
}

