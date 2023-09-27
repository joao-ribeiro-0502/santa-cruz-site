// Função para validar o campo "Nome"
function validarNome() {
  const nomeInput = document.getElementById("nome");
  const nomeValue = nomeInput.value.trim();

  // Divide o nome em partes usando espaços em branco como separadores
  const partesNome = nomeValue.split(" ");

  // Verifica se há pelo menos dois nomes
  if (partesNome.length < 2) {
    exibirMensagemErro("mensagemValidacaoNome", "Informe pelo menos dois nomes.");
    nomeInput.focus(); // Coloca o foco de volta no campo Nome
    return false;
  }

  ocultarMensagemErro("mensagemValidacaoNome");
  return true;
}

// Função para exibir mensagem de erro
function exibirMensagemErro(idElemento, mensagem) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = mensagem;
  elemento.style.display = "block";
}

// Função para ocultar mensagem de erro
function ocultarMensagemErro(idElemento) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = "";
  elemento.style.display = "none";
}

// Adicionar ouvinte de evento ao campo "Nome" para validar antes de avançar
document.getElementById("nome").addEventListener("blur", validarNome);

// Função para validar o campo "E-mail"
function validarEmail() {
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.trim();

  // Expressão regular para validar um formato de e-mail simples
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Verifica se o e-mail é válido usando a expressão regular
  if (!regexEmail.test(emailValue)) {
    exibirMensagemErro("mensagemValidacaoEmail", "Informe um e-mail válido.");
    emailInput.focus(); // Coloca o foco de volta no campo E-mail
    return false;
  }

  ocultarMensagemErro("mensagemValidacaoEmail");
  return true;
}

// Função para exibir mensagem de erro
function exibirMensagemErro(idElemento, mensagem) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = mensagem;
  elemento.style.display = "block";
}

// Função para ocultar mensagem de erro
function ocultarMensagemErro(idElemento) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = "";
  elemento.style.display = "none";
}

// Adicionar ouvinte de evento ao campo "E-mail" para validar antes de avançar
document.getElementById("email").addEventListener("blur", validarEmail);

// Função para formatar o campo "Telefone"
function formatarTelefone() {
  const telefoneInput = document.getElementById("telefone");
  const telefoneValue = telefoneInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  // Formata o número de telefone conforme o usuário digita
  let telefoneFormatado = "";

  for (let i = 0; i < telefoneValue.length; i++) {
    if (i === 0) {
      telefoneFormatado += `(${telefoneValue[i]}`;
    } else if (i === 1) {
      telefoneFormatado += `${telefoneValue[i]}) `;
    } else if (i === 6) {
      telefoneFormatado += `${telefoneValue[i]}-`;
    } else {
      telefoneFormatado += telefoneValue[i];
    }
  }

  telefoneInput.value = telefoneFormatado;

  // Valida o telefone quando o usuário tenta avançar para o próximo campo
  telefoneInput.addEventListener("blur", validarTelefone);
}

// Função para validar o campo "Telefone"
function validarTelefone() {
  const telefoneInput = document.getElementById("telefone");
  const telefoneValue = telefoneInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  // Verifica se o telefone possui 11 dígitos (formato completo)
  if (telefoneValue.length !== 11) {
    exibirMensagemErro("mensagemValidacaoTelefone", "Informe um telefone válido.");
    telefoneInput.focus(); // Coloca o foco de volta no campo Telefone
    return false;
  }

  ocultarMensagemErro("mensagemValidacaoTelefone");
  return true;
}

// Função para exibir mensagem de erro
function exibirMensagemErro(idElemento, mensagem) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = mensagem;
  elemento.style.display = "block";
}

// Função para ocultar mensagem de erro
function ocultarMensagemErro(idElemento) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = "";
  elemento.style.display = "none";
}

// Adicionar ouvinte de evento ao campo "Telefone" para formatação e validação
document.getElementById("telefone").addEventListener("input", formatarTelefone);

// Função para formatar o campo "Data de Nascimento"
function formatarDataNascimento() {
  const dataNascimentoInput = document.getElementById("dataNascimento");
  const dataNascimentoValue = dataNascimentoInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  // Formata a data de nascimento conforme o usuário digita
  let dataFormatada = "";

  for (let i = 0; i < dataNascimentoValue.length; i++) {
    if (i === 2 || i === 4) {
      dataFormatada += `/${dataNascimentoValue[i]}`;
    } else {
      dataFormatada += dataNascimentoValue[i];
    }
  }

  dataNascimentoInput.value = dataFormatada;

  // Valida a data de nascimento quando o usuário tenta avançar para o próximo campo
  dataNascimentoInput.addEventListener("blur", validarDataNascimento);
}

// Função para validar o campo "Data de Nascimento"
function validarDataNascimento() {
  const dataNascimentoInput = document.getElementById("dataNascimento");
  const dataNascimentoValue = dataNascimentoInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  // Verifica se a data de nascimento possui 8 dígitos (formato completo)
  if (dataNascimentoValue.length !== 8) {
    exibirMensagemErro("mensagemValidacaoDataNascimento", "Informe uma data de nascimento válida.");
    dataNascimentoInput.focus(); // Coloca o foco de volta no campo Data de Nascimento
    return false;
  }

  const dia = parseInt(dataNascimentoValue.substring(0, 2));
  const mes = parseInt(dataNascimentoValue.substring(2, 4));
  const ano = parseInt(dataNascimentoValue.substring(4, 8));

  // Verifica se a data é válida
  if (
    isNaN(dia) || isNaN(mes) || isNaN(ano) ||
    dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900
  ) {
    exibirMensagemErro("mensagemValidacaoDataNascimento", "Informe uma data de nascimento válida.");
    dataNascimentoInput.focus(); // Coloca o foco de volta no campo Data de Nascimento
    return false;
  }

  ocultarMensagemErro("mensagemValidacaoDataNascimento");
  return true;
}

// Função para exibir mensagem de erro
function exibirMensagemErro(idElemento, mensagem) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = mensagem;
  elemento.style.display = "block";
}

// Função para ocultar mensagem de erro
function ocultarMensagemErro(idElemento) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = "";
  elemento.style.display = "none";
}

// Adicionar ouvinte de evento ao campo "Data de Nascimento" para formatação e validação
document.getElementById("dataNascimento").addEventListener("input", formatarDataNascimento);

// Função para formatar o campo "CPF"
function formatarCPF() {
  const cpfInput = document.getElementById("cpf");
  const cpfValue = cpfInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  // Formata o CPF conforme o usuário digita
  let cpfFormatado = "";

  for (let i = 0; i < cpfValue.length; i++) {
    if (i === 3 || i === 6) {
      cpfFormatado += `.${cpfValue[i]}`;
    } else if (i === 9) {
      cpfFormatado += `-${cpfValue[i]}`;
    } else {
      cpfFormatado += cpfValue[i];
    }
  }

  cpfInput.value = cpfFormatado;

  // Valida o CPF quando o usuário tenta avançar para o próximo campo
  cpfInput.addEventListener("blur", validarCPF);
}

// Função para validar o campo "CPF"
function validarCPF() {
  const cpfInput = document.getElementById("cpf");
  const cpfValue = cpfInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  // Verifica se o CPF possui 11 dígitos (formato completo)
  if (cpfValue.length !== 11) {
    exibirMensagemErro("mensagemValidacaoCPF", "Informe um CPF válido.");
    cpfInput.focus(); // Coloca o foco de volta no campo CPF
    return false;
  }

  // Validação do CPF
  if (!validarDigitoCPF(cpfValue)) {
    exibirMensagemErro("mensagemValidacaoCPF", "CPF inválido. Verifique os números e tente novamente.");
    cpfInput.focus(); // Coloca o foco de volta no campo CPF
    return false;
  }

  ocultarMensagemErro("mensagemValidacaoCPF");
  return true;
}

// Função para validar os dígitos verificadores do CPF
function validarDigitoCPF(cpf) {
  const cpfNumeros = cpf.substring(0, 9); // Obtém os 9 primeiros dígitos do CPF
  const cpfDigitos = cpf.substring(9, 11); // Obtém os 2 últimos dígitos verificadores do CPF

  let soma = 0;

  // Calcula o primeiro dígito verificador
  for (let i = 10; i > 1; i--) {
    soma += parseInt(cpfNumeros.charAt(10 - i)) * i;
  }

  let primeiroDigito = 11 - (soma % 11);
  if (primeiroDigito === 10 || primeiroDigito === 11) {
    primeiroDigito = 0;
  }

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 11; i > 1; i--) {
    soma += parseInt(cpfNumeros.charAt(11 - i)) * i;
  }

  let segundoDigito = 11 - (soma % 11);
  if (segundoDigito === 10 || segundoDigito === 11) {
    segundoDigito = 0;
  }

  // Verifica se os dígitos calculados são iguais aos informados pelo usuário
  return primeiroDigito === parseInt(cpfDigitos.charAt(0)) && segundoDigito === parseInt(cpfDigitos.charAt(1));
}

// Função para exibir mensagem de erro
function exibirMensagemErro(idElemento, mensagem) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = mensagem;
  elemento.style.display = "block";
}

// Função para ocultar mensagem de erro
function ocultarMensagemErro(idElemento) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = "";
  elemento.style.display = "none";
}

// Adicionar ouvinte de evento ao campo "CPF" para formatação e validação
document.getElementById("cpf").addEventListener("input", formatarCPF);

// Função para formatar o campo "CEP"
function formatarCEP() {
  const cepInput = document.getElementById("cep");
  const cepValue = cepInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  // Formata o CEP conforme o usuário digita
  let cepFormatado = "";

  for (let i = 0; i < cepValue.length; i++) {
    if (i === 2) {
      cepFormatado += `.${cepValue[i]}`;
    } else if (i === 5) {
      cepFormatado += `-${cepValue[i]}`;
    } else {
      cepFormatado += cepValue[i];
    }
  }

  cepInput.value = cepFormatado;

  // Valida o CEP quando o usuário tenta avançar para o próximo campo
  cepInput.addEventListener("blur", validarCEP);
}

// Função para validar o campo "CEP"
function validarCEP() {
  const cepInput = document.getElementById("cep");
  const cepValue = cepInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  // Verifica se o CEP possui 8 dígitos (formato completo)
  if (cepValue.length !== 8) {
    exibirMensagemErro("mensagemValidacaoCEP", "Informe um CEP válido.");
    cepInput.focus(); // Coloca o foco de volta no campo CEP
    return false;
  }

  ocultarMensagemErro("mensagemValidacaoCEP");
  return true;
}

// Função para exibir mensagem de erro
function exibirMensagemErro(idElemento, mensagem) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = mensagem;
  elemento.style.display = "block";
}

// Função para ocultar mensagem de erro
function ocultarMensagemErro(idElemento) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = "";
  elemento.style.display = "none";
}

// Adicionar ouvinte de evento ao campo "CEP" para formatação e validação
document.getElementById("cep").addEventListener("input", formatarCEP);

document.addEventListener("DOMContentLoaded", function () {
	const alturaInput = document.getElementById("altura");
	const alturaError = document.getElementById("mensagemValidacaoAltura");

	alturaInput.addEventListener("input", function () {
		const alturaValue = alturaInput.value.trim();
		if (alturaValue === "") {
			alturaError.textContent = "Altura é obrigatória.";
		} else {
			alturaError.textContent = ""; // Limpar mensagem de erro
		}
	});

	alturaInput.addEventListener("blur", function () {
		const alturaValue = alturaInput.value.trim();
		if (alturaValue !== "") {
			// Formatar a altura com a sigla "cm" no final
			const alturaFormatada = `${alturaValue.replace(".", ",")}cm`;
			alturaInput.value = alturaFormatada;
		}
	});
}); 