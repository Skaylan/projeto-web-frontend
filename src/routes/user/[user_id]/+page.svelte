<script>
	import iconfunnel from '../../../lib/assets/funnel-outline.svg';
	import iconAphabeticalOrder from '../../../lib/assets/alphabetical-order.svg';
	import BannerPadrao from '../../../lib/assets/bannerPadrao.png';
	import ProfilePadrao from '../../../lib/assets/profilePadrao.png';
	import SemFilmes from '../../../lib/assets/SemFilmes.jpg';
	import { popup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let data;
	const { user } = data;

	const popupCombobox = {
		event: 'click',
		target: 'popupCombobox',
		placement: 'bottom-start',
		closeQuery: '.listbox-item'
	};

	let isBackdropVisible = false;

	function toggleBackdrop() {
		isBackdropVisible = !isBackdropVisible;
	}

	let movies = [];

	onMount(async () => {
		try {
			const response = await fetch(`http://localhost:5000/api/v1/get_liked_movies?id=${user.id}`);

			if (!response.ok) {
				throw new Error('Falha na conexão com o servidor');
			}

			movies = await response.json();
			movies = movies.liked_movie;

			movies = movies.map((item) => ({
				movieData: item.movie
			}));

		} catch (error) {
			console.log('Erro ao buscar filmes: ', error);
		}
	});

	let categories = [];
	let backUpCategory = [];

	onMount(async () => {
		try {
			const response = await fetch('http://localhost:5000/api/v1/get_categories');

			if (!response.ok) {
				throw new Error('Falha na rede');
			}

			categories = await response.json();
			categories = categories.categories;

			backUpCategory = [...categories];
		} catch (error) {
			console.error('Erro ao buscar categorias:', error);
		}
	});
</script>

<div class="flex justify-center h-[100%] relative">
	<!-- Tela escura -->
	{#if isBackdropVisible}
		<div
			aria-hidden="true"
			class="fixed inset-0 bg-black bg-opacity-50 z-10"
			on:click={() => (isBackdropVisible = false)}
		></div>
	{/if}

	<div class="relative md:w-[70%]">
		<div class="z-20">
			<div class="relative w-full h-[15rem] rounded-b-lg md:h-[25rem]">
				<!-- Imagem de fundo -->

				{#if user.banner_img == ''}
					<img
						src={BannerPadrao}
						alt="Banner do usuário"
						class="absolute rounded-b-lg top-0 left-0 w-full h-full object-cover"
					/>
				{:else}
					<img
						src="data:image/jpeg;base64,{user.banner_img}"
						alt="Banner do usuário"
						class="absolute rounded-b-lg top-0 left-0 w-full h-full object-fill"
					/>
				{/if}

				<!-- Conteúdo sobreposto -->
				<div class="absolute left-[10%] bottom-[5%] flex flex-col items-center gap-2">
					<!-- Imagem do avatar -->
					<div
						class="bg-white rounded-full overflow-hidden w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem]"
					>
						{#if user.profile_img == ''}
							<img src={ProfilePadrao} alt="Avatar do usuário" class="w-full h-full object-fill" />
						{:else}
							<img
								src="data:image/jpeg;base64,{user.profile_img}"
								alt="Avatar do usuário"
								class="w-full h-full object-cover"
							/>
						{/if}
					</div>
				</div>
			</div>
		</div>

		<div class="flex p-2 justify-start">
			<!-- Botão que ativa a tela escura -->
			<button
				class="btn flex mr-2 w-[120px] h-[40px] bg-white rounded-lg shadow-md items-center z-20"
				use:popup={popupCombobox}
				on:click={() => {
					toggleBackdrop();
				}}
			>
				<div class="flex w-[100px] items-center justify-center gap-1">
					<img class="w-[20px]" src={iconfunnel} alt="iconfunnel" />
					<span>Categorias</span>
					<span>↓</span>
				</div>
			</button>

			<div
				id="categoryMenu"
				class="w-[220px] h-[240px] bg-white rounded-b z-20"
				data-popup="popupCombobox"
			>
				{#each categories as category}
					<div class="flex flex-col p-3 hover:underline" rounded="rounded-none">
						<a class="" href="#/">{category.name}</a>
					</div>
				{/each}

				<div class="arrow bg-surface-100-800-token" />
			</div>

			<div
				class="btn p-0 flex gap-1 w-[100px] bg-white rounded-lg justify-center items-center z-20"
			>
				<div class="btn flex gap-1 w-[100px] h-[40px] rounded-lg bg-white shadow-md items-center">
					<img class="w-[20px] gap-2" src={iconAphabeticalOrder} alt="icontimer" />
					<span>Ordem</span>
				</div>
			</div>
		</div>

		{#if movies != ''}
			<div
				class="grid grid-cols-2 m-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
			>
				{#each movies as movie}
					<div class="h-full">
						<img
							class="rounded-lg focus-div object-contain"
							src="data:image/jpeg;base64,{movie.movieData.poster_img}"
							alt=""
						/>
					</div>
				{/each}
			</div>
		{:else}
			<div class="flex h-[80%] justify-center md:h-[40%]">
				<div class="flex justify-center w-[60%] h-full object-contain">
					<img class="rounded-lg object-contain" src={SemFilmes} alt="" />	
				</div>
			</div>
		{/if}
	</div>
</div>
