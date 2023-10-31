// function (hàm, phương thức)

// let name = "Dat";

// function displayName () {
//   console.log(name);
// }

// name = "Kien";
// displayName();

let count = 9;
function displayArr () {
  for (let index = 1; index < count + 1; index++) {
    console.log(index);
  }
}
// displayArr();
count = 10;
// displayArr();

// Tinh tong 2 so

function sum (a, b) {
  console.log(a + b);
}

sum(4, 5);
sum(12, 90);

function logMindX() {
  console.log('mindX');
}

function handleFocus () {
  console.log('focus');
}

function handleBlur () {
  console.log('blur');
}

const btnElm = document.getElementById('btn');
btnElm.addEventListener('click', logMindX);

function changeColor () {
  const boxElm = document.getElementById('box');
  boxElm.style.backgroundColor = "black"
}
const changeBtn = document.getElementById('change-btn');
changeBtn.addEventListener('click', changeColor)





