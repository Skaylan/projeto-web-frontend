<script>
    import Carrossel from "../lib/carrossel.svelte";
    import Footer from '../lib/Footer.svelte'
	import star from '../lib/assets/star.svg'
	import Header from '../lib/Header.svelte'

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

</script>


<Carrossel />

<h1>Bem-vindos ao projeto web</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Header/>

<section class="movies-section">
	<div class="w-[100%] flex flex-wrap items-center justify-center gap-4">
		{#each movies as movie}
			<a href="#">
				<div class="rounded-lg relative group cursor-pointer text-white text-justify leading-5">
					<img class="rounded-lg w-[400px] h-[500px]" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg" alt="Imagem" />
					<div class="flex w-[400px] h-[200px] absolute top-[300px] p-2 opacity-0 group-hover:opacity-100 transition bg-[#000000b0] rounded-b-lg ">
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
	</div>
</section>

<Footer/>

