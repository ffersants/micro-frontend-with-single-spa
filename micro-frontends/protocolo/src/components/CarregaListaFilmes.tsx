import { useEffect, useState } from "react";

const CarregaListaFilmes = () => {
	const [listaInterna, setListaInterna] = useState([])

	window.addEventListener("filme_registrado", (payload) => {
		const {nomeDoFilme} = (payload as any).detail 
		setListaInterna([...listaInterna, nomeDoFilme])
	});

	return (
		<>
			<h3>Filmes</h3>
			<ul>
				{listaInterna.map((filme) => {
					return <li key={Math.random()}>{filme}</li>;
				})}
			</ul>
		</>
	);
};

export default CarregaListaFilmes;
