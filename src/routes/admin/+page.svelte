<script>
	import HeaderSecundario from '../../lib/headerSecundario.svelte';

	import AddComponent from '../../lib/addButton.svelte';
	import EditComponent from '../../lib/editButton.svelte';
	import UserComponent from '../../lib/userButton.svelte';
	import EditButton from '../../lib/editButton.svelte';

	let addButtonVisible = EditButton;

	function addComponentButton() {
		addButtonVisible = AddComponent;
	}

	function editComponentButton() {
		addButtonVisible = EditComponent;
	}

	function userComponentButton() {
		addButtonVisible = UserComponent;
	}

    const labels = [
		'Titulo',
		'Titulo original',
		'Descrição',
		'Diretor',
		'Estúdio',
		'Produtor',
		'Nota',
		'Tempo de exibição',
		'Data de lancamento'
	];

</script>

<HeaderSecundario />

<section>
	<div class="flex justify-center py-5">
		<div class="w-[90%] rounded-lg px-2 sm:bg-[#75C9C8]">
			<ul class="flex justify-between sm:justify-start gap-10">
				<li>
					<button
						type="button"
						class="p-2 rounded-lg hover:bg-[#75C9C8] sm:hover:bg-[#ffffff]"
						on:click={addComponentButton}
					>
						Adicionar
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

{#if addButtonVisible === AddComponent}
	<AddComponent labels={labels} />
{:else if addButtonVisible === EditComponent}
	<EditComponent labels={labels} />
{:else if addButtonVisible === UserComponent}
	<UserComponent />
{/if}
