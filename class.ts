class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

class Animal {
    #name: string;
    public constructor(theName: string) { this.#name = theName; }
    public move(distanceInMeters: number = 0) {
        console.log(`${this.#name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

class Animal2 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;

class Person2 {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee3 extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee3("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus('Man with the 8 strong legs');

class Octopus2 { 
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}

const fullNameMaxLength = 10;

class Employee4 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if(newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }

        this._fullName = newName;
    }
}

let employee4 = new Employee4();
employee4.fullName = "Bob Smith";
if(employee4.fullName) {
    console.log(employee4.fullName);
}

class Grid {
    static origin = {x: 0, y: 0};
    calculateDIstanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDIstanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDIstanceFromOrigin({x: 10, y: 10}));

abstract class Animal3 {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

abstract class Department {
    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }
    printMeeting(): void{
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();

class Greeter1 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter1: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());

let Greeter2 = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function() {
        return "Hello, " + this.greeting;
    };
    return Greeter;
});

let greeter2;

console.log(greeter.greet());