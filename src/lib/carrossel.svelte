<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <title>componente</title>

    
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
        height: 355px;
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
        box-shadow: 0 0 10px rgba(0, 0, 0, 1); /* Adiciona uma sombra ao passar o mouse */
    }
    </style>
    
    
</head>
<body>
    <div class="carrossel">
        <div class="bloco" id="carrossel">
        </div>
    </div>

    <script>
        // URL base para as imagens de placeholder
        let placeholderURL = 'https://placehold.co/';

        // Tamanho e formato desejado das imagens
        let dimensões = '160x300';
        let tipoImagen = 'jpg';

        // Número total de imagens no carrossel
        let quantImagens = 10;

        // Criar dinamicamente as divs com as imagens de placeholder
        let carrosselDiv = document.getElementById('carrossel');

        for (let i = 0; i <= quantImagens; i++) {
            let div = document.createElement('div');

            let placeholder = `${
                placeholderURL}${dimensões}/${tipoImagen}?text=Image${i}`;
            
                div.style.backgroundImage = `url('${placeholder}')`;
            
                div.style.backgroundSize = '100% 100%';
            
                carrosselDiv.appendChild(div);
        }

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

    </script>
    
</body>
</html>
