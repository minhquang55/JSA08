const headingElm = document.getElementById('heading');
const colorBtn = document.getElementById('color-btn');

function changeColor () {
  if (headingElm.style.color === 'red') {
    headingElm.style.color = 'black';
  } else {
    headingElm.style.color = 'red';
  }
  localStorage.setItem("textColor", headingElm.style.color);
}
colorBtn.addEventListener('click', changeColor);

// Lay mau trc do ra tu trong localStorage
const prevColor = localStorage.getItem('textColor');
// Gan mau trc do vao the h1
headingElm.style.color = prevColor;