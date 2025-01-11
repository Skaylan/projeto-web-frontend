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

	export let activeCategories = [];
	function handleImageChange(event, field) {
		const selectedFile = event.target.files[0];
		if (selectedFile) {
			convertImageToBase64(selectedFile, (base64String) => {
				if (field === 'imageOne') {
					imageOneBase64 = base64String;
				} else if (field === 'imageTwo') {
					imageTwoBase64 = base64String;
				}
			});
		} else {
			console.log(`Nenhuma imagem selecionada no campo: ${field}`);
		}
	}

	function handleCheckboxChange(event) {
		const categoryId = event.target.value;
		if (event.target.checked) {
			if (!activeCategories.includes(categoryId)) {
				activeCategories.push(categoryId);
			}
		} else {
			activeCategories = activeCategories.filter((id) => id !== categoryId);
		}
	}

	let searchQuery = '';
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

	const searchCategory = async () => {
		if (searchQuery.length > 0) {
			try {
				const response = await fetch(
					'http://localhost:5000/api/v1/get_category_by_search',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ name: searchQuery })
					}
				);

				const result = await response.json();

				if (result && result.category) {
					categories = result.category;
				} else {
					console.error('Nenhuma categoria encontrada');
				}
			} catch (error) {
				console.error('Erro ao buscar categorias:', error);
			}
		} else {
			categories = backUpCategory;
		}
	};
</script>

<form>
	<div class="space-y-12">
		<div class="border-b border-gray-900/10 pb-12">
			<h2 class="text-base/7 font-semibold text-gray-900">Cadastro de filme</h2>
			<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div class="sm:col-span-4">
					<label for="titulo" class="block text-sm/6 font-medium text-gray-900">Titulo</label>
					<div class="mt-2">
						<div
							class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
						>
							<div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
							<input
								bind:value={title}
								type="text"
								name="titulo"
								id="titulo"
								class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
								placeholder="Digite..."
							/>
						</div>
					</div>

					<label for="Titulo original" class="block text-sm/6 font-medium text-gray-900"
						>Titulo original</label
					>
					<div class="mt-2">
						<div
							class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
						>
							<div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
							<input
								bind:value={original_title}
								type="text"
								name="Titulo original"
								id="Titulo original"
								class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
								placeholder="Digite..."
							/>
						</div>
					</div>

					<label for="Titulo romanizado" class="block text-sm/6 font-medium text-gray-900"
						>Titulo romanizado</label
					>
					<div class="mt-2">
						<div
							class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
						>
							<div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
							<input
								bind:value={romanized_original_title}
								type="text"
								name="Titulo romanizado"
								id="Titulo romanizado"
								class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
								placeholder="Digite..."
							/>
						</div>
					</div>

					<label for="Descrição" class="block text-sm/6 font-medium text-gray-900">Descrição</label>
					<div class="mt-2">
						<textarea
							bind:value={description}
							name="Descrição"
							id="Descrição"
							rows="3"
							class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
						></textarea>
					</div>

					<label for="Estudio" class="block text-sm/6 font-medium text-gray-900">Estudio</label>
					<div class="mt-2">
						<div
							class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
						>
							<div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
							<input
								bind:value={studio}
								type="text"
								name="Estudio"
								id="Estudio"
								class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
								placeholder="Digite..."
							/>
						</div>
					</div>

					<label for="Diretor" class="block text-sm/6 font-medium text-gray-900">Diretor</label>
					<div class="mt-2">
						<div
							class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
						>
							<div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
							<input
								bind:value={director}
								type="text"
								name="Diretor"
								id="Diretor"
								class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
								placeholder="Digite..."
							/>
						</div>
					</div>

					<label for="Produtor" class="block text-sm/6 font-medium text-gray-900">Produtor</label>
					<div class="mt-2">
						<div
							class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
						>
							<div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
							<input
								bind:value={producer}
								type="text"
								name="Produtor"
								id="Produtor"
								class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
								placeholder="Digite..."
							/>
						</div>
					</div>

					<label for="Nota" class="block text-sm/6 font-medium text-gray-900">Nota</label>
					<div class="mt-2">
						<div
							class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
						>
							<div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
							<input
								bind:value={rating}
								type="text"
								name="Nota"
								id="Nota"
								class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
								placeholder="Digite..."
							/>
						</div>
					</div>

					<label for="Data de lançamento" class="block text-sm/6 font-medium text-gray-900"
						>Data de lançamento</label
					>
					<div class="mt-2">
						<div
							class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
						>
							<div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
							<input
								bind:value={lounch_date}
								type="date"
								name="Data de lançamento"
								id="Data de lançamento"
								class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
							/>
						</div>
					</div>

					<label for="Minutagem" class="block text-sm/6 font-medium text-gray-900">Minutagem</label>
					<div class="mt-2">
						<div
							class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
						>
							<div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
							<input
								bind:value={running_time}
								type="text"
								name="Minutagem"
								id="Minutagem"
								class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
								placeholder="Digite..."
							/>
						</div>
					</div>

					<div class="md:w-[44%]">
						<label for="searchCategory" class="block text-sm/6 font-medium text-gray-900"
							>Gênero</label
						>
						<div
							class="flex items-center flex-col p-2 outline outline-1 -outline-offset-1 outline-gray-300 rounded-md"
						>
							<div class="flex items-center w-full h-8 m-2">
								<input
									class="w-full pl-3 h-full rounded-lg bg-[#F2F2F2]"
									type="text"
									id="searchCategory"
									placeholder="Digite para buscar categorias..."
									bind:value={searchQuery}
									on:input={searchCategory}
								/>
								<Search size="32" />
							</div>

							<div class="overflow-y-scroll max-h-40 w-full">
								{#if categories.length > 0}
									{#each categories as category, index}
										<div
											class="flex justify-between items-center w-full px-2 py-2 bg-white rounded-md mb-2"
										>
											<label for="category-{index}">{category.name}</label>
											<input
												type="checkbox"
												id="category-{index}"
												value={category.id}
												on:change={handleCheckboxChange}
											/>
										</div>
									{/each}
								{:else}
									<p>Loading categories...</p>
								{/if}
							</div>
						</div>
					</div>

					<label for="cover-photo" class="block text-sm/6 font-medium text-gray-900"
						>Imagem do filme</label
					>

					<div class="flex flex-row gap-4 justify-center md:justify-start">
						<div
							class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
						>
							<div class="text-center">
								<svg
									class="mx-auto size-12 text-gray-300"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path
										fill-rule="evenodd"
										d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
										clip-rule="evenodd"
									/>
								</svg>
								<div class="mt-4 flex text-sm/6 text-gray-600">
									<label
										for="imageOne"
										class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
									>
										<span>Upload a Poster</span>
										<input
											id="imageOne"
											name="imageOne"
											type="file"
											class="sr-only"
											on:change={(event) => handleImageChange(event, 'imageOne')}
										/>
									</label>
								</div>
								<p class="text-xs/5 text-gray-600">PNG, JPG</p>
							</div>
						</div>

						<div
							class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
						>
							<div class="text-center">
								<svg
									class="mx-auto size-12 text-gray-300"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path
										fill-rule="evenodd"
										d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
										clip-rule="evenodd"
									/>
								</svg>
								<div class="mt-4 flex text-sm/6 text-gray-600">
									<label
										for="imageTwo"
										class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
									>
										<span>Upload a Banner</span>
										<input
											id="imageTwo"
											name="imageTwo"
											type="file"
											class="sr-only"
											on:change={(event) => handleImageChange(event, 'imageTwo')}
										/>
									</label>
								</div>
								<p class="text-xs/5 text-gray-600">PNG, JPG</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</form>
