<script>
	import iconfunnel from '../../../lib/assets/funnel-outline.svg';
	import iconAphabeticalOrder from '../../../lib/assets/alphabetical-order.svg';
	import icontimer from '../../../lib/assets/timer.svg';
	import Cookies from 'js-cookie';
	import { popup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(()=> {
		console.log('Componentes carregados')
	})
	
	let comboboxValue;
	let idDaPArada;

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

</script>


<div class="flex justify-center relative">
	<!-- Tela escura -->
	{#if isBackdropVisible}
		<div 
			class="fixed inset-0 bg-black bg-opacity-50 z-10" 
			on:click={() => (isBackdropVisible = false)}>
		</div>
	{/if}

	<div class="relative md:w-[70%]">
		<div class="z-20">
			<div class="bg-red-500 relative w-[100%] h-[15rem] md:h-[20rem]">
				<div></div>

				<div class="flex flex-col items-center left-[10%] bottom-[5%] gap-2 absolute">
					<div class="bg-green-500 rounded-full w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem]">
						<div>
							<img src="" alt="" />
						</div>
					</div>
					<span class="bg-yellow-300">Carlos</span>
				</div>
			</div>
		</div>

		<div class="flex justify-center md:justify-start">
			<!-- Botão que ativa a tela escura -->
			<button 
				class="btn flex mr-1 gap-1 w-[120px] h-[30px] rounded-t-[10px] bg-white justify-center items-center z-30" 
				use:popup={popupCombobox}
				on:click= {() => {toggleBackdrop()}}>
				<div class="flex w-[100px] items-center justify-center gap-1">
					<img class="w-[20px]" src="{iconfunnel}" alt="iconfunnel">
					<span>Categorias</span>
					<span>↓</span>
				</div> 
			</button>
			
		<div id="categoryMenu" class="w-[220px] h-[240px] bg-white rounded-b z-20"
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

			<div class="btn p-0 flex mr-1 gap-1 w-[100px] bg-white rounded-t-[10px] rounded-tl-[10px] justify-center items-center z-20">
				<div class="flex w-[100px] items-center justify-center gap-1">
					<img class="w-[20px] gap-2" src="{icontimer}" alt="icontimer">
					<span>Recentes</span>
				</div>
			</div>
		
			<div class="btn p-0 flex gap-1 w-[100px] bg-white rounded-t-[10px] justify-center items-center z-20">
				<div class="flex w-[100px] items-center justify-center gap-1">
					<img class="w-[20px] gap-2" src="{iconAphabeticalOrder}" alt="icontimer">
					<span>Ordem</span>
				</div>
			</div>
		</div>
		
		<div class="flex items-center justify-center">
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
				<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
				<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
				<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
				<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
				<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
				<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
				<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
				<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
			</div>
		</div>
	</div>
</div>
