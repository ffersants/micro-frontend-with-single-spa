import { useEffect, useState } from "react";

const CarregaListaFilmes = () => {
	const [filmes, setFilmes] = useState<Array<string>>([""]);

	useEffect(() => {
		window.addEventListener("filme_registrado", (payload) => {
            const {nomeDoFilme} = (payload as any).detail 
            setFilmes([...filmes, nomeDoFilme]);
		});
	}, []);

	return (
		<>
			<h3>Filmes</h3>
			<ul>
				{filmes.map((filme) => {
					return <li key={Math.random()}>{filme}</li>;
				})}
			</ul>
		</>
	);
};

export default CarregaListaFilmes;
