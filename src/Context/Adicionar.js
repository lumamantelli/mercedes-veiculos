import { useEffect, useState } from "react"

function adicionarVeiculo(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [veiculos, setVeiculos] = useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/lumamantelli/mercedes-veiculos-api/veiculos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVeiculos(dados)
            })
    }, [])
}


export default adicionarVeiculo