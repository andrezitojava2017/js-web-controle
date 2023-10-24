import "./style/header.css";

const Header = () => {
  return (
    <header className="container-header">
      <div className="logo">
        <h3>JS Web Controle</h3>
        <span className="subtitle">Tec. em Desenvolvimento</span>
      </div>
      <div className="container-menu">
        <ul>
          <li>Solicitação</li>
          <li>Movimentos</li>
          <li>Produtos</li>
        </ul>
      </div>
      <div>
        <span className="name-user">Jederson Andre</span>
      </div>
    </header>
  );
};

export default Header;
