"use strict";


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
// test

let person1 = new Person("Jane", "Doe");
console.log(person1.getFullName());

// exercise 2

class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, payRate) {
        super(firstName, lastName);
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getGrossPay(hoursWorked) {
        return hoursWorked * this.payRate;
    }

}

let employee1 = new Employee( "Jane", "Doe", 1, "Software Developer", 60.00);
console.log(`gross Pay: $${employee1.getGrossPay(50)}`)
let employee2 = new Employee( "John", "Doe", 2, "Graphic Designer", 45.50);
console.log(`gross Pay: $${employee2.getGrossPay(25)}`)

//console.log(employee1.getFullName());
//console.log(employee2.getFullName());