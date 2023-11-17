import InputJs from "../../components/input/input";
import "./style/request.css";
import { FaCheckSquare } from "react-icons/fa";
import { supabase } from "../../api/supabase";

const Request = () => {

  const api = async () => {
    
    supabase
      .from("countries")
      .select()
      .then((rs: { data: any }) => {
        console.log(rs.data);
      });
  };

  return (
    <div className="content">
      <div className="formulario">
        <div>
          <p>Solicitação</p>
          <InputJs placeholder="001/2023" name="solicitacao" type="text" />
        </div>
        <div>
          <p>Data</p>
          <InputJs placeholder="001/2023" name="solicitacao" type="text" />
        </div>
        <div>
          <p>Usuario</p>
          <InputJs placeholder="001/2023" name="solicitacao" type="text" />
        </div>
      </div>

      <div className="formulario">
        <div>
          <p>Secretaria</p>
          <InputJs placeholder="001/2023" name="solicitacao" type="text" />
        </div>
        <div>
          <p>Departamento</p>
          <InputJs placeholder="001/2023" name="solicitacao" type="text" />
        </div>
      </div>

      <div className="itens-pedido">
        <h3>ITENS DO PEDIDO</h3>
        <div style={{ display: "flex" }}>
          <InputJs
            name="buscarItem"
            placeholder="Selecionar produto"
            type="search"
            style={{ width: "35rem" }}
          />
          <InputJs
            name="qtd"
            placeholder="QTD"
            type="number"
            style={{ width: "6rem" }}
          />
          <InputJs
            name="und"
            placeholder="UND"
            type="text"
            style={{ width: "6rem" }}
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={api}
          >
            <FaCheckSquare size={40} color={"green"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Request;
