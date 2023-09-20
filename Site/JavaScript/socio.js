document.addEventListener("DOMContentLoaded", function() {
	// Seleciona todos os botões "SAIBA MAIS"
	const saibaMaisButtons = document.querySelectorAll(".saiba-mais-button");
	const fecharDescricaoButtons = document.querySelectorAll(".fechar-descricao-button");

	// Adiciona um evento de clique a cada botão "SAIBA MAIS"
	saibaMaisButtons.forEach(function(button, index) {
			button.addEventListener("click", function() {
					// Encontra o elemento de descrição do plano dentro do plano pai
					const descricaoPlano = this.parentElement.querySelector(".descricao-plano");
					
					// Mostra a descrição
					descricaoPlano.style.display = "block";
					
					// Mostra o botão "X" para fechar a descrição
					fecharDescricaoButtons[index].style.display = "block";
			});

			// Adiciona um evento de clique a cada botão "X"
			fecharDescricaoButtons[index].addEventListener("click", function() {
					// Encontra o elemento de descrição do plano dentro do plano pai
					const descricaoPlano = this.parentElement.querySelector(".descricao-plano");
					
					// Oculta a descrição quando o botão "X" é clicado
					descricaoPlano.style.display = "none";
					
					// Oculta o botão "X"
					this.style.display = "none";
			});
	});
});
