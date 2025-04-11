import {Link} from 'react-router-dom'


function Contato(){
    return(
        <div>
            <h1>Página de Contato</h1>
            <span>Contatdo da empre (dd)xxxxx-xxxx</span>

            <br/><br/>
            <Link to ="/">Home</Link><br/><br/>
            <Link to ="/sobre">Sobre</Link>
            
        </div>
    )
}

export default Contato;