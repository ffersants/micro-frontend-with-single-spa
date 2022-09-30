import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import FilmesForm from "./components/FilmesForm";
import LivrosForm from "./components/LivrosForm";
import { useEffect } from 'react';
import LivrosEFilmesDefinidos from "./components/LivrosEFilmesDefinidos";
const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/ocorrencia' exact component={FilmesForm} />
				<Route path='/ocorrencia/filmes' exact component={FilmesForm} />
				<Route path='/ocorrencia/livros' exact component={LivrosForm} />
			</Switch>
			<LivrosEFilmesDefinidos />
		</BrowserRouter>
	);
};

export default Router;
