
export function convertImageToBase64(file, callback) {
	const reader = new FileReader();

	reader.onload = function (e) {
		callback(e.target.result);
	};

	reader.onerror = function () {
		console.error('Erro ao ler o arquivo.');
	};

	reader.readAsDataURL(file);
}

