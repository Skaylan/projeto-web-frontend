<script>
	import iconfunnel from '../../../lib/assets/funnel-outline.svg';
	import iconAphabeticalOrder from '../../../lib/assets/alphabetical-order.svg';
	import icontimer from '../../../lib/assets/timer.svg';
	import Cookies from 'js-cookie';
	import { popup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		console.log('Componentes carregados');
	});

	const popupCombobox = {
		event: 'click',
		target: 'popupCombobox',
		placement: 'bottom-start',
		closeQuery: '.listbox-item'
	};

	export let data;
	const { user } = data;

	let isBackdropVisible = false;

	function toggleBackdrop() {
		isBackdropVisible = !isBackdropVisible;
	}

	let movies = [];

	onMount(async () => {
		try {
			const response = await fetch('http://localhost:5000/api/v1/get_movies');

			if (!response.ok) {
				throw new Error('Falha na conexão com o servidor');
			}

			movies = await response.json();
			movies = movies.movies;

			console.log(movies.poster_img);
		} catch (error) {
			console.log('Erro ao buscar filmes: ', error);
		}
	});
</script>

<div class="flex justify-center relative">
	<!-- Tela escura -->
	{#if isBackdropVisible}
		<div
			class="fixed inset-0 bg-black bg-opacity-50 z-10"
			on:click={() => (isBackdropVisible = false)}
		></div>
	{/if}

	<div class="relative md:w-[70%]">
		<div class="z-20">
			<div class="relative w-full h-[15rem] rounded-b-lg md:h-[25rem] bg-red-500">
				<!-- Imagem de fundo -->
				<img
					src="data:image/jpeg;base64,{user.banner_img}"
					alt="Banner do usuário"
					class="absolute rounded-b-lg top-0 left-0 w-full h-full object-fill"
				/>

				<!-- Conteúdo sobreposto -->
				<div class="absolute left-[10%] bottom-[5%] flex flex-col items-center gap-2">
					<!-- Imagem do avatar -->
					<div
						class="rounded-full overflow-hidden w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem] bg-green-500"
					>
						<img
							src="data:image/jpeg;base64,{user.profile_img}"
							alt="Avatar do usuário"
							class="w-full h-full object-cover"
						/>
					</div>
					<!-- Nome do usuário -->
					<span class="bg-white p-1 font-bold rounded-md text-black">{user.name}</span>
				</div>
			</div>
		</div>

		<div class="flex pl-2 justify-start">
			<!-- Botão que ativa a tela escura -->
			<button
				class="btn flex mr-1 gap-1 w-[120px] h-[30px] rounded-t-[10px] bg-white justify-center items-center z-30"
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
				<div class="p-3" rounded="rounded-none">
					<a class="" href="#/">Romance</a>
					<a class="" href="#/">Aventura</a>
					<a class="" href="#/">Comedia</a>
					<a class="" href="#/">Suspense</a>
				</div>
				<div class="arrow bg-surface-100-800-token" />
			</div>

			<div
				class="btn p-0 flex gap-1 w-[100px] bg-white rounded-t-[10px] justify-center items-center z-20"
			>
				<div class="flex w-[100px] items-center justify-center gap-1">
					<img class="w-[20px] gap-2" src={iconAphabeticalOrder} alt="icontimer" />
					<span>Ordem</span>
				</div>
			</div>
		</div>

		<div class="flex items-center justify-center">
			{#each movies as movie}
				<div class="grid grid-cols-2 m-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
					<img
						class="rounded-lg focus-div"
						src="data:image/jpeg;base64,{movie.poster_img}"
						alt=""
					/>
				</div>
			{/each}
		</div>
	</div>
</div>
