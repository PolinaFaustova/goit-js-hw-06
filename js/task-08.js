// Напиши скрипт управления
//  формой логина.

// Обработка отправки формы
// form.login-form должна быть по событию submit.

// При отправке формы страница
// не должна перезагружаться.

// Если в форме есть незаполненные поля,
// выводи alert с предупреждением о том,
// что все поля должны быть заполнены.

// Если пользователь заполнил все поля и
// отправил форму, собери значения полей в обьект,
// где имя поля будет именем свойства, а значение поля
// - значением свойства. Для доступа к элементам формы
// используй свойство elements.
// Выведи обьект с введенными данными
// в консоль и очисти значения полей формы методом reset.

const loginFormRef = document.querySelector("form.login-form");

loginFormRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailInputRef = loginFormRef.elements.email;
  const passwordInputRef = loginFormRef.elements.password;

  if (emailInputRef.value === "" || passwordInputRef.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    const formData = {
      email: emailInputRef.value,
      password: passwordInputRef.value,
    };
    console.log(formData);
    loginFormRef.reset();
  }
}
