import { createContext, useState } from "react";
import useInfoUsuarioLogado from "./helpers/use-info-usuario-logado";

type AuthenticatedUser = {
	userMatricula: string;
	userName: string;
};

type AuthContextData = {
	user: AuthenticatedUser | undefined;
};

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: any) {
	const { matriculaUsuario, nomeUsuario } = useInfoUsuarioLogado();
	const [user, setUser] = useState<AuthenticatedUser>({
		userName: nomeUsuario,
		userMatricula: matriculaUsuario
	});

	return (
		<AuthContext.Provider
			value={{
				user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
