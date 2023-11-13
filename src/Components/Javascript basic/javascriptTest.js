const objectOrginal = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const shallowCopy = Object.assign({}, originalObject);

// Modify the shallow copy
shallowCopy.age = 31;
shallowCopy.address.city = 'San Francisco';

// Changes are reflected in the original object's address as well
console.log(originalObject);
console.log(shallowCopy);


// Original object
const originalObject = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  // Deep copy using JSON.parse() and JSON.stringify()
  const deepCopy = JSON.parse(JSON.stringify(originalObject));
  
  // Modify the deep copy
  deepCopy.age = 31;
  deepCopy.address.city = 'San Francisco';
  
  // Changes in the deep copy do not affect the original object
  console.log(originalObject);
  console.log(deepCopy);
  
