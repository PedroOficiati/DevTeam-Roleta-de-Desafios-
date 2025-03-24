const desafios = {
    "Físico": [
        "Fazer 10 polichinelos",
        "Pular corda por 30 segundos",
        "Ficar em prancha por 20 segundos",
        "Correr no lugar por 1 minuto",
        "Fazer 5 flexões",
        "Pular em um pé só por 30 segundos"
    ],
    "Engraçado": [
        "Contar uma piada sem rir",
        "Fazer uma careta",
        "Falar como um robô por 1 minuto",
        "Imitar um animal",
        "Fingir que está em câmera lenta",
        "Fazer uma dancinha engraçada"
    ],
    "Inteligente": [
        "Resolver um enigma",
        "Dizer o alfabeto de trás para frente",
        "Fazer uma conta de cabeça difícil",
        "Falar 5 capitais do mundo",
        "Criar uma rima com a palavra 'foco'",
        "Fazer um trava-língua 3 vezes seguidas"
    ]
};

const coresPorCategoria = {
    "Físico": "Vermelho / Amarelo",
    "Engraçado": "Azul / Roxo",
    "Inteligente": "Verde / Laranja"
};


document.getElementById("botaoCategoria").addEventListener("click", function () {
    let container = document.getElementById("categoriasContainer");
    container.innerHTML = "";
    container.style.display = "flex";

    Object.keys(desafios).forEach(categoria => {
        let botao = document.createElement("button");
        botao.innerText = categoria;
        botao.onclick = () => iniciarRoletaCategoria(categoria);
        container.appendChild(botao);
    });
});

function escolherDesafio(categoria) {
    let lista = desafios[categoria];
    return lista[Math.floor(Math.random() * lista.length)];
}

function iniciarRoletaCategoria(categoriaSelecionada) {
    girarRoleta(() => {
        const desafio = escolherDesafio(categoriaSelecionada);
        document.getElementById("resultado").innerText = `Categoria: ${categoriaSelecionada}\nCor: ${coresPorCategoria[categoriaSelecionada]}\nDesafio: ${desafio}`;
    });
}

function iniciarRoletaAleatoria() {
    girarRoleta((categoriaSorteada) => {
        const desafio = escolherDesafio(categoriaSorteada);
        document.getElementById("resultado").innerText = `Categoria: ${categoriaSorteada}\nCor: ${coresPorCategoria[categoriaSorteada]}\nDesafio: ${desafio}`;
    });
}

document.getElementById("botaoAleatorio").addEventListener("click", () => {
    iniciarRoletaAleatoria();
});

let anguloAtual = 0;

function girarRoleta(callback) {
    const roleta = document.getElementById("roleta");
    const novaRotacao = 3600 + Math.random() * 360;
    anguloAtual += novaRotacao;

    const anguloFinal = anguloAtual % 360;

    roleta.style.transition = "none";
    roleta.style.transform = `rotate(${anguloFinal}deg)`;

    setTimeout(() => {
        roleta.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
        roleta.style.transform = `rotate(${anguloAtual}deg)`;
    }, 50);

    setTimeout(() => {
        const categoria = categoriaPorAngulo(anguloFinal);
        if (callback) callback(categoria);
    }, 4500);
}

function categoriaPorAngulo(angulo) {
    angulo = angulo % 360;

    if (angulo >= 0 && angulo <= 60) return "Físico";     
    if (angulo > 60 && angulo <= 120) return "Engraçado";    
    if (angulo > 120 && angulo <= 180) return "Inteligente";     
    if (angulo > 180 && angulo <= 240) return "Físico";      
    if (angulo > 240 && angulo <= 300) return "Engraçado";   
    if (angulo > 300 && angulo < 360) return "Inteligente";    

    return "Físico";
}
