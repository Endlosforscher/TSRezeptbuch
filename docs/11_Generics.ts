/*
In TypeScript, generics provide a way to create reusable components
that can work with a variety of data types. They allow you to define
functions, classes, and interfaces with placeholders for the types of
the data they will operate on. Generics make your code more flexible
and maintainable by allowing you to write code that can adapt to different
data types without sacrificing type safety.
*/
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['1','2','3','4'])