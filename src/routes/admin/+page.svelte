<script>
    import pageIcon from "../../lib/assets/page-icon.svg"
    import penIcon from "../../lib/assets/pen-icon.svg"
    import userIcon from "../../lib/assets/user-icon.svg"
</script>

<div class="h-dvh flex-col"> 
    <div class="h-[15rem] flex bg-gray-500 items-center justify-center md:w-[15rem] pt-8 p-4 md:h-full md:justify-start md:flex-col">
        <div class="group md:w-full">
            <button class="w-[8rem] md:w-full group-hover:bg-slate-200 rounded-md">
                <div class="w-full h-[4rem] flex">
                    <div class="w-[6rem] flex justify-center">
                        <img class="w-[40px]" src="{pageIcon}" alt="">
                    </div>
                    <div class="flex items-center justify-start w-full h-full md:justify-start">
                        <span class="text-white group-hover:text-slate-800 md:p-4">Adicionar</span>
                    </div>
                </div>
            </button>
        </div>
        <div class="group md:w-full">
            <button class="w-[8rem] md:w-full group-hover:bg-slate-200 rounded-md">
                <div class="w-full h-[4rem] flex">
                    <div class="w-[6rem] flex justify-center">
                        <img class="w-[40px]" src="{penIcon}" alt="">
                    </div>
                    <div class="flex items-center justify-start w-full h-full md:justify-start">
                        <span class="text-white group-hover:text-slate-800 md:p-4">Editar</span>
                    </div>
                </div>
            </button>
        </div>
        <div class="group md:w-full">
            <button class="w-[8rem] md:w-full group-hover:bg-slate-200 rounded-md">
                <div class="w-full h-[4rem] flex">
                    <div class="w-[6rem] flex justify-center">
                        <img class="w-[40px]" src="{userIcon}" alt="">
                    </div>
                    <div class="flex items-center justify-start w-full h-full md:justify-start">
                        <span class="text-white group-hover:text-slate-800 md:p-4">Usuários</span>
                    </div>
                </div>
            </button>
        </div>     
    </div>
</div>