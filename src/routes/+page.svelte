<script>
	import Footer from '../lib/Footer.svelte'
	import star from '../lib/assets/star.svg'
	import Header from '../lib/Header.svelte'
	import HeaderSecundario from '../lib/headerSecundario.svelte'
    import { Hamburger } from 'svelte-hamburgers';
	import { slide } from 'svelte/transition'
	import { quintOut } from 'svelte/easing';
	import { ChevronLeft, ChevronRight, Search, Dot } from 'lucide-svelte';
	import Logo from '../lib/assets/Logo.png'

	let open;
	let innerHeight = 0
	let innerWidth = 0


	export let movies = [
		{
			"title": "placeholder Title",
			"description": "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis.",
			"rating": 9.5,

		},
		{
			"title": "placeholder Title",
			"description": "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.",
			"rating": 9.5,
			
		},
		{
			"title": "placeholder Title",
			"description": "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.",
			"rating": 9.5,
			
		},
		{
			"title": "placeholder Title",
			"description": "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.",
			"rating": 9.5,
			
		},
		{
			"title": "placeholder Title",
			"description": "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.",
			"rating": 9.5,
			
		},
		{
			"title": "placeholder Title",
			"description": "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.",
			"rating": 9.5,
			
		}
	]
		
	const carouselPhotos = [
		'https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg',
		'https://image.tmdb.org/t/p/original/6a1qZ1qat26mAIK3Lq8iYdGpyHm.jpg',
		'https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg'
	]
	
	let index = 0
	
	const next = () => {
		if (index >= 2) {
			index = 0
		} else {
			index++
		}
	}

	const back = () => {
		if (index <= 0) {
			index = 2
		} else {
			index--
		}
	}

	const interval = 10 * 1000 //10 segundos
	setInterval(next, interval)
</script>


<svelte:window bind:innerWidth bind:innerHeight />

<section class="w-[100%] h-[auto] relative">
	<div class="w-[100%] relative">
		<div class="flex sm:hidden bg-[#75C9C8]">
			<div class="pl-4 flex items-center w-[70%]">
				<a href="/">
					<img class="w-[80%]" src="{Logo}" alt="header logo">
				</a>
			</div>
			{#if open}
			<!-- show menu -->
			<div class="absolute flex flex-col bg-white w-[200px] h-[300px] top-[3.5rem] right-[1rem] z-10">
				<ul>
					<li class="flex flex-col">
						<a href="#/">Inicio</a>
						<a href="#/">Sobre</a>
						<a href="#/">Api</a>
						<a href="#/">Login</a>
						<a href="#/">Cadastro</a>
					</li>
				</ul>
			</div>
			{/if}
			<div class="w-[30%] pr-4 flex justify-end">
				<Hamburger bind:open />
			</div>
		</div>
		<div class="hidden relative sm:flex">
			<Header style={'hidden sm:flex absolute z-10'} />
			{#each [carouselPhotos[index]] as src (index)}
				<img class="w-[100%] sm:h-[400px] md:h-[400px] lg:h-[700px]" transition:slide={{duration: 400, axis: 'x', easing: quintOut}} {src} alt="" />	
			{/each}
		</div>
		<button class="hidden sm:flex items-center justify-center w-[100px] h-[40px] absolute z-10 left-[3rem] top-[20rem] md:top-[12rem] lg:top-[20rem]" on:click={back}>
			<ChevronLeft size={50} color='#f8f7f5' />
		</button>
		<button class="hidden sm:flex items-center justify-center w-[100px] h-[40px] absolute z-10 left-[38rem] top-[20rem] md:top-[12rem] lg:left-[75rem] lg:top-[20rem]" on:click={next}>
			<ChevronRight size={50} color='#f8f7f5' />
		</button>
		
	</div>
	<div class="hidden sm:flex w-[100%] h-[400px] bg-[#00000096] absolute top-0 z-9 md:h-[400px] lg:h-[700px]"></div>
</section>

<section class="w-[100%] flex items-center justify-center gap-2 sm:absolute top-[12rem] lg:top-[20rem]">
	<input class="text-lg p-4 w-80 h-12 rounded-xl bg-[#edecec]" type="search" name="demo" placeholder="Buscar..." />
	<button class="sm:text-[#e3e3e3]">
		<Search size=32 />
	</button>
</section>
<div class="hidden sm:flex w-[100px] gap-2 absolute top-[35rem] left-[50%] translate-x-[-50%]">
	<button on:click={() => index = 0} class="rounded-[100%] w-[18px] h-[18px] bg-gray-300"></button>
	<button on:click={() => index = 1} class="rounded-[100%] w-[18px] h-[18px] bg-gray-300"></button>
	<button on:click={() => index = 2} class="rounded-[100%] w-[18px] h-[18px] bg-gray-300"></button>
</div>


<div class="titulo flex items-center gap-1 sm:pl-14 p-4 text-5xl">
	<div class="w-[5px] h-[30px] bg-red-600"></div>
	<h1>Aclamados pela critica</h1>
</div>

<section class="pb-16">
	<div class="w-[100%] flex flex-wrap items-center justify-center gap-2 sm:gap-4">
		{#if innerWidth >= 430}
			{#each movies as movie}
				<a href="#/">
					<div class="w-[100%] rounded-lg relative group cursor-pointer text-white text-justify leading-5">
						<img class="rounded-lg w-[400px] h-[500px] md:w-[350px] h-[450px]" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg" alt="Imagem" />
						<div class="flex w-[400px] h-[200px] absolute top-[300px] p-2 opacity-0 group-hover:opacity-100 transition bg-[#000000b0] rounded-b-lg md:w-[100%] top-[250px]">
							<div class="flex flex-col">
								<div class="w-[100%] flex pb-2">
									<h1 class="text-2xl">{movie.title}</h1>
								</div>
								{#if movie.description.length >= 185}
									<p class="">{`${movie.description.substring(0, 185)}`} <span class="underline">...ver mais</span></p>
								{:else}
									<p class="">{movie.description}</p>
								{/if}
							</div>
							<div class="w-[100%] h-[100%] flex flex-col justify-center items-center relative">
								<span class="absolute top-[1.5rem] text-2xl font-bold">8.5</span>
								<div class="flex items-center justify-center relative">
									<img src="{star}" alt="star-icon">
									<img class="absolute top-[-1.25rem]" src="{star}" alt="star-icon">
									<img src="{star}" alt="star-icon">
								</div>
							</div>
						</div>
					</div>
				</a>
			{/each}
		{:else}
			{#each movies.slice(0, 4) as movie}
				<a href="#/">
					<div class="w-[100%] rounded-lg relative text-white text-justify leading-5">
						<img class="rounded-lg w-[180px] h-[250px]" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg" alt="Imagem" />
						<div class="flex flex-col w-[180px] h-[100px] absolute top-[150px] p-2 bg-[#000000b0] rounded-b-lg ">
							<div class="flex flex-col">
								<div class="w-[100%] flex justify-center pb-2">
									<h1 class="text-xl">{movie.title}</h1>
								</div>
							</div>
							<div class="w-[100%] h-[100%] justify-center items-center relative">
								<span class="left-6 absolute text-2xl font-bold">8.5</span>
								<div class="flex items-center justify-center relative left-8 top-2">
									<img src="{star}" alt="star-icon">
									<img class="absolute top-[-1.25rem]" src="{star}" alt="star-icon">
									<img src="{star}" alt="star-icon">
								</div>
							</div>
						</div>
					</div>
				</a>
			{/each}
		{/if}
	</div>
</section>

<Footer/>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Road+Rage&family=Roboto&display=swap');

	.titulo {
		font-family: 'Road Rage', sans-serif;
	}

</style>