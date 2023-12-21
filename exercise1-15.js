"use strict";


   class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
    }
    
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    
    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }

        getIntro() {
            let intro =
            "Hi! I'm " + this.firstName + " " + this.lastName +
            " and I am a " + this.jobTitle;
            return intro;
            
    
}
   }
//test

    //let employee1 = new Employee(
      //  1, "Ian", "Auston", "Graphic Artist", 42.50);
      // console.log(`Employee ${employee1.firstName} created`);

      let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);

    console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

//excercise 2

employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`post promotion, job title is ${employee1.jobTitle}`);
console.log(`post promotion, pay rate is $${employee1.payRate}`);

let employee2 = new Employee(2, "Jane", "Doe", "Application Developer", 55.00);
console.log(`Employee ${employee2.getFullName()} created`);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);

employee2.promote("Sr. Software Developer", 60.00);
console.log(`post promotion, job title is ${employee2.jobTitle}`);
console.log(`post promotion, pay rate is $${employee2.payRate}`)

// exercise 3 -- test


let intro = employee1.getIntro();
console.log(intro);

employee1.promote("Senior. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);