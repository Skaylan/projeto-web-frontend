<head>
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

</head>
<body>
	<h1>Filmes</h1>
	<div class="conteudo">
		<div class="conteudo__imagem">
			<img src="https://placehold.jp/500x700.png" alt="Imagem" />
			<div class="conteudo__imagem__adicional">
				<div class="conteudo__imagem__adicional__texto">
					<h1 class="titulo__imagem">Titulo</h1>
					<p class="texto__imagem">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat vero, debitis nam
						consequatur ea aperiam dolore id voluptatem soluta cumque in mollitia? Soluta cupiditate
						veritatis sequi illum error sit suscipit.
					</p>
				</div>

				<div class="conteudo__imagem__adicional__avaliacao">
					<span class="conteudo__imagem__avaliacao__imagem"><img src="src\imagens\icons8-stars-96.png" alt=""></span>
					<span class="conteudo__imagem__avaliacao__nota">8.5</span>
				</div>
			</div>
		</div>
		<div class="conteudo__imagem">
			<img src="https://placehold.jp/500x700.png" alt="Imagem" />
			<div class="conteudo__imagem__adicional">
				<div class="conteudo__imagem__adicional__texto">
					<h1 class="titulo__imagem">Titulo</h1>
					<p class="texto__imagem">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat vero, debitis nam
						consequatur ea aperiam dolore id voluptatem soluta cumque in mollitia? Soluta cupiditate
						veritatis sequi illum error sit suscipit.
					</p>
				</div>

				<div class="conteudo__imagem__adicional__avaliacao">
					<span class="conteudo__imagem__avaliacao__imagem"><img src="src\imagens\icons8-stars-96.png" alt=""></span>
					<span class="conteudo__imagem__avaliacao__nota">8.5</span>
				</div>
			</div>
		</div>
		<div class="conteudo__imagem">
			<img src="https://placehold.jp/500x700.png" alt="Imagem" />
			<div class="conteudo__imagem__adicional">
				<div class="conteudo__imagem__adicional__texto">
					<h1 class="titulo__imagem">Titulo</h1>
					<p class="texto__imagem">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat vero, debitis nam
						consequatur ea aperiam dolore id voluptatem soluta cumque in mollitia? Soluta cupiditate
						veritatis sequi illum error sit suscipit.
					</p>
				</div>

				<div class="conteudo__imagem__adicional__avaliacao">
					<span class="conteudo__imagem__avaliacao__imagem"><img src="src\imagens\icons8-stars-96.png" alt=""></span>
					<span class="conteudo__imagem__avaliacao__nota">8.5</span>
				</div>
			</div>
		</div>
		<div class="conteudo__imagem">
			<img src="src\imagens\Divertidamente.jpg" alt="Imagem" />
			<div class="conteudo__imagem__adicional">
				<div class="conteudo__imagem__adicional__texto">
					<h1 class="titulo__imagem">Titulo</h1>
					<p class="texto__imagem">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat vero, debitis nam
						consequatur ea aperiam dolore id voluptatem soluta cumque in mollitia? Soluta cupiditate
						veritatis sequi illum error sit suscipit.
					</p>
				</div>

				<div class="conteudo__imagem__adicional__avaliacao">
					<span class="conteudo__imagem__avaliacao__imagem"><img src="src\imagens\icons8-stars-96.png" alt=""></span>
					<span class="conteudo__imagem__avaliacao__nota">8.5</span>
				</div>
			</div>
		</div>
		<div class="conteudo__imagem">
			<img src="https://placehold.jp/500x700.png" alt="Imagem" />
			<div class="conteudo__imagem__adicional">
				<div class="conteudo__imagem__adicional__texto">
					<h1 class="titulo__imagem">Titulo</h1>
					<p class="texto__imagem">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat vero, debitis nam
						consequatur ea aperiam dolore id voluptatem soluta cumque in mollitia? Soluta cupiditate
						veritatis sequi illum error sit suscipit.
					</p>
				</div>

				<div class="conteudo__imagem__adicional__avaliacao">
					<span class="conteudo__imagem__avaliacao__imagem"><img src="src\imagens\icons8-stars-96.png" alt=""></span>
					<span class="conteudo__imagem__avaliacao__nota">8.5</span>
				</div>
			</div>
		</div>
		<div class="conteudo__imagem">
			<img src="src\imagens\FromUpOnPoppyHill.jpg" alt="Imagem" />
			<div class="conteudo__imagem__adicional">
				<div class="conteudo__imagem__adicional__texto">
					<h1 class="titulo__imagem">Titulo</h1>
					<p class="texto__imagem">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat vero, debitis nam
						consequatur ea aperiam dolore id voluptatem soluta cumque in mollitia? Soluta cupiditate
						veritatis sequi illum error sit suscipit.
					</p>
				</div>

				<div class="conteudo__imagem__adicional__avaliacao">
					<span class="conteudo__imagem__avaliacao__imagem"><img src="src\imagens\icons8-stars-96.png" alt=""></span>
					<span class="conteudo__imagem__avaliacao__nota">8.5</span>
				</div>
			</div>
		</div>
		
	</div>
</body>

<style>
	*{
	margin: 0;
	padding: 0;
}

.conteudo{
	background-color: white;

	padding: 15px;
	display: grid;
	grid-template-columns: auto auto auto;
	margin-top: 100px;
	padding-bottom: 50%;
	height: 500px;
	justify-self: center;
	justify-content: center;
	position: relative;
	
}

img{
	height: auto;
	width: 100%;
	cursor: pointer;
	

}

.conteudo__imagem{
	border: 5px solid rgb(255, 255, 255);
	height: 700px;
	width: 500px;
	position: relative;
	display: flex;

}

.conteudo__imagem:hover {
    transform: translateY(-10px); /* Ascend on hover */
}



.conteudo__imagem__adicional{
	position: absolute;
	color: white;
	top: 65%;
	left: 50%;
	background-color: rgba(0, 0, 0, 0.8);
	transform: translateX(-50%);
	bottom: 0;
	width: 100%;
	margin-right: 10%;
	word-wrap: break-word;
	box-sizing: border-box;
	visibility: hidden; 
	display: flex;
	vertical-align: middle;
	justify-content: space-between;
	transition: ease-in-out 0.1s;
	
}

.conteudo__imagem:hover .conteudo__imagem__adicional{
	visibility: visible;
	
}


.conteudo__imagem__adicional__texto{
	width: 70%;
	margin-top: 5%;
}

.titulo__imagem{
	font-family: Arial, Helvetica, sans-serif;
	margin-left: 5%;
	padding-bottom: 5%;
}

.texto__imagem{
	font-family: Arial, Helvetica, sans-serif;
	margin-left: 5%;
}

.conteudo__imagem__adicional__avaliacao{
	vertical-align: middle;
	display: flex;
	flex-direction: column;
	margin-top: 10%;
	margin-right: 5%;

}
.conteudo__imagem__avaliacao__imagem{
	align-self: center;
	height: 10vh;
	width: auto;
}
.conteudo__imagem__avaliacao__nota{
	font-size: 20px;
    font-weight: 700;
	align-self: center;
	padding-bottom: 0;
}

.conteudo__imagem .titulo__imagem{
	font-size: 2em;
}

.conteudo__imagem .texto__imagem{
	font-size: 1em;
}

@media screen and (max-width: 768px) {
    .conteudo {
        grid-template-columns: 1fr;
        margin-top: 30px; 
    }

    .conteudo__imagem {
        width: 95vw; 
    }

	.conteudo__imagem__adicional{
		width: 100%;
	}
}
@media screen and (min-width:769px) and (max-width:1279px){
	.conteudo__imagem{
		width: 32vw;
		height: 40vh;
	}

	.conteudo__imagem__adicional{
		top: 55%;
	}

	.conteudo__imagem .texto__imagem{
		
	}
	.conteudo__imagem__avaliacao__imagem{
		width: 6vw;
		height: 6vh;
	}
}

@media screen and (min-width:1280px) and (max-width:1980px){
	
	.conteudo__imagem{
		width: 25vw;
	}
	
	
} 
</style>