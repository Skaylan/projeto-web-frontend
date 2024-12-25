<script>
	import { Motion, useDragControls, useMotionValue, useVelocity } from 'svelte-motion';
	import Device from 'svelte-device-info';
	import MovieCard from './MovieCard.svelte';
	const dragControls = useDragControls();
	let divWidth = 0
	let innerWidth = 0
	let innerHeight = 0
	let imageSize = 400;
	export let movies;


</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if innerWidth <= 640}
	<div class="flex items-center text-4xl gap-1 sm:pl-14 p-4 sm:text-5xl">
		<ul class="flex gap-4 snap-x overflow-x-auto snap-mandatory">
			{#each movies as movie}
				<li class="shrink-0 snap-center">
					<MovieCard movie={movie} />
				</li>
			{/each}
		</ul>
	</div>

{:else}
	<Motion drag="x" let:motion {dragControls} dragConstraints={{ right: 0, left: -((movies.length * imageSize) - divWidth)}}>
		<div bind:clientWidth={divWidth} class="flex items-center overflow-hidden md:pl-14">
			<ul use:motion class="flex gap-4 snap-x snap-mandatory">
				{#each movies as movie}
					<li class="shrink-0 snap-center">
						<MovieCard movie={movie}/>
					</li>
				{/each}
			</ul>
		</div>
	</Motion>
{/if}
