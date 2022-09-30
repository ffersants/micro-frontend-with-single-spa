import { useEffect, useState } from "react";

const CarregaListaLivros = () => {
	const [listaInterna, setListaInterna] = useState([])

	window.addEventListener("livro_registrado", (payload) => {
		const {nomeDoLivro} = (payload as any).detail 
		setListaInterna([...listaInterna, nomeDoLivro])
	});

	return (
		<>
			<h3>Livros</h3>
			<ul>
				{listaInterna.map((livro) => {
					return <li key={Math.random()}>{livro}</li>;
				})}
			</ul>
		</>
	);
};

export default CarregaListaLivros;
