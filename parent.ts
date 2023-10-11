class Parent {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Hello, I'm ${this.name}.`);
    }
}

class Child extends Parent {
    constructor(name, hobby) {
        super(name); // Call the parent class constructor using "super"
        this.hobby = hobby;
    }

    showHobby() {
        console.log(`${this.name}'s hobby is ${this.hobby}.`);
    }
}

// Creating instances of the classes
const parent = new Parent("Alice");
const child = new Child("Bob", "Playing Guitar");

parent.introduce(); // Output: Hello, I'm Alice.
child.introduce(); // Output: Hello, I'm Bob.
child.showHobby(); // Output: Bob's hobby is Playing Guitar.
