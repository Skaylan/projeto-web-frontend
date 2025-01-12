<script>
	import HeaderSecundario from '../../lib/headerSecundario.svelte';

	import AddComponent from '../../lib/addButton.svelte';
	import EditComponent from '../../lib/editButton.svelte';
	import UserComponent from '../../lib/userButton.svelte';
	import AddCategoryComponent from '../../lib/addCategory.svelte';

	let addButtonVisible = AddComponent;

	function addComponentButton() {
		addButtonVisible = AddComponent;
	}

	function editComponentButton() {
		addButtonVisible = EditComponent;
	}

	function userComponentButton() {
		addButtonVisible = UserComponent;
	}

	function addCategoryComponentButton() {
		addButtonVisible = AddCategoryComponent;
	}

    export let data;
	const { img } = data 

</script>

<HeaderSecundario />

<section>
    <div class="flex justify-center py-5">
        <div class="w-[90%] rounded-lg px-1 sm:bg-[#75C9C8]">
            <ul class="flex justify-between sm:justify-start gap-5">
                <li>
                    <button
                        type="button"
                        class="p-2 rounded-lg hover:bg-[#75C9C8] sm:hover:bg-[#ffffff]"
                        on:click={addComponentButton}
                    >
                        Adicionar Filmes
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        class="p-2 rounded-lg hover:bg-[#75C9C8] sm:hover:bg-[#ffffff]"
                        on:click={addCategoryComponentButton}
                    >
                        Adicionar Categoria
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        class="p-2 rounded-lg hover:bg-[#75C9C8] sm:hover:bg-[#ffffff]"
                        on:click={userComponentButton}
                    >
                        Usuários
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        class="p-2 rounded-lg hover:bg-[#75C9C8] sm:hover:bg-[#ffffff]"
                        on:click={editComponentButton}
                    >
                        Editar
                    </button>
                </li>
            </ul>
        </div>
    </div>
</section>

<div class="flex justify-center">
    {#if addButtonVisible === AddComponent}
        <AddComponent />
    {:else if addButtonVisible === EditComponent}
        <EditComponent />
    {:else if addButtonVisible === UserComponent}
        <UserComponent />
    {:else if addButtonVisible === AddCategoryComponent}
        <AddCategoryComponent />
    {/if}
</div>
