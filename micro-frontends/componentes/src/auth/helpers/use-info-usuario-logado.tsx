import { useAuth } from "react-oidc-context";
import jwt_decode from "jwt-decode";

type TokenPayload = {
	sub: string; //matrícula do usuário
	name: string;
	matricula8Digitos: string;
	codigoOrgaoExercicio: string;
	unidade: string;
	cargo: string;
};

const useInfoUsuarioLogado = () => {
	const auth = useAuth();

	const tokenPayload =
		auth.user?.access_token && jwt_decode(auth.user.access_token) as any;

	return {
		nomeUsuario: tokenPayload.name,
		matriculaUsuario: tokenPayload.sub,
	
	};
};

export default useInfoUsuarioLogado;
