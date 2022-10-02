import rotas from "./../rotas";
const {
	AutenticacaoCallback,
	ContinuarEscrevendoArtigoSalvo,
	EscreverArtigo,
	Estatisticas,
	GerenciarTags,
	GerenciarUsuarios,
	Home,
	Index,
	LerArtigo,
	PesquisarArtigo,
	Feed
} = rotas;

const perfilLeitor = [AutenticacaoCallback, Index, Home, LerArtigo, PesquisarArtigo, Feed];

const perfilEscritor = [
	...perfilLeitor,
	EscreverArtigo,
	ContinuarEscrevendoArtigoSalvo,
];

const perfilRevisor = [
	...perfilEscritor,
	Estatisticas,
	GerenciarTags,
	GerenciarUsuarios,
];

export default { perfilLeitor, perfilEscritor, perfilRevisor };
