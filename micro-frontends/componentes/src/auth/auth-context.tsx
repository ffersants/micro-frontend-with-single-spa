import { createContext, useEffect, useState } from "react";
import useInfoUsuarioLogado from "./helpers/use-info-usuario-logado";

type AuthenticatedUser = {
	userName: string;
	userMatricula: string;
};

type AuthContextData = {
	user: AuthenticatedUser | undefined;
};

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: any) {
	const { matriculaUsuario, nomeUsuario } = useInfoUsuarioLogado();
	const [user, setUser] = useState<AuthenticatedUser>({
		userMatricula: "022985",
		userName: "Fernando"
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
