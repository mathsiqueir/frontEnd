let emails = [];
let names = [];
let ceps = [];
let passwords = [];
let message = $('#message')
$("#SignUp").click(createAccount);

function createAccount() {
  let email = $("#email").val();
  let name = $("#name").val();
  let cep = $("#cep").val();
  let password = $("#password").val();
  let confirmPassword = $("#confirmPassword").val();

  if (
    !email ||
    !name ||
    !password ||
    !cep ||
    !confirmPassword
  ) {
    message.text("Todos os campos devem ser preenchidos.");
    return;
  }

  if (password != confirmPassword) {
    $("#wrongPassword").text("As senhas não coincidem");
    return;
  } else {
    $("#wrongPassword").text("");
  }

  emails.push(email);
  names.push(name);
  ceps.push(cep);
  passwords.push(password);

  message.text('Conta criada com sucesso');
  clearSignUpForm();
}

$("#logIn").click(emailExists);

function emailExists() {
  let logInEmail = $("#logInEmail").val();
  let logInPassword = $("#logInPassword").val();
  let index = emails.indexOf(logInEmail);

  console.log("Email digitado:", logInEmail);
  console.log("Senha digitada:", logInPassword);

  if (emails.includes(logInEmail)) {
    if (logInPassword === passwords[index]) {
      message.text("Login bem-sucedido");
    } else if (logInPassword == "") {
      message.text("Digite a senha");
    } else {
      message.text("Senha incorreta");
    }
  } else {
    message.text("Email não encontrado");
  }
}

function clearSignUpForm() {
  $("#email").val("");
  $("#name").val("");
  $("#cep").val("");
  $("#password").val("");
  $("#confirmPassword").val("");
  $("#agree").prop("checked", false);
}
