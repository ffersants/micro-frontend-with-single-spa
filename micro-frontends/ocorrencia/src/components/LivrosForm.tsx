import LivrosEFilmesDefinidos from "./LivrosEFilmesDefinidos";
import Navegacao from "./Navegacao";

const LivrosForm = () => {
	return (
		<>
			<Navegacao />
			<h3>Digite aqui os livros que deseja ler</h3>
			<input type='text' id='livro' />
			<button
				onClick={(e) => {
					const inputVal = (document.getElementById("livro") as any).value;
					dispatchEvent(
						new CustomEvent("livro_registrado", {
							detail: {
								nomeDoLivro: inputVal,
							},
						})
					);
				}}
			>
				Enviar
			</button>
			<LivrosEFilmesDefinidos />
		</>
	);
};

export default LivrosForm;
