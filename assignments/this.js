/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
  console.log(this);
  return name;
}
sayName("D'Artagnan");

// Principle 2

// code example for Implicit Binding
const obj = {
  greet: "Hi",
  sayHello: function(name) {
    console.log(`${this.greet} my name is ${name}`);
    console.log(this);
  }
};

obj.sayHello("William");


// Principle 3

// code example for New Binding
function RetailGreeter(greeter) {
  this.greeting = "Welcome to Walmart ";
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const todd = new RetailGreeter("Northom");
const newman = new RetailGreeter('Jerry');

todd.speak();

// Principle 4

// code example for Explicit Binding
todd.speak.call(newman);