import Parsel from "single-spa-react/parcel";
import Layout from "./presentation/components/layout/layout";
import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'

const App = () => {
	const params = window.location.pathname;

	console.log('rodeeeei');

	return (
		<Layout>
			<>
				{params.startsWith("/protocolo") && (
					<Parsel config={() => System.import("@pcdf/protocolo") as any} />
				)}
				{params.startsWith("/ocorrencia") && (
					<Parsel config={() => System.import("@pcdf/ocorrencia") as any} />
				)}
				{params === "/" && (
					<Parsel config={() => System.import("@pcdf/ocorrencia") as any} />
				)}
			</>
		</Layout>
	);
};

export default App;
