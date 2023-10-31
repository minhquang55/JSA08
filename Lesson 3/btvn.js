// Bài 1:
const count = 9;

const rows = (count + 1)/2;
for (let index = 0; index < rows; index++) {
  let str = '';
  for(let index2 = 0; index2 < index * 2 + 1; index2++) {
    str = str + '1';
  }
  // console.log(str);
}

// Bài 2:
const myArr = [0,1,2,3,4,5,6];
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  if (element%2 === 0) {
    console.log(element);
  }
}

// Bai 3:
let result = "";
const resultArr = [];
result = prompt('What your name?');
resultArr.push(result);
result = prompt('What your favourite?');
resultArr.push(result);

console.log(resultArr);