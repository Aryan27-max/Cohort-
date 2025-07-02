//used to get different time related functions 
const date = new Date();
console.log(date.getDate());

// the map class is a easy format to create a key value pair 
const map = new Map();
map.set('name','Aryan');
map.set('age', 20);
console.log(map.get('name'));

const NewName = map.get('name');
console.log(NewName);

//expected output 
// (1-31)  <---- based on today's date 
// Aryan   <-- from map.get('name')
// Aryan   <-- from map.get('name') again (assigned to NewName)