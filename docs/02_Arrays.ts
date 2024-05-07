// Arrays
let ids: number[] = [1,2,3,4,5]
let fruits: string[] = ['Melon', 'Watermelon', 'Strawberry']
let flags: boolean[] = [true, false, true]
let arr: any[] = [1, true, 'Something else']

// Defining an array and initializing it later
let konige: string[]
konige = [
    'Massimiliano II', 
    'Ludovico IV',
    'Federico III',
    'Venceslao',
    'Carlo IV',
    'Sigismondo'
]

// Accessing array elements
console.log(konige[0]); // Output: "König Massimiliano II"
console.log(konige[1]); // Output: "König Ludovico II"

// Iterate over array using for
for (let i = 0; i < ids.length; i++) {
    console.log(ids[i]);
}

// Iterate over array using forEach
ids.forEach(id => {
    console.log(id)
})

// Adding elements to array
konige.push('Ludovico III')

// Removing an element from the last index
let poppedKonige = konige.pop()

// Removing an element from the first index
let shiftedKonige = konige.shift()

// Adding an element at the beginning of the array
konige.unshift('Federico Barbarossa')

// Remove an element from the Array using index
let spliceKonige = konige.splice(1,1) // Removes 1 element starting from index 1

// Concatenates two or more arrays and returns a new array
let wittelsbachKonige = konige.concat(['Carlo VI']) 

/* map: The map method iterates over each element in
 the array and applies a callback function to each element, 
 returning a new array with the results of calling the 
 callback function on each element. 
 It does not mutate the original array. */
let mapLudovicoKonige = konige.map(konig => 
    konig.includes('Ludovico')
); // Return a boolean array

/* filter: The filter method creates a new array
  with all elements that pass the test implemented by the
  provided callback function. It does not mutate the original
  array. */
let filterLudovicoKonige = konige.filter(
    konig => konig.includes('Ludovico')
); // Return an array that includes only Ludovico konige

// Sort method arranges the elements of an array in a specified order.
konige.sort() // Sort the elements in alphabetical order (as strings).