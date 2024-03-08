class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Address: ${this.address}`);
        console.log();
    }
}
const person1 = new Person("John Doe", 30, "123 Main Street, City");
person1.displayInfo();
person1.birthdate = "January 1, 1990";
delete person1.age;
person1.displayInfo();
