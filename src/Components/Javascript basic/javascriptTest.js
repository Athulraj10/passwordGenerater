// // Source objects
// const personDetails = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30
//   };
  
//   const addressInfo = {
//     city: 'New York',
//     country: 'USA'
//   };
  
//   const combinedInfo =  Object.assign({},addressInfo,personDetails)
  
//   // Modify the combined object
//   combinedInfo.age = 31;
//   combinedInfo.city = 'San Francisco';
  
//   // Original objects and the combined object
//   console.log(personDetails);
//   console.log(addressInfo);
//   console.log(combinedInfo);
  
// Original object
// const originalObject = {
//     name: 'John',
//     age: 30,
//     address: {
//       city: 'New York',
//       country: 'USA'
//     }
//   };
//   // Deep copy using JSON.parse() and JSON.stringify()
//   const deepCopy = JSON.parse(JSON.stringify(originalObject));
//   // Modify the deep copy
//   deepCopy.age = 31;
//   deepCopy.address.city = 'San Francisco';
//   // Changes in the deep copy do not affect the original object
//   console.log(originalObject);
//   console.log(deepCopy);
  
  

// // Constructor function for a basic person object
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   // Adding a method to the prototype of the Person constructor
//   Person.prototype.prototypeExample = function () {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//   };
  
//   // Creating instances of the Person object
//   const person1 = new Person('Alice', 25);
//   const person2 = new Person('Bob', 30);
  
//   // Calling the method from the prototype
//   person1.prototypeExample();
//   person2.prototypeExample();
  // Create a Buffer with a string
const buffer = Buffer.from('Hello, Node.js!', 'utf-8');

// Convert the buffer to a string
const bufferString = buffer.toString('utf-8');

// Print the original buffer and the converted string
console.log('Original Buffer:', buffer);
console.log('Converted String:', bufferString);
