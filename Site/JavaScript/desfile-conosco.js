// Adicionando event listeners para detectar alterações nos radio buttons
document.getElementById('socio-sim').addEventListener('change', function() {
  exibirInscricao();
});

document.getElementById('socio-nao').addEventListener('change', function() {
  ocultarInscricao();
});

function exibirInscricao() {
  // Obter o elemento da label dinâmica
  var inscricaoLabel = document.getElementById('inscricaoLabel');

  // Exibir a label dinâmica
  inscricaoLabel.style.display = 'block';
}

function ocultarInscricao() {
  // Obter o elemento da label dinâmica
  var inscricaoLabel = document.getElementById('inscricaoLabel');

  // Ocultar a label dinâmica
  inscricaoLabel.style.display = 'none';
}