<script>
	import { ChevronLeft, ChevronRight, Search, Dot } from 'lucide-svelte';
	import Header from './Header.svelte';
	import { onMount } from 'svelte';
	import BannerMovieCard from './BannerMovieCard.svelte';
	let currentIndex = 0;

	let innerWidth = 0;
	let innerHeight = 0;

	const images = [
		'https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg',
		'https://image.tmdb.org/t/p/original/6a1qZ1qat26mAIK3Lq8iYdGpyHm.jpg',
		'https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg'
	];
	let interval;

	// Função para trocar imagens automaticamente
	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % images.length;
	};

	// Trocar imagem ao clicar
	const goToSlide = (index) => {
		currentIndex = index;
		resetTimer();
	};

	// Resetar timer quando o usuário interage
	const resetTimer = () => {
		clearInterval(interval);
		interval = setInterval(nextSlide, 5000);
	};

	// Configurar intervalo
	onMount(() => {
		interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval); // Cleanup
	});


	let newList = [1,2,3,4, 5]
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="relative w-full overflow-hidden">
	<!-- Slides -->
	<div class="absolute w-full z-10">
		<div class={`hidden sm:flex w-[100%] h-[100vh] bg-gradient-to-b from-[#00000096] to-[#000000ec] absolute top-0`}></div>
		<Header style={'hidden sm:flex absolute z-10'} />
	</div>
	<div
		class="flex transition-transform duration-500"
		style="transform: translateX({-currentIndex * 100}%)"
	>
		{#each images as image}
			<div class="w-full flex-shrink-0">
				<img src={image} alt="banner_slide_image" class="w-full h-[100vh] object-cover" />
			</div>
		{/each}
	</div>

	<!-- Setas -->
	<button
		class="absolute top-1/4 transform -translate-y-1/2 left-20 z-40"
		on:click={() => goToSlide((currentIndex - 1 + images.length) % images.length)}
	>
		<ChevronLeft size={50} color="#f8f7f5" />
	</button>

	<div class="absolute top-1/4 transform -translate-y-1/2 z-20 w-[100%] flex gap-4 items-center justify-center">
		<input
			class="text-xl p-4 w-1/2 max-w-[600px] h-12 rounded-lg"
			type="search"
			name="demo"
			placeholder="Buscar um filme"
		/>
		<button class="sm:text-[#e3e3e3]">
			<Search size="32" />
		</button>
	</div>
	<button
		class="absolute top-1/4 transform -translate-y-1/2 right-20 z-20"
		on:click={() => goToSlide((currentIndex + 1) % images.length)}
	>
		<ChevronRight size={50} color="#f8f7f5" />
	</button>

	
	<div class={`absolute top-[60%] transform -translate-y-1/2 z-20 w-[100%] flex flex-col gap-4 justify-center ${innerHeight >= 1366 ? 'top-[50%]' : ''}`}>
		<div class="w-full flex p-8 items-center justify-center text-white text-xl">
			<p>
				Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
				Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
			</p>
		</div>
		<div class="w-full flex items-center pl-8">
			<h1 class="text-4xl text-white">Lançamentos Recentes</h1>
		</div>
		{#if innerWidth <= 1024}
			<div class="w-full flex justify-around p-2 gap-2 overflow-auto">
				{#each newList.slice(0, 3) as n}
					<BannerMovieCard />
				{/each}
			</div>
			{:else}
				<div class="w-full flex p-2 gap-2 overflow-auto justify-around">
					{#each newList as n}
						<BannerMovieCard />
					{/each}
				</div>
		{/if}
	</div>

	<!-- Bolinhas -->
	<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
		{#each images as _, index}
			<button
				class="w-3 h-3 rounded-full border border-white bg-opacity-50"
				class:bg-white={index === currentIndex}
				on:click={() => goToSlide(index)}
			></button>
		{/each}
	</div>
</div>
