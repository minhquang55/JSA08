const usernameElm = document.getElementById('username')
const passElm = document.getElementById('password')
const submitBtn = document.getElementById('submit-btn')

function handleLogin() {
  console.log(usernameElm.value);
  console.log(passElm.value);
  if(usernameElm.value === 'Admin' && passElm.value === 'admin') {
    window.location = './index.html'
  } else {
    usernameElm.value = "";
    passElm.value = "";
    alert('Sai thong tin dang nhap')
  }
}

submitBtn.addEventListener('click', handleLogin);