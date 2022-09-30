import { useEffect, useState } from "react";

const CarregaListaLivros = () => {
	const [livros, setLivros] = useState<Array<string>>([""]);

	useEffect(() => {
		window.addEventListener("livro_registrado", (payload) => {
			const {nomeDoLivro} = (payload as any).detail 
			setLivros([...livros, nomeDoLivro]);
		});
	}, []);

	return (
		<>
			<h3>Livros</h3>
			<ul>
				{livros.map((livro) => {
					return <li key={Math.random()}>{livro}</li>;
				})}
			</ul>
		</>
	);
};

export default CarregaListaLivros;
