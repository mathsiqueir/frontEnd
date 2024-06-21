$("#logIn").click(emailExists);
$("#SignUp").click(createAccount);

let message = $('#message')

function localStorareSaveUserData(){
  
}
function createAccount() {
  let email = $("#email").val();
  let nome = $("#name").val();
  let cep = $("#cep").val();
  let password = $("#password").val();
  let confirmPassword = $("#confirmPassword").val();

  if (
    !email ||
    !nome ||
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

  let users = JSON.parse(localStorage.getItem('users')) || []
  if(users.find(user=>{user.email === email})){
    message.text('Email já cadastrado!')
    return
  }

  users.push({email,nome,cep,password})
  localStorage.setItem('users', JSON.stringify(users))
  message.text('Conta criada com sucesso');
  
  clearSignUpForm();
}



function emailExists() {
  let logInEmail = $("#logInEmail").val();
  let logInPassword = $("#logInPassword").val();

  let users = JSON.parse(localStorage.getItem('users')) || []
  let user = users.find(user=>user.email === logInEmail)
 
  if (user) {
    if (logInPassword === user.password) {
      message.text("Login bem-sucedido");
    } else if (logInPassword === "") {
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
