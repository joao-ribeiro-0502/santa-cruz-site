// Obtém a lista de elementos de patrocinador
const patrocinadores = document.querySelectorAll('.patrocinador');

// Obtém o número total de patrocinadores
const numPatrocinadores = patrocinadores.length;

// Define um intervalo para avançar automaticamente o carrossel
const intervalo = 5000; // 5 segundos

let indiceAtual = 0;

// Função para avançar o carrossel
function avancarCarrossel() {
  patrocinadores[indiceAtual].classList.remove('ativo');
  indiceAtual = (indiceAtual + 1) % numPatrocinadores;
  patrocinadores[indiceAtual].classList.add('ativo');
}

// Define o intervalo para avançar automaticamente
setInterval(avancarCarrossel, intervalo);

// Define a classe 'ativo' para o primeiro patrocinador
patrocinadores[indiceAtual].classList.add('ativo');