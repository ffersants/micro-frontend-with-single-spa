import Parsel from "single-spa-react/parcel"

const LivrosEFilmesDefinidos = () => {
    console.log("parsel rodou de novo")
    return (
        <>
            <Parsel 
                config={() => (System.import("@pcdf/protocolo") as any)}
            />
        </>
    )
}

export default LivrosEFilmesDefinidos