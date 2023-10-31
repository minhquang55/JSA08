const headingElement = document.getElementsByTagName('h1')[0];
headingElement.textContent = "MindX3";
headingElement.style.color = "red";
headingElement.classList.add("heading-text");

const listElm = document.getElementById('list');
listElm.classList.add('box');



// Tao ra cac khoi hinh vuong co danh so tu 1 -> 10, 
// so le thi mau red, so chan mau blue
const arrNum = [1,2,3,4,5,6,7,8,9,10];

for (let index = 0; index < arrNum.length; index++) {
  const itemElm = document.createElement('div');
  itemElm.textContent = arrNum[index];
  itemElm.classList.add('item');
  itemElm.style.backgroundColor = "blue"
  listElm.appendChild(itemElm);
}