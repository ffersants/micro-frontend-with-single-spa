import { WebStorageStateStore } from "oidc-client-ts";
import { AuthProviderProps } from "react-oidc-context";

export const oidcConfig: AuthProviderProps = {
	redirect_uri: "http://ditec112805:3000/authentication/callback",
	silent_redirect_uri: "http://ditec112805:3000/authentication/silent-callback",
	authority: "https://accountsdesenv.pcdf.gov.br",
	client_id: "graphql_swagger",
	scope: "graphql_api",
	userStore: new WebStorageStateStore({
		store: localStorage,
	}),
	onSigninCallback: (e) => {
		window.history.replaceState({}, '', "/");
	},
};
