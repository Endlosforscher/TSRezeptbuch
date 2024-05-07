/* In TypeScript, a tuple is a finite ordered list 
of elements where each element can have a different type.
Unlike arrays, tuples have a fixed length, and each element
in a tuple can have its own specified type. */
let leute: [number, string, boolean] = [1, 'Armin', true]

// Accessing Tuple's element using zero-based indexing, just like with arrays
console.log(leute[0]) // Output: 1
console.log(leute[1]) // Output: Armin

// Update Tuple's element respecting type (String)
leute[1] = 'Otto'

// Tuple array
let arbeiter: [number, string, boolean][]
arbeiter = [
    [1, 'Martin Luther', true],
    [2, 'Johann Sebastian Bach', true],
    [3, 'Richard Wagner', true]
]

// Extending tuple array with concat
let zusatzlischePerson: [number, string, boolean][] = [[4, 'Otto Von Bismark', true]]
let erweitertePersonen: [number, string, boolean][] = arbeiter.concat(zusatzlischePerson)
console.log(erweitertePersonen) // Output: [[1, "Martin Luther", true], [2, "Johann Sebastian Bach", true], [3, "Richard Wagner", true], [4, "Otto Von Bismark", true]] 
