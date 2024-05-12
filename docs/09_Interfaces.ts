/* 
In TypeScript, interfaces are a way to define the shape 
or structure of an object. They describe the properties and 
methods that an object should have, but they don't provide 
any implementation. Interfaces allow you to enforce a contract
between different parts of your code, ensuring consistency 
and interoperability. 
*/

// Create a basic interface
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    greet(): void;
}

// Implements
class Student implements Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number
    ) {}
    greet(): void {
        console.log(`Name: ${this.firstName} and ${this.lastName}`)
    }
}

// Using interface as type annotations
const printPerson = (person: Person):void => {
    console.log(`Firstname: ${person.firstName} and lastname: ${person.lastName}`)
    person.greet()
} 

const john: Person = {
    firstName: 'John',
    lastName : 'Doe',
    age: 20,
    greet() {
        console.log(`Greeting ${this.firstName}`)
    }
} 

printPerson(john)

// Using interfaces as function annotations
interface MathFunction {
    (z:number, j:number) : number
}

const sumNumbers: MathFunction = (z:number, j:number): number => {
    return z + j
}

const multiplyNumbers: MathFunction = (z:number, j:number): number => {
    return z + j
}

const subNumbers: MathFunction = (z:number, j: number) : number => {
    return z - j
}

