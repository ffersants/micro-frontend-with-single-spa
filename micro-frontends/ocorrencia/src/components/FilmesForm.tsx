import { Link } from "react-router-dom";
import LivrosEFilmesDefinidos from "./LivrosEFilmesDefinidos";
import Navegacao from "./Navegacao";

const FilmesForm = () => {
	const adicionaFilme = () => {
		const input = document.getElementById("filme") as any;
		if (input.value.trim() === "") return;
		dispatchEvent(
			new CustomEvent("filme_registrado", {
				detail: {
					nomeDoFilme: input.value,
				},
			})
		);
		input.value = "";
	};

	return (
		<>
			<Navegacao />
			<h3>Digite aqui os FILMES que deseja assistir</h3>
			<input
				type='text'
				id='filme'
				onKeyUp={(e) => e.key === "Enter" && adicionaFilme()}
			/>

			<button
				onClick={(e) => {
					adicionaFilme();
				}}
			>
				Enviar
			</button>
		</>
	);
};

export default FilmesForm;
