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

