<script>
  import star from './assets/star.svg';
  export let movie;

  let innerHeight = 0
	let innerWidth = 0
  
</script>
<svelte:window bind:innerWidth bind:innerHeight />



<div class="">
  {#if innerWidth >= 640}
      <a draggable="false" href="#/">
        <div class="w-full rounded-lg relative group cursor-pointer text-white text-justify leading-5">
          <img draggable="false" class="rounded-lg w-[400px] h-[500px] md:w-[350px] obeject-contain" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg" alt="Imagem" />
          <div class="flex w-[400px] h-[200px] absolute top-[300px] p-2 opacity-0 group-hover:opacity-100 transition bg-[#000000b0] rounded-b-lg md:w-full">
            <div class="flex flex-col">
              <div class="w-full flex pb-2">
                <h1 class="text-2xl">{movie.title}</h1>
              </div>
              {#if movie.description.length >= 185}
                <p class="text-sm">{`${movie.description.substring(0, 185)}`} <span class="underline">...ver mais</span></p>
              {:else}
                <p class="">{movie.description}</p>
              {/if}
            </div>
            <div class="w-full h-full flex flex-col justify-center items-center relative">
              <span class="absolute top-[6.5rem] text-2xl font-bold">8.5</span>
              <div class="flex items-center justify-center relative">
                <img src="{star}" alt="star-icon">
                <img class="absolute top-[-1.25rem]" src="{star}" alt="star-icon">
                <img src="{star}" alt="star-icon">
              </div>
            </div>
          </div>
        </div>
      </a>
  {:else}
      <a draggable="false" href="#/">
        <div class="w-full rounded-lg relative text-white text-justify leading-5">
          <img draggable="false" class="rounded-lg w-[300px] h-[400px] object-cover" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg" alt="Imagem" />
          <div class="flex flex-col w-[300px] h-[100px] absolute top-[300px] p-2 bg-[#000000b0] rounded-b-lg ">
            <div class="flex flex-col">
              <div class="w-full flex justify-center pb-2">
                <h1 class="text-2xl">{movie.title}</h1>
              </div>
            </div>
            <div class="w-full h-full flex items-center relative">
              <span class="text-xl">Ano: {movie.release_date}</span>
              <span class="right-20 absolute text-2xl font-bold">{movie.rating}</span>
              <div class="flex items-center justify-center absolute top-[17px] right-3">
                <img src="{star}" alt="star-icon">
                <img class="absolute top-[-1.25rem]" src="{star}" alt="star-icon">
                <img src="{star}" alt="star-icon">
              </div>
            </div>
          </div>
        </div>
      </a>
  {/if}
</div>