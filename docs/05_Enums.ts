/* In TypeScript, enums are a way to define a set 
of named constants. Enums allow you to define a collection
of related values that can be accessed using symbolic names.
Enums are useful when you have a fixed set of values that 
are known at compile time.  */
enum Richtungen {
    Uber,
    Unten,
    Links,
    Rechts
}

// Accessing Richtungen index
let nutzersRichtung: Richtungen = Richtungen.Links // Output: 2

// Enum with predefined starting index
enum Wochentagen {
    Montag,
    Dienstag,
    Mittwoch,
    Donnerstag,
    Freitag,
    Samstag,
    Sonntag
}

let mittwoch: Wochentagen = Wochentagen.Mittwoch // Output: 3

// String index Enums
enum Menschen {
    Otto = 'Otto',
    Armin = 'Armin',
    Matthias = 'Matthias',
    Ludwig = 'Ludwig'
}

let person: Menschen = Menschen.Armin // Output: 'Armin'


// Function that accepts an enum parameter and returns a string
function getRichtung(richtung: Richtungen): string {
    switch (richtung) {
        case Richtungen.Uber:
            return 'Uber';
        case Richtungen.Unten:
            return 'Unten';
        case Richtungen.Links:
            return 'Links';
        case Richtungen.Rechts:
            return 'Richts';
        default:
            return 'Unknown';
    }
}