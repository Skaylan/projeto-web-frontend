<script>
    import { Motion, useDragControls } from "svelte-motion";
    const dragControls = useDragControls();
    let divWidth = 0
    let innerWidth = 0
    let innerHeight = 0

</script>
<svelte:window bind:innerWidth bind:innerHeight />
<div class="overflow-hidden">
    <Motion drag="x" dragConstraints={{right: 0, left: -(3080-divWidth)}} let:motion {dragControls}>
        <div bind:clientWidth={divWidth} use:motion class="flex gap-2 cursor-pointer w-[auto]" >
            <img class="w-[300px] hover:w-[340px] h-[440px] transition-all" src="https://placehold.co/300x400" alt="movie poster" draggable="false">
            <img class="w-[300px] hover:w-[340px] h-[440px] transition-all" src="https://placehold.co/300x400" alt="movie poster" draggable="false">
            <img class="w-[300px] hover:w-[340px] h-[440px] transition-all" src="https://placehold.co/300x400" alt="movie poster" draggable="false">
            <img class="w-[300px] hover:w-[340px] h-[440px] transition-all" src="https://placehold.co/300x400" alt="movie poster" draggable="false">
            <img class="w-[300px] hover:w-[340px] h-[440px] transition-all" src="https://placehold.co/300x400" alt="movie poster" draggable="false">
            <img class="w-[300px] hover:w-[340px] h-[440px] transition-all" src="https://placehold.co/300x400" alt="movie poster" draggable="false">
            <img class="w-[300px] hover:w-[340px] h-[440px] transition-all" src="https://placehold.co/300x400" alt="movie poster" draggable="false">
            <img class="w-[300px] hover:w-[340px] h-[440px] transition-all" src="https://placehold.co/300x400" alt="movie poster" draggable="false">
            <img class="w-[300px] hover:w-[340px] h-[440px] transition-all" src="https://placehold.co/300x400" alt="movie poster" draggable="false">
            <img class="w-[300px] hover:w-[340px] h-[440px] transition-all" src="https://placehold.co/300x400" alt="movie poster" draggable="false">
        </div>
    </Motion>
</div>