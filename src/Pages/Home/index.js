import {Link} from 'react-router-dom';


function Home() {
    return (
      <div>
        <h1>Bem vindo a a Home</h1>
        <span>Essa é a página inicial do nosso site</span><br/>

        <Link to ="/sobre">Sobre</Link><br/>
        <Link to ="/contato">Contato</Link>

        <hr/>

        <Link to="/produto/12345">Acessar produto 12345</Link>
      </div>
    );
  }
  
  export default Home;
  