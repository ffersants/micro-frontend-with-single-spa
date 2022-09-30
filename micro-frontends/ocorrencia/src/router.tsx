import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import FilmesForm from "./components/FilmesForm";
import LivrosForm from "./components/LivrosForm";
const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/ocorrencia' exact component={FilmesForm} />
				<Route path='/ocorrencia/filmes' exact component={FilmesForm} />
				<Route path='/ocorrencia/livros' exact component={LivrosForm} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
