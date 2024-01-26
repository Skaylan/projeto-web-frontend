       // Caminhos das imagens
       let imagens_carrossel = [
        'src/lib/Imagens/img1.jpg',
        'src/lib/Imagens/img2.jpg',
        'src/lib/Imagens/img3.jpg',
        'src/lib/Imagens/img4.jpg',
        'src/lib/Imagens/img5.jpg',
        'src/lib/Imagens/img6.jpg',
        'src/lib/Imagens/img7.jpg',
        'src/lib/Imagens/img8.jpg',
        'src/lib/Imagens/img9.jpg',
        'src/lib/Imagens/img10.jpg',
        'src/lib/Imagens/img11.jpg',
        'src/lib/Imagens/img12.jpg',
        'src/lib/Imagens/img13.jpg'
    ];

    // Criar dinamicamente as divs com as imagens
    let carrosselDiv = document.getElementById('carrossel');

    imagens_carrossel.forEach((imagemPath) => {
        let div = document.createElement('div');
        div.style.backgroundImage = `url('${imagemPath}')`;
        div.style.backgroundSize = '100% 100%';
        carrosselDiv.appendChild(div);
    });


    // Pegando elementos html
    var carrossel = document.getElementById('carrossel');
    var bloco = document.getElementById('carrossel');
    
    // Variáveis de controle de posição,mouse e rolagem
    var scrollLeft, eixoX, mouseClick = false;
    var animationFrame;

    // Evento para retornam a função rolagem quando clicar e segurar
    bloco.addEventListener('mousedown', function (e) {
        event.preventDefault();

        mouseClick = true;
        if(mouseClick){
            scrollLeft = carrossel.scrollLeft; // Armazena a posição atual da rolagem
            eixoX = e.clientX; // Armazena a posição inicial do mouse
            rolagem();
        }

    });
     // Evento de movimento do mouse para ajustar a posição da rolagem
    bloco.addEventListener('mousemove', function (e) {
        event.preventDefault();

        if (mouseClick == true){
            var arrasto = e.clientX - eixoX;// Calcula o movimento no eixo X do mouse
            carrossel.scrollLeft = scrollLeft - arrasto;
        }

    });

    // Função de rolagem contínua enquanto o botão do mouse estiver pressionado
    function rolagem() {
        if (mouseClick == true){
            animationFrame = requestAnimationFrame(rolagem);
        }
            
    }
    // Liberar o mouse quando soltar o click
    document.addEventListener('mouseup', function () {
        event.preventDefault();
        mouseClick = false;
        cancelAnimationFrame(animationFrame);
    });