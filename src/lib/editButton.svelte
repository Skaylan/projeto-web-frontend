<script>
	import pageIcon from '../lib/assets/page-icon.svg';
	import { Search } from 'lucide-svelte';

	import FormComponent from './movieForm.svelte';
	import { onMount } from 'svelte';

	let movieTitle = '';
	let movieOriginal_title = '';
	let movieRomanized_original_title = '';
	let movieDescription = '';
	let movieStudio = '';
	let movieDirector = '';
	let movieProducer = '';
	let movieRating = '';
	let movieLounch_date = '';
	let movieRunning_time = '';
	let movieBanner = '';
	let moviePoster = '';

	async function submitMovie() {
		const movie = {
			id:data.id,
			title: movieTitle,
			original_title: movieOriginal_title,
			romanised_original_title: movieRomanized_original_title,
			description: movieDescription,
			studio: movieStudio,
			director: movieDirector,
			producer: movieProducer,
			rating: movieRating,
			lounch_date: movieLounch_date,
			running_time: movieRunning_time,
			banner_img_base64: movieBanner,
			poster_img_base64: moviePoster
		};

		try {
			const response = await fetch('http://localhost:5000/api/v1/edit_movie', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(movie)
			});

			if (!response.ok) {
				throw new Error('Erro ao enviar os dados.');
			}

			const result = await response.json();
			console.log('Dados enviados com sucesso:', result);
		} catch (error) {
			console.error('Erro ao enviar dados:', error);
		}
	}

	let movies = []

	onMount(async () =>{
		try{
			const response = await fetch('http://localhost:5000/api/v1/get_movies');

			if(!response.ok){
				throw new Error('Falha na conexão com o servidor')
			}

			movies = await response.json();
			movies = movies.movies
			
			console.log(movies)

		} catch(error){
			console.log('Erro ao buscar filmes: ', error);
		}
	});

	let data = '';

	const loadMovieData = async (title, studio) =>{

		console.log(title)
		console.log(studio)

		try{
			const response = await fetch(`http://localhost:5000/api/v1/get_one_movie?title=${encodeURIComponent(title)}&studio=${encodeURIComponent(studio)}`,{
				method: 'GET',
				headers:{
					'Content-Type': 'application/json'
				},
			});

			data = await response.json();
			data = data.movie

			console.log(data)
			
			movieTitle = data.title;
			movieOriginal_title = data.original_title;
			movieRomanized_original_title = data.
			romanised_original_title;
			movieDescription = data.description;
			movieStudio = data.studio;
			movieDirector = data.director;
			movieProducer = data.producer;
			movieRating = data.rating;
			movieLounch_date = data.lounch_date;
			movieRunning_time = data.running_time;

		}catch (error) {
			console.error('Erro ao buscar categorias:', error);
		}
	}
</script>

<div class="flex flex-col w-[90%]">
	<div class="flex flex-col gap-2 sm:flex-row sm:justify-center">
		<!-- Filmes cadastrados -->
		<section class="flex justify-center sm:w-[30%] md:w-[40%]">
			<div class="flex flex-col items-center gap-2 w-[90%] p-2 rounded-lg">
				<div class="flex justify-start w-full text-xl">
					<span>Filmes cadastrados</span>
				</div>
				<div class="flex w-full">
					<input
						class="w-[90%] pl-3 rounded-lg shadow-custom bg-[#F2F2F2]"
						type="search"
						placeholder="Buscar..."
					/>
					<Search size="32" />
				</div>

				<div class="overflow-y-scroll max-h-40 w-full">
					{#each movies as movie, index}
						<div class="flex flex-col gap-2 w-full rounded-lg" >
							<button on:click={loadMovieData(movie.title, movie.studio)} class="flex items-center p-1 my-1 w-full bg-white rounded-lg shadow-custom">
								<img class="w-5 h-5" src={pageIcon} alt="" />
								<label for="movie-{index}">{movie.title}</label>
							</button>
						</div>
					{/each}
				</div>

				<div class="overflow-y-scroll max-h-40 w-full"></div>
			</div>
		</section>

		<section class="flex flex-col md:w-[80%]">
			<FormComponent
				bind:title={movieTitle}
				bind:original_title={movieOriginal_title}
				bind:romanized_original_title={movieRomanized_original_title}
				bind:description={movieDescription}
				bind:studio={movieStudio}
				bind:director={movieDirector}
				bind:producer={movieProducer}
				bind:rating={movieRating}
				bind:lounch_date={movieLounch_date}
				bind:running_time={movieRunning_time}
				bind:imageOneBase64={movieBanner}
				bind:imageTwoBase64={moviePoster}
			/>

			<div class="flex justify-center gap-4 mt-4 w-full">
				<button
					class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
					type="button"
					on:click={submitMovie}
				>
					Salvar
				</button>
				<button class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" type="button">
					Excluir
				</button>
			</div>
		</section>
	</div>
</div>
