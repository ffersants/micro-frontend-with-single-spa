import Parsel from "single-spa-react/parcel";

const LivrosEFilmesDefinidos = () => {
  return (
    <>
      <Parsel config={() => System.import("@pcdf/protocolo") as any} />
    </>
  );
};

export default LivrosEFilmesDefinidos;
