const emailElm = document.getElementById('email');
const passwordElm = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');

function handleRegister () {
  const user = {
    email: emailElm.value,
    password: passwordElm.value
  }
  const users = [user];
  localStorage.setItem('users', JSON.stringify(users));
}

submitBtn.addEventListener('click', handleRegister);