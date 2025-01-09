<script>
	import Carrossel from '../lib/carrossel.svelte';
	import Footer from '../lib/Footer.svelte';
	import star from '../lib/assets/star.svg';
	import Header from '../lib/Header.svelte';
	import HeaderSecundario from '../lib/headerSecundario.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import { fly, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { ChevronLeft, ChevronRight, Search, Dot } from 'lucide-svelte';
	import Logo from '../lib/assets/Logo.png';
	import AnimatedBanner from '../lib/AnimatedBanner.svelte';
	import MovieCard from '../lib/MovieCard.svelte';

	let open;
	let innerHeight = 0;
	let innerWidth = 0;

	let divWidth = 0;

	export let movies = [
		{
			title: 'placeholder Title',
			description:
				'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.',
			rating: 9.5,
			release_date: '2022-02-02'
		},
		{
			title: 'placeholder Title',
			description:
				'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.',
			rating: 9.5,
			release_date: '2022-02-02'
		},
		{
			title: 'placeholder Title',
			description:
				'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.',
			rating: 9.5,
			release_date: '2022-02-02'
		},
		{
			title: 'placeholder Title',
			description:
				'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.',
			rating: 9.5,
			release_date: '2022-02-02'
		},
		{
			title: 'placeholder Title',
			description:
				'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.',
			rating: 9.5,
			release_date: '2022-02-02'
		},
		{
			title: 'placeholder Title',
			description:
				'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.',
			rating: 9.5,
			release_date: '2022-02-02'
		},
	];

	const carouselPhotos = [
		'https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg',
		'https://image.tmdb.org/t/p/original/6a1qZ1qat26mAIK3Lq8iYdGpyHm.jpg',
		'https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg'
	];

	let index = 0;

	const next = () => {
		if (index >= 2) {
			index = 0;
		} else {
			index++;
		}
	};

	const back = () => {
		if (index <= 0) {
			index = 2;
		} else {
			index--;
		}
	};

	const interval = 10 * 1000; //10 segundos
	setInterval(next, interval);
</script>

<!-- <Header/> -->

<svelte:window bind:innerWidth bind:innerHeight />

<section class="w-full h-[auto] relative">
	{#if innerWidth > 640}
		<AnimatedBanner />
	{:else}
		<div class="w-full relative">
			<div class="flex sm:hidden bg-[#75C9C8]">
				<div class="pl-4 flex items-center w-[70%]">
					<a href="/">
						<img class="w-[80%]" src={Logo} alt="header logo" />
					</a>
				</div>
				{#if open}
					<!-- show menu -->
					<div
						class="absolute flex flex-col bg-white w-[200px] h-[300px] top-[3.5rem] right-[1rem] z-10"
					>
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
					<img
						class="w-full sm:h-[400px] md:h-[400px] lg:h-[700px]"
						transition:slide={{ duration: 400, axis: 'x', easing: quintOut }}
						{src}
						alt=""
					/>
				{/each}
			</div>
			<button
				class="hidden sm:flex items-center justify-center w-[100px] h-[40px] absolute z-10 left-[3rem] top-[20rem] md:top-[12rem] lg:top-[20rem]"
				on:click={back}
			>
				<ChevronLeft size={50} color="#f8f7f5" />
			</button>
			<button
				class="hidden sm:flex items-center justify-center w-[100px] h-[40px] absolute z-10 left-[38rem] top-[20rem] md:top-[12rem] lg:left-[75rem] lg:top-[20rem]"
				on:click={next}
			>
				<ChevronRight size={50} color="#f8f7f5" />
			</button>
		</div>
	{/if}
</section>

{#if innerWidth <= 640}
	<section class="w-full h-24 flex items-center justify-center">
		<div class="relative flex items-center justify-center">
			<input
				class="w-[276px] h-12 flex pl-4 text-lg rounded-lg bg-[#EDECEC]"
				type="text"
				name=""
				id=""
				placeholder="Buscar..."
			/>
			<button
				class="absolute inset-y-[6px] right-4 flex items-center justify-center pl-3"
				on:click={() => {
					console.log('busca');
				}}
			>
				<Search size={25} />
			</button>
		</div>
	</section>
{/if}

<section bind:clientWidth={divWidth} class="w-full">
	<div class="flex items-center text-4xl p-4 gap-1 titulo sm:pl-14 sm:text-5xl">
		<div class="w-[5px] h-[30px] bg-red-600"></div>
		<h1>Filmes Amados Pelo Público</h1>
	</div>
	<Carrossel movies={movies} />
</section>


<section class="w-full flex flex-wrap gap-2 sm:gap-4 pb-8">
	<div class="titulo flex items-center gap-1 text-4xl sm:pl-14 p-4 sm:text-5xl">
		<div class="w-[5px] h-[30px] bg-red-600"></div>
		<h1>Aclamados pela critica</h1>
	</div>
	<!-- <div class="w-full flex flex-wrap align-center items-center justify-around gap-4">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div> -->
	<div class="w-full flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:items-center">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</section>

<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Road+Rage&family=Roboto&display=swap');

	.titulo {
		font-family: 'Road Rage', sans-serif;
	}
</style>
