function findSecondLargest(array) {
    let first = 0;
    let second = 0;
  
    for (const element of array) {
      if (element > first) {
        second = first;
        first = element;
      } else if (element > second) {
        second = element;
      }
    }
    return second;
  }

  const array = [10, 5, 7, 3, 9];

const secondLargest = findSecondLargest(array);

console.log(secondLargest); 
