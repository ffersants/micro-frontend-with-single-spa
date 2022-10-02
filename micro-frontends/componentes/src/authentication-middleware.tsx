import { useEffect } from "react";
import { hasAuthParams, useAuth } from "react-oidc-context";
import { BrowserRouter, Switch } from "react-router-dom";
import { Loader } from "rsuite";
import App from "./App";
import AuthContext from "./infra/auth/auth-context";

const AuthenticationMiddleware = () => {
	const auth = useAuth();
	// automatically sign-in
	useEffect(() => {
		if (!hasAuthParams() && !auth.isAuthenticated && !auth.isLoading) {
			auth.signinRedirect();
		}

		if (!auth.isAuthenticated && !auth.isLoading) {
			auth.signinRedirect();
		}
		if (auth.user === null) auth.signinRedirect();
	}, [auth, auth.user, auth.isAuthenticated, auth.isLoading]);

	if (auth.activeNavigator) {
		return <Loader content='Carregando...' size="lg" center vertical />;
	}
	if (!auth.isAuthenticated && auth.isLoading) {
		return <Loader content='Carregando...' size="lg" center vertical />;
	}

	if (!auth.isAuthenticated && !auth.isLoading) {
		return <Loader content='Carregando...' size="lg" center vertical />;
	}

	return (
		<BrowserRouter>
			<Switch>
				<AuthContext>
					<App />
				</AuthContext>
			</Switch>
		</BrowserRouter>
	);
};

export default AuthenticationMiddleware;
