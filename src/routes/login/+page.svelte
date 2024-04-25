
<script>
    import HeaderSecundario from "$lib/headerSecundario.svelte";
    import googleLogo from "$lib/assets/google-logo.svg";
    import Logo from "$lib/assets/Logo.png";
    import mascote from "$lib/assets/mascote_login.svg";
    import Cookies from 'js-cookie'
    import { goto } from '$app/navigation'
    import { jwtDecode } from 'jwt-decode';
	import { Stethoscope } from "lucide-svelte";

    let name;
    let username;
    let email;
    let password;
    let rePassword;
    let SizeField;
    
    const handleLoginButton = () => {
        const payload = {
                "email": email,
                "password": password
            }

        fetch("http://localhost:5000/api/v1/authenticate", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            Cookies.set("token", data.token)
            const decoded = jwtDecode(data.token)
            goto(`/user/${decoded.user_id}`, {
                replaceState: false,
                
            })
            console.log(data)
        }).catch(error => {
            console.error(error)
        })
    }

</script>

<HeaderSecundario  pagina="login" />

<div class="flex h-svh justify-center items-center mt-0">
    <div class="h-[50%] w-[85%] flex  justify-center shadow-2xl lg:w-[50rem]">
        <div class="hidden sm:bg-[#75C9C8] sm:flex w-full justify-center">

            <div class="">
                <img class="object-fill w-full h-full " src="{mascote}" alt="Descrição da imagem">
            </div>

            <div class="flex flex-col items-center justify-center">
                <img class="w-[300px]" src="{Logo}" alt="">
                <span class="font-hanalei text-sm">Seu acervo de histórias incríveis</span>
            </div>
        </div>

        <div class=" flex flex-col w-full justify-center lg:w-[50rem]">
            <div class="flex justify-center items-center h-[5em]">
                <h3 class="font-hanalei text-3xl">SEJA BEM-VINDO</h3>
            </div>

            <div class="flex flex-col gap-2 items-center">
                <div>
                    <input class="w-[15rem] h-[1.7rem] pl-1 rounded-md shadow-md" bind:value={email} type="email" name="email" id="iusuario" placeholder="Email" required>
                </div>
                <div>
                    <input class="w-[15rem] h-[1.7rem] rounded-md pl-1 shadow-md" bind:value={password} type="password" name="senha" id="isenha" min="8" max="20" placeholder="Senha" required>
                    <div class="flex justify-end pt-[4px]">
                        <a class="text-[11px] hover:underline hover:text-red-800 hover:font-bold text-cyan-800 pr-2" href="#/" id="esqueci-senha">Esqueci minha senha</a>
                    </div>
                </div>
            </div>

            <div class="flex gap-3 items-center justify-center p-5">
                <button class="h-[2rem] w-[5rem] rounded-md bg-green-500 transition transform hover:ease-in duration-300  hover:scale-110">
                    <span class="text-white">login</span>
                </button>
                <button class="flex justify-center gap-1 items-center h-[2rem] w-[5rem] rounded-md bg-red-600 transform hover:ease-in duration-300  hover:scale-110">
                    <div class="">
                        <img class="w-[16px] h-[16px]" src="{googleLogo}" alt="Ícone google">
                    </div>
                    <span class="text-white">login</span>
                </button>
            </div>
        </div>
    </div>
</div>