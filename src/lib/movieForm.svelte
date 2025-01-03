<script>
	import pageIcon from '../lib/assets/page-icon.svg';
	import { Search } from 'lucide-svelte';
	import { onMount } from 'svelte';

	import { convertImageToBase64 } from '../utils/convertImageToBase64.js';

	export let imageOneBase64 = '';
	export let imageTwoBase64 = '';

	export let title = '';
	export let original_title = '';
	export let romanized_original_title = '';
	export let description = '';
	export let studio = '';
	export let director = '';
	export let producer = '';
	export let rating = '';
	export let lounch_date = '';
	export let running_time = '';
	//  export let category_id = '';

	let data = [];

	function handleImageChange(event, field) {
		const selectedFile = event.target.files[0];
		if (selectedFile) {
			convertImageToBase64(selectedFile, (base64String) => {
				if (field === 'imageOne') {
					imageOneBase64 = base64String;
					console.log('Imagem 1 (Base64):', imageOneBase64);
				} else if (field === 'imageTwo') {
					imageTwoBase64 = base64String;
					console.log('Imagem 2 (Base64):', imageTwoBase64);
				}
			});
		} else {
			console.log(`Nenhuma imagem selecionada no campo: ${field}`);
		}
	}

	onMount(async () => {
		try {
			const response = await fetch('http://localhost:5000/api/v1/get_categories');

			if (!response.ok) {
				throw new Error('Falha na rede');
			}

			data = await response.json();
			data = data.categories;
			console.log(data); // Exibe os dados recebidos no console
		} catch (error) {
			console.error('Erro ao buscar categorias:', error);
		}
	});
</script>

<div class="flex flex-col gap-2 sm:flex-row sm:justify-center">
	<!-- Formulário -->
	<section class="sm:w-[60%] md:w-[95%]">
		<div class="flex justify-center w-full">
			<div class="flex flex-col items-center p-2 sm:w-[90%] bg-[#F2F2F2] rounded-lg">
				<div class="w-full flex justify-start pl-5 text-2xl">
					<span>Informações do filme</span>
				</div>
				<!-- Campos do formulário -->
				<div class="w-[90%]">
					<span>Título</span>
					<div class="h-8">
						<input
							bind:value={title}
							id="titulo"
							class="w-full h-full rounded-lg shadow-custom"
							type="text"
						/>
					</div>
				</div>
				<div class="w-[90%]">
					<span>Título original</span>
					<div class="h-8">
						<input
							bind:value={original_title}
							id="tituloOriginal"
							class="w-full h-full rounded-lg shadow-custom"
							type="text"
						/>
					</div>
				</div>
				<div class="w-[90%]">
					<span>título original romanizado</span>
					<div class="h-16">
						<input
							bind:value={romanized_original_title}
							id="descricao"
							class="w-full h-full rounded-lg shadow-custom"
							type="text"
						/>
					</div>
				</div>
				<div class="w-[90%]">
					<span>Descrição</span>
					<div class="h-16">
						<input
							bind:value={description}
							id="descricao"
							class="w-full h-full rounded-lg shadow-custom"
							type="text"
						/>
					</div>
				</div>
				<div class="w-[90%]">
					<span>Diretor</span>
					<div class="h-8">
						<input
							bind:value={director}
							id="diretor"
							class="w-full h-full rounded-lg shadow-custom"
							type="text"
						/>
					</div>
				</div>
				<div class="w-[90%]">
					<span>Estúdio</span>
					<div class="h-8">
						<input
							bind:value={studio}
							id="estudio"
							class="w-full h-full rounded-lg shadow-custom"
							type="text"
						/>
					</div>
				</div>
				<div class="w-[90%]">
					<span>Produtora</span>
					<div class="h-8">
						<input
							bind:value={producer}
							id="produtora"
							class="w-full h-full rounded-lg shadow-custom"
							type="text"
						/>
					</div>
				</div>
				<div class="w-[90%]">
					<span>Nota</span>
					<div class="h-8">
						<input
							bind:value={rating}
							id="nota"
							class="w-full h-full rounded-lg shadow-custom"
							type="text"
						/>
					</div>
				</div>
				<div class="w-[90%]">
					<span>Data de lançamento</span>
					<div class="h-8">
						<input
							bind:value={lounch_date}
							id="nota"
							class="w-full h-full rounded-lg shadow-custom"
							type="date"
						/>
					</div>
				</div>
				<div class="w-[90%]">
					<span>Tempo</span>
					<div class="h-8">
						<input
							bind:value={running_time}
							id="tempo"
							class="w-full h-full rounded-lg shadow-custom"
							type="text"
						/>
					</div>
				</div>

				<!-- Gênero -->
				<div class="flex items-center flex-col w-[90%] lg:flex-row-reverse">
					<div class="w-[90%]">
						<span>Gênero</span>
						<div class="flex items-center flex-col p-2 bg-[#75C9C8] rounded-md">
							<div class="flex items-center w-full h-8 m-2">
								<input
									class="w-full pl-3 h-full rounded-lg shadow-custom bg-[#F2F2F2]"
									type="search"
									placeholder="Buscar..."
								/>
								<Search size="32" />
							</div>

							<div class="overflow-y-scroll max-h-40 w-full">
                                {#if data.length > 0}
                                    {#each data as category, index}
                                        <div
                                            class="flex justify-between items-center w-full px-2 py-2 bg-white rounded-md mb-2"
                                        >
                                            <label for="category-{index}">{category.name}</label>
                                            <input type="checkbox" id="category-{index}" />
                                        </div>
                                    {/each}
                                {:else}
                                    <p>Loading categories...</p>
                                {/if}
                            </div>
						</div>
					</div>
					<!-- Upload -->
					<div class="w-full h-full">
						<section class="flex gap-3 items-center h-full lg:flex-row p-2">
							<!-- Upload para a primeira imagem -->
							<div class="flex justify-center w-[90%] relative lg:h-70">
								<label
									class="flex justify-center items-center px-4 py-2 bg-blue-500 text-white rounded cursor-pointer w-full h-full"
									for="imageOne"
								>
									Upload Imagem 1
									<input
										id="imageOne"
										class="absolute top-0 left-0 w-full h-full bg-white opacity-0 cursor-pointer"
										type="file"
										on:change={(event) => handleImageChange(event, 'imageOne')}
									/>
									<img class="w-5 h-5" src={pageIcon} alt="Ícone da imagem 1" />
								</label>
								{#if imageOneBase64}
									<div class="mt-2">
										<img
											src={imageOneBase64}
											alt="Imagem 1"
											class="w-[50px] h-[50px] object-cover"
										/>
									</div>
								{/if}
							</div>

							<!-- Upload para a segunda imagem -->
							<div class="flex justify-center w-[90%] relative lg:h-70">
								<label
									class="flex justify-center items-center px-4 py-2 bg-green-500 text-white rounded cursor-pointer w-full h-full"
									for="imageTwo"
								>
									Upload Imagem 2
									<input
										id="imageTwo"
										class="absolute top-0 left-0 w-full h-full bg-white opacity-0 cursor-pointer"
										type="file"
										on:change={(event) => handleImageChange(event, 'imageTwo')}
									/>
									<img class="w-5 h-5" src={pageIcon} alt="Ícone da imagem 2" />
								</label>
								{#if imageTwoBase64}
									<div class="mt-2">
										<img
											src={imageTwoBase64}
											alt="Imagem 2"
											class="w-[50px] h-[50px] object-cover"
										/>
									</div>
								{/if}
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
