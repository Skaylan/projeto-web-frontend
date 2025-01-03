export const load = (async ({ fetch }) => {
    try {
        const fatchImgData = async () =>{
            const response = await fetch('http://localhost:5000/get/v1/get_image')

            const result = await response.json()
            return result.img
        }

        return {
            img: await fatchImgData()
        }

    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }
})