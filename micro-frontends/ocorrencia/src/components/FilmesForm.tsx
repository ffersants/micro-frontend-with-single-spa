import { Link } from "react-router-dom";
import LivrosEFilmesDefinidos from "./LivrosEFilmesDefinidos";
import Navegacao from "./Navegacao";

const FilmesForm = () => {
	return (
		<>
			<Navegacao />
			<h3>Digite aqui os filmes que deseja assistir</h3>
			<input type='text' id='filme' />

			<button
				onClick={(e) => {
					const inputVal = (document.getElementById("filme") as any).value;
					dispatchEvent(
						new CustomEvent("filme_registrado", {
							detail: {
								nomeDoFilme: inputVal,
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

export default FilmesForm;
