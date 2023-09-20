
// Função para mostrar/ocultar o botão de acordo com a posição de rolagem
function toggleBackToTopButton() {
  const btnTop = document.getElementById('btnTop');
  if (window.scrollY > 100) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
}

// Adicione um ouvinte de evento para verificar a posição de rolagem quando a página é rolada
window.addEventListener('scroll', toggleBackToTopButton);

// Função para rolar suavemente de volta para o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Adicione um ouvinte de evento para o botão de "Voltar para o Topo"
const btnTop = document.getElementById('btnTop');
btnTop.addEventListener('click', scrollToTop);
