import InputJs from "../../components/input/input";
import "./style/order.css";
import { FaCheckSquare } from "react-icons/fa";

const Order = () => {
  return (
    <div className="content">
      <div className="formulario">
        <div>
          <InputJs
            label="Solicitação"
            placeholder="selecione um pedido"
            name="buscar"
            type="text"
            style={{ padding: "8px" }}
          />
        </div>

        <div>
          <InputJs
            label="Data de entrega"
            placeholder="dd/MM/AAAA"
            name="data-recebimento"
            type="text"
            style={{ padding: "8px" }}
          />
        </div>
      </div>

      <div className="formulario">
        <div>
      
          <InputJs
          label="Fornecedor"
            placeholder="Nome do fornecedor"
            name="fornecedor"
            type="text"
            style={{ padding: "8px" }}
          />
        </div>
        <div>
          <InputJs
          label="NF-e"
            placeholder="Nota Fiscal"
            name="nfe"
            type="text"
            style={{ padding: "8px", whidth: "60px"}}
          />
        </div>
      </div>

      <div className="itens-pedido">
        <h3>ITENS DO PEDIDO</h3>
        <div style={{ display: "flex" }}>
          <InputJs
            name="itens-pedido-selecionado"
            placeholder="Descrição do produto"
            type="search"
            style={{ width: "35rem", }}
          />
          <InputJs
            name="qtd"
            placeholder="QTD"
            type="number"
            style={{ width: "6rem",  }}
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
            onClick={() => console.log("item inserido")}
          >
            <FaCheckSquare size={40} color={"green"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Order;
