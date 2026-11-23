
const imagens = document.querySelectorAll(".project-images img");

imagens.forEach((imagem) => {

    imagem.addEventListener("click", () => {

        const janela = document.createElement("div");

        janela.classList.add("image-modal");

        janela.innerHTML = `
            <img src="${imagem.src}" alt="${imagem.alt}">
            <span class="close-modal">&times;</span>
        `;

        document.body.appendChild(janela);

        janela.addEventListener("click", () => {
            janela.remove();
        });

    });

});