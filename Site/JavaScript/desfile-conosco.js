// Função para validar o nome (dois nomes obrigatórios)
function validarNome() {
  const nomeInput = document.getElementById("nome");
  const nomeValue = nomeInput.value.trim();
  const nomes = nomeValue.split(" ");

  if (nomes.length < 2) {
    exibirMensagemErro("mensagemValidacaoNome", "Por favor, insira pelo menos dois nomes.");
    nomeInput.focus();
    return false;
  }

  limparMensagemErro("mensagemValidacaoNome");
  return true;
}

// Função para exibir mensagem de erro
function exibirMensagemErro(idMensagem, mensagem) {
  const mensagemValidacao = document.getElementById(idMensagem);
  mensagemValidacao.style.color = "red";
  mensagemValidacao.textContent = mensagem;
}

// Função para limpar mensagem de erro
function limparMensagemErro(idMensagem) {
  const mensagemValidacao = document.getElementById(idMensagem);
  mensagemValidacao.textContent = "";
}

// Adicionar ouvinte de evento blur ao campo "Nome"
document.getElementById("nome").addEventListener("blur", validarNome);
// Função para validar o e-mail
function validarEmail() {
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(emailValue)) {
    exibirMensagemErro("mensagemValidacaoEmail", "Por favor, insira um e-mail válido.");
    emailInput.focus();
    return false;
  }

  limparMensagemErro("mensagemValidacaoEmail");
  return true;
}

// Adicionar ouvinte de evento blur ao campo de e-mail
document.getElementById("email").addEventListener("blur", validarEmail);
