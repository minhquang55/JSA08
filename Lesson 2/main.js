// Array (mang)
const listStudent = ["Dat", "Triet", "Kien", "Ngoc", "Tuan", "Nam"];
listStudent[0] = "Phong";
const listStudent2 = [
  ["Dat", 10],
  ["Triet", 11],
  ["Kien", 12],
  ["Ngoc", 11],
  ["Tuan", 10],
  ["Nam", 11],
];

// Template literal
console.log(`${listStudent2[0][0]} hoc lop ${listStudent2[0][1]}`);
// Do dai cua mang
console.log(listStudent.length);
// Them 1 phan tu vao mang
listStudent.push("Phong");
// Xoa phan tu dau tien trong mang
listStudent.shift();
// Xoa phan tu cuoi cung trong mang
listStudent.pop();
// Xoa phan tu o vi tri xac dinh
listStudent.splice(3, 2);

// Object
const student = {
  name: "Dat",
  age: 15,
  address: "Mau Luong",
  gender: "male",
};
student.age = 16;
student.country = "Viet Nam";
/* `console.log(student);` is printing the `student` object to the console. */
// console.log(student);

// console.log(`${student['name']} o ${student.address}`);

// In ra tu 1 den 10
// let count = 1;
// while (1) {
//   console.log(count);
//   count += 1;
// }

// while (count === 11) {
//   console.log(count);
//   count = count + 0;
// }

// do {
//   console.log(count);
//   count = count + 1;
// } while (count === 11);

for(let x = 0; x < listStudent.length; x++) {
  console.log(listStudent[x]);
}


