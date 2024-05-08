/* 
In TypeScript, functions are blocks of code that perform a 
specific task when called or invoked. They can accept inputs 
(parameters), perform operations, and optionally return a value. Functions allow you to encapsulate reusable pieces of code, making your programs more modular and easier to maintain.
*/
function morgen(): void {
    console.log('Guten Morgen Typescript lang!')
}

// Function with parameters and a return value
function sum(a: number, b:number): number {
    return a + b
}

// Function expression with arrow syntax
const multiply = (a: number, b: number): number => {
    return a * b
}

// Function expression with optional parameters
const grussen = (name: string = 'Gast', alter?: number): void => {
    console.log(`Halo ${name}`)
    if(alter !== undefined)
        console.log(`Du bist ${alter} Jahre alt!`)
}

// Function with rest parameters
const erweitererSum = (...numbers: number[]): number => {
    return numbers
    .reduce(
        (total, number) => 
            total + number, 0
    )
}
