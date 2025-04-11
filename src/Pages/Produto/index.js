import {useParams} from 'react-router-dom' // useParams é um hook do react-router-dom que permite acessar os parâmetros da URL

function Produto(){
    const {id} = useParams()
    return(
        
        <div>
            <h2>Página detalhe do produto</h2>
            <spam>
                Meu produto é { id } <br/>
            </spam>
            </div>
    )
}

export default Produto;