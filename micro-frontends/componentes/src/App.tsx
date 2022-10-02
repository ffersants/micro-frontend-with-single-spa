import Parsel from "single-spa-react/parcel";
import Layout from "./presentation/components/layout/layout";
import 'rsuite/styles/index.less';// or 'rsuite/dist/styles/rsuite-default.css'
import "./presentation/assets/global.css";
const App = () => {
	const params = window.location.pathname;
	return (
		<Layout>
			<>
				{/* {params.startsWith("/protocolo") && (
					<Parsel config={() => System.import("@pcdf/protocolo") as any} />
				)}
				{params.startsWith("/ocorrencia") && (
					<Parsel config={() => System.import("@pcdf/ocorrencia") as any} />
				)}
				{params === "/" && (
					<Parsel config={() => System.import("@pcdf/ocorrencia") as any} />
				)} */}

				{(params === "/" || params.startsWith("/ocorrencia")) && <Parsel config={() => System.import("@pcdf/pcdf-ocorrencia-react") as any} />}
				{params.startsWith("/ditec-ajuda") && <Parsel config={() => System.import("@pcdf/ditec-ajuda") as any} />}
			</>
		</Layout>
	);
};

export default App;
