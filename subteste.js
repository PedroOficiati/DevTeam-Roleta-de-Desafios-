const desafios = {
    "Físico": ["Fazer 10 polichinelos", "Pular corda por 30 segundos"],
    "Engraçado": ["Contar uma piada sem rir", "Fazer uma careta"],
    "Inteligente": ["Resolver um enigma", "Dizer o alfabeto de trás para frente"]
};

document.getElementById("botaoCategoria").addEventListener("click", function () {
    let container = document.getElementById("categoriasContainer");
    container.innerHTML = "";
    container.style.display = "flex";

    Object.keys(desafios).forEach(categoria => {
        let botao = document.createElement("button");
        botao.innerText = categoria;
        botao.onclick = () => iniciarRoleta(categoria);
        container.appendChild(botao);
    });
});

function escolherDesafio(categoria) {
    let lista = desafios[categoria];
    return lista[Math.floor(Math.random() * lista.length)];
}

function iniciarRoleta(categoriaSelecionada) {
    girarRoleta(() => {
        let desafio = escolherDesafio(categoriaSelecionada);
        alert(`Seu desafio é: ${desafio}`);
    });
}

function girarRoleta(callback) {
    const roleta = document.getElementById("roleta");
    const graus = 3600 + Math.random() * 360;

    roleta.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
    roleta.style.transform = `rotate(${graus}deg)`;

    setTimeout(callback, 4500);
}

document.getElementById("botaoAleatorio").addEventListener("click", () => {
    let todasCategorias = Object.keys(desafios);
    let categoriaAleatoria = todasCategorias[Math.floor(Math.random() * todasCategorias.length)];
    iniciarRoleta(categoriaAleatoria);
});

let anguloAtual = 0; 

function girarRoleta(callback) {
    const roleta = document.getElementById("roleta");
    const novaRotacao = 3600 + Math.random() * 360;

    anguloAtual += novaRotacao; 

    roleta.style.transition = "none"; 
    roleta.style.transform = `rotate(${anguloAtual % 360}deg)`; 
    setTimeout(() => {
        roleta.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
        roleta.style.transform = `rotate(${anguloAtual}deg)`;
    }, 50);

    setTimeout(callback, 4500);
}
