import LivrosEFilmesDefinidos from "./LivrosEFilmesDefinidos";
import Navegacao from "./Navegacao";

const LivrosForm = () => {
	const adicionaLivro = () => {
		const input = document.getElementById("livro") as any;
		if (input.value.trim() === "") return;
		dispatchEvent(
			new CustomEvent("livro_registrado", {
				detail: {
					nomeDoLivro: input.value,
				},
			})
		);
		input.value = "";
	};
	return (
		<>
			<Navegacao />
			<h3>Digite aqui os LIVROS que deseja ler</h3>
			<input
				type='text'
				id='livro'
				onKeyUp={(e) => e.key === "Enter" && adicionaLivro()}
			/>
			<button
				onClick={(e) => {
					adicionaLivro();
				}}
			>
				Enviar
			</button>
		</>
	);
};

export default LivrosForm;
