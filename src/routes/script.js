var carrossel = document.getElementById('carrossel');
var scrollLeft, eixoX,tempoParado = 0,limiteTempoParado = 1000;
var animationFrame;

// Evento que pega posição do  mouse no carrossel e retorno da função animção
carrossel.addEventListener('mouseover', function (e) {
    scrollLeft = carrossel.scrollLeft;                  // Posição do elemento carrossel na horizontal
    rolagem();                                          // Retorno da função
});

//Posição do cursor no elemento carrossel
carrossel.addEventListener('mousemove', function (e) {
    eixoX = e.clientX;
});

//Função de rolagem do carrossel
function rolagem() {
    var posicaoCursorCarrossel = eixoX;
    var larguraCarrossel = carrossel.offsetWidth; 
    var limite = 50; // Define a distância do canto 
    var distanciaCursorBloco =  larguraCarrossel - limite;

    //Lógica para mover para esquerda ou direita
    if (posicaoCursorCarrossel < limite || posicaoCursorCarrossel > distanciaCursorBloco) {
        if (posicaoCursorCarrossel < limite) {
            carrossel.scrollLeft += -(larguraCarrossel / 345); // Ajuste a "velocidade" aqui para a esquerda
        } else {
            carrossel.scrollLeft += (larguraCarrossel / 345); // Ajuste a "velocidade" aqui para a direita
        }
    }
    
    //Lógica para parar a animação
    if (tempoParado < limiteTempoParado) {
        // Continua a animação apenas se o mouse estiver parado por tempo suficiente
        animationFrame = requestAnimationFrame(rolagem); 
    }
}
// Evento para parar animação quando o mouse estiver fora do carrossel
carrossel.addEventListener('mouseout', function () {
    cancelAnimationFrame(animationFrame);
});
