import { useEffect, useState } from "react"
import CarregaListaFilmes from "./CarregaListaFilmes"
import CarregaListaLivros from "./CarregaListaLivros"

const CarregaListas = () => {
	const [livros, setLivros] = useState([]);

    return(
        <>
            <CarregaListaFilmes />
            <CarregaListaLivros />
        </>
    )
}

export default CarregaListas