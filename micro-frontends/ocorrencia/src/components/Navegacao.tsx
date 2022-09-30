import { Link } from "react-router-dom";

const Navegacao = () => {
	return (
		<>
			<Link style={{marginRight: "30px"}} to='/ocorrencia/livros'>Cadastrar livros</Link>
			<Link to='/ocorrencia/filmes'>Cadastrar filmes</Link>
		</>
	);
};

export default Navegacao;
