//Create a map function that takes an array and a transform function 
//as input and returns the transformed array as output.

const nums = [10,23,45,44,22,66,867,456,543,5766,454];

const result = nums
        .filter(nums => nums % 2 === 0)
        .map(nums => nums*10);

console.log(result)