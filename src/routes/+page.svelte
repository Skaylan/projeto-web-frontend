<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <title>Document</title>

    
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }
    .carrossel {
        justify-content: center;
        align-items: center;
        display: flex;
        margin: 5px;
        overflow: hidden;
        position: relative;
        height:440px;
        }
    .bloco {
        align-items: center;
        display: flex;
        scroll-snap-type: x mandatory;
        width: 100%;
        height: 350px;
        overflow: hidden;
        position: relative;
    }
    
    .bloco div {
        flex: 0 0 auto;
        display: flex;
        width: 150px;
        height: 300px;
        margin: 10px;
        cursor: pointer;
        border-radius: 5px;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
    .bloco div:hover{
        transform: scale(1.15); /* Aumenta o tamanho ao passar o mouse */
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Adiciona uma sombra ao passar o mouse */
    }
    #carrossel div:nth-child(1) {
        background-image: url('img1.jpg');
        background-size: 100% 100%;
    }

    #carrossel div:nth-child(2) {
        background-image: url('img2.jpg');
        background-size: 100% 100%;
    }

    #carrossel div:nth-child(3) {
        background-image: url('img3.jpg');
        background-size: 100% 100%;
    }

    #carrossel div:nth-child(4) {
        background-image: url('img4.jpg');
        background-size: 100% 100%;
    }

    #carrossel div:nth-child(5) {
        background-image: url('img5.jpg');
        background-size: 100% 100%;
    }

    #carrossel div:nth-child(6) {
        background-image: url('img6.jpg');
        background-size: 100% 100%;
    }

    #carrossel div:nth-child(7) {
        background-image: url('img7.jpg');
        background-size: 100% 100%;
    }

    #carrossel div:nth-child(8) {
        background-image: url('img8.jpg');
        background-size: 100% 100%;
    }
    #carrossel div:nth-child(9) {
        background-image: url('img9.jpg');
        background-size: 100% 100%;
    }

    #carrossel div:nth-child(10) {
        background-image: url('img10.jpg');
        background-size: 100% 100%;
    }

    #carrossel div:nth-child(11) {
        background-image: url('img11.jpg');
        background-size: 100% 100%;
    }

    #carrossel div:nth-child(12) {
        background-image: url('img12.jpg');
        background-size: 100% 100%;
    }
    #carrossel div:nth-child(13) {
        background-image: url('img13.jpg');
        background-size: 100% 100%;
    }
    </style>
    
    
</head>
<body>
    <div class="carrossel">
        <div class="bloco" id="carrossel">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
  
        </div>
    </div>
    <script>
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

    </script>
</body>
</html>
