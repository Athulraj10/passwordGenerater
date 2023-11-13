// Source objects
const personDetails = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  const addressInfo = {
    city: 'New York',
    country: 'USA'
  };
  
  const combinedInfo =  Object.assign({},addressInfo,personDetails)
  
  // Modify the combined object
  combinedInfo.age = 31;
  combinedInfo.city = 'San Francisco';
  
  // Original objects and the combined object
  console.log(personDetails);
  console.log(addressInfo);
  console.log(combinedInfo);
  
// // Original object
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
  
