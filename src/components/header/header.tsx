import "./style/header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-header">
      <div className="logo">
        <h3>Web Controle</h3>
        {/*<span className="subtitle">Tec. em Desenvolvimento</span>*/}
      </div>
      <div className="container-menu">
        <div className="dropdown">
          <span className="menu">Solicitação</span>
          <div className="dropdown-content">
            
            <p><Link to="/novo/solicitacao">Solicitação</Link></p>          
            <p><Link to="/novo/secretaria">Cad. Secretaria</Link></p>
            <p><Link to="/novo/departamento">Cad. Departamento</Link></p>
            <p className="sub-menu">Listar</p>
          </div>
        </div>

        <div className="dropdown">
          <span className="menu">Movimentos</span>
          <div className="dropdown-content">
            <p>Entrada de Produto</p>
            <p>Saida de Produto</p>
          </div>
        </div>

        <div className="dropdown">
          <span className="menu">Produtos</span>
          <div className="dropdown-content">
            <p><Link to={'/novo/produto'} >Novo Produto</Link></p>
            <p>Listar Produtos</p>
          </div>
        </div>
      </div>
      <div>
        <span className="name-user">Jederson Andre</span>
      </div>
    </header>
  );
};

export default Header;
