const x = 10;
let sum = 0;
// Xu ly o day
for (let index = 0; index <= 10; index++) {
  sum = sum + index;
}
console.log(sum);

// 
const arr = [123, 345, 2, 6, 8, 9478, 15]
for (let index = 0; index < arr.length; index++) {
  if(arr[index] % 3 === 0) {
    console.log(arr[index]);
  }
}

// 
const headingElm = document.getElementById('heading');
const clickBtn = document.getElementById('click-btn');
headingElm.style.color = 'red'

function alertMindX () {
  alert("MindX");
}
clickBtn.addEventListener('click', alertMindX);

