<script>
	import { onMount } from "svelte";

    let loggedInUsers = ''

    onMount(async () => {
        try{
            const response = await fetch('http://localhost:5000/api/v1/get_loggedin_users');

            if(!response.ok){
                throw new Error('Falha na rede');
            }

            loggedInUsers = await response.json();
            loggedInUsers = loggedInUsers.loggedin;

            console.log(loggedInUsers)

        }catch (error) {
			console.error('Erro ao buscar categorias:', error);
		}
    });

</script>

<div class="flex justify-center py-6">
    <div class="table-container bg-white w-full md:w-[30rem] lg:w-[50rem] rounded-lg shadow-lg overflow-x-auto">
        <table class="min-w-full table-auto text-sm">
            <thead class="bg-gray-100 border-b">
                <tr>
                    <th class="px-3 py-2 text-left text-gray-700 text-xs sm:text-sm">ID</th>
                    <th class="px-3 py-2 text-left text-gray-700 text-xs sm:text-sm">Name</th>
                    <th class="px-3 py-2 text-left text-gray-700 text-xs sm:text-sm">E-mail</th>
                    <th class="px-3 py-2 text-left text-gray-700 text-xs sm:text-sm">Session</th>
                </tr>
            </thead>
            <tbody>

                {#each loggedInUsers as data, index}
                    <tr id='session-{index}' class="hover:bg-gray-50 border-b">
                        <td class="px-3 py-4 text-xs sm:text-sm">{data.user.id}</td>
                        <td class="px-3 py-4 text-xs sm:text-sm">{data.user.name}</td>
                        <td class="px-3 py-4 text-xs sm:text-sm">{data.user.email}</td>
                        <td class="px-3 py-4 text-xs sm:text-sm">{data.id}</td>
                    </tr>
                {/each}
            </tbody>
            <tfoot class="bg-gray-100 border-t">
                <tr>
                    <th colspan="3" class="px-3 py-2 text-left text-gray-700 text-xs sm:text-sm">Calculated Total Weight</th>
                    <td class="px-3 py-4 text-xs sm:text-sm">{loggedInUsers.length}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
