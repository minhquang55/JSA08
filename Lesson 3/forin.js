// object
const student = {
  name: 'Dat',
  age: 16,
  address: 'Ha Noi',
}

// name: 'Dat',
// age: 16,
// address: 'Ha Noi',
console.log("For in object");
for (const key in student) {
  console.log(key + ': ' + student[key]);
}

const arr = [1,2,3,4,5];

for (const item of arr) {
  console.log(item);
}