/* 
In TypeScript, classes are a fundamental building block 
for creating reusable, object-oriented code. They allow 
you to define blueprints for creating objects with properties 
and methods. Classes support inheritance, encapsulation, 
and polymorphism, making them powerful tools for structuring 
and organizing your code.
*/
interface Animal {
    id: number;
    name: string;
    nickname?: string;
    free?: boolean; 
    register(name: string): string;
}

class Fish implements Animal {
    id: number;
    name: string;
    nickname?: string; 
    free?: boolean;

    constructor(id: number, name: string, nickname?: string, free?: boolean) {
        this.id = id
        this.name = name
        this.nickname = nickname
        this.free = free
    }

    register(): string {
        return `${this.name} is now registered`;
    }
}

const lilo = new Fish(1,'Lilo')
const stich = new Fish(1,'Stich')

lilo.register()
stich.register()

// Subclasses: Extend class
class LakeFish extends Fish {
    isEatable: boolean

    constructor(id: number,  name: string, isEatable: boolean, nickname?:string, free?:boolean) {
        super(id, name, nickname, free)
        this.isEatable = isEatable
    } 
}

const brad = new LakeFish(1, 'Brad', true, '', true)