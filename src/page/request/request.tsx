import { useState, useEffect } from "react";
import InputJs from "../../components/input/input";
import "./style/request.css";
import { FaCheckSquare } from "react-icons/fa";
import { supabase } from "../../api/supabase";
import { allSecretaries, maxSolicitation } from "../../services/requests";
import { allDepartaments } from "../../services/departaments";

const Request = () => {
  type ItemPedidoProps = {
    produto: string;
    quantidade: number;
    unidade: string;
  };

  type Secretarias = {
    idsecretarias: number;
    descricao: string;
  };
  type Departamentos = {
    id:number,
    descricao:string
  }

  const [listaSecretaria, setListaSecretarias] = useState<Secretarias[]>([]);
  const [solicitacao, setSolicitacao] = useState<string>("");
  const [dataPedido, setDataPedido] = useState<string>("");
  const [usuario, setUsuario] = useState<string>("");
  const [secretaria, setSecretaria] = useState<string>("");
  const [departamento, setDepartamento] = useState<Departamentos[]>([]);
  const [itensPedido, setItensPedido] = useState<ItemPedidoProps>({
    produto: "",
    quantidade: 0,
    unidade: "",
  });
  const [listaItensPedido, setListaItensPedido] = useState<ItemPedidoProps[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const data = await allSecretaries();
      if (data) {
        setListaSecretarias(data);
      }
    })();
  }, []);


  const selectDepartament = async (e: any) => {
    let rs = await allDepartaments(e.target.value);
    if (rs) {
      setDepartamento(rs);
    }
  
  };

  const adicionaNovoItemALista = () => {
    const itens: ItemPedidoProps = {
      produto: itensPedido.produto,
      quantidade: itensPedido.quantidade,
      unidade: itensPedido.unidade,
    };

    setListaItensPedido([...listaItensPedido, itens]);

    console.log(listaItensPedido);
  };

  return (
    <div className="cont_request">
      <div className="form_request">
        <div>
          <p>Solicitação</p>
          <InputJs
            disable={true}
            name="solicitacao"
            type="text"
            value={solicitacao}
            setState={setSolicitacao}
            style={{ width: "150px" }}
          />
        </div>
        <div>
          <p>Data</p>
          <InputJs
            placeholder="dd/MM/AAAA"
            name="data"
            type="date"
            value={dataPedido}
            setState={setDataPedido}
          />
        </div>
        <div>
          <p>Usuario</p>
          <InputJs
            placeholder="responsavel"
            name="usuario"
            type="text"
            value={usuario}
            setState={setUsuario}
          />
        </div>
      </div>

      <div className="form_request">
        <div>
          <p>Secretaria</p>
          <select
            style={{ width: "auto" }}
            onChange={(e) => selectDepartament(e)}
          >
            {listaSecretaria.map((secretaria, index) => (
              <option key={index} value={secretaria.idsecretarias}>
                {secretaria.descricao}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Departamento</p>
          <select onChange={(e)=>console.log(e.target.value)}>
          {departamento.map((departamento, index) => (
              <option key={index} value={departamento.id}>
                {departamento.descricao}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="itens-pedido-request">
        <h3>ITENS DO PEDIDO</h3>
        <div style={{ display: "flex" }}>
          <InputJs
            name="buscarItem"
            placeholder="Selecionar produto"
            type="search"
            style={{ width: "35rem" }}
            value={itensPedido.produto}
            setState={(newValue) =>
              setItensPedido({ ...itensPedido, produto: newValue })
            }
          />
          <InputJs
            name="qtd"
            placeholder="QTD"
            type="number"
            style={{ width: "6rem" }}
            value={itensPedido.quantidade}
            setState={(newValue) =>
              setItensPedido({ ...itensPedido, quantidade: newValue })
            }
          />
          <InputJs
            name="und"
            placeholder="UND"
            type="text"
            style={{ width: "6rem" }}
            value={itensPedido.unidade}
            setState={(newValue) =>
              setItensPedido({ ...itensPedido, unidade: newValue })
            }
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={adicionaNovoItemALista}
          >
            <FaCheckSquare size={40} color={"green"} />
          </span>
        </div>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => console.log(listaSecretaria)}
        >
          <FaCheckSquare size={40} color={"green"} />
        </span>
      </div>
    </div>
  );
};

export default Request;
