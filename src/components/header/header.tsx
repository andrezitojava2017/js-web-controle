import "./style/header.css";

const Header = () => {
  return (
    <header className="container-header">
      <div className="logo">
        <h3>JS Web Controle</h3>
        <span className="subtitle">Tec. em Desenvolvimento</span>
      </div>
      <div className="container-menu">
        <div className="dropdown">
          <span className="menu">Solicitação</span>
          <div className="dropdown-content">
            <p>Nova solicitação</p>
            <p>Listar</p>
            <p>Cad. Secretaria</p>
            <p>Cad. Departamento</p>
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
            <p >Novo Produto</p>
            <p >Listar Produtos</p>
          </div>
        </div>
        {/*
        <ul>
          <li>Solicitação
            <div className="dropdown">
              <span>elemtno</span><br></br>
              <span>elemtno</span>
            </div>
          </li>
          <li>Movimentos</li>
          <li>Produtos</li>
        </ul>
  */}
      </div>
      <div>
        <span className="name-user">Jederson Andre</span>
      </div>
    </header>
  );
};

export default Header;
