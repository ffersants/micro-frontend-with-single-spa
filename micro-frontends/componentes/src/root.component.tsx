import { AuthProvider } from "react-oidc-context";
import AuthenticationMiddleware from "./authentication-middleware";
import { oidcConfig } from "./infra/auth/oidc-config";

export default function Root(props) {
	return (
		<AuthProvider {...oidcConfig}>
			<AuthenticationMiddleware/>
		</AuthProvider>
	);
}