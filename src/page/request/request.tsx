import { useState, useEffect } from "react";
import InputJs from "../../components/input/input";
import "./style/request.css";
import { FaCheckSquare, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { supabase } from "../../api/supabase";
import { allSecretaries, maxSolicitation } from "../../services/requests";
import { allDepartaments } from "../../services/departaments";
import { infoSession } from "../../services/auth";
import InputSearch from "../../components/search/search";

const Request = () => {
  type ItemPedidoProps = {
    id: number | string;
    produto: string;
    quantidade: number;
    unidade: string;
  };

  type Secretarias = {
    idsecretarias: number;
    descricao: string;
  };
  type Departamentos = {
    id: number;
    descricao: string;
  };

  const [listaSecretaria, setListaSecretarias] = useState<Secretarias[]>([]);
  const [solicitacao, setSolicitacao] = useState<string>("");
  const [dataPedido, setDataPedido] = useState<string>("");
  const [usuario, setUsuario] = useState<string>("");
  const [secretaria, setSecretaria] = useState<string>("");
  const [departamento, setDepartamento] = useState<Departamentos[]>([]);
  const [itensPedido, setItensPedido] = useState<ItemPedidoProps>({
    id: 0 || "string",
    produto: "",
    quantidade: 0,
    unidade: "",
  });
  const [listaItensPedido, setListaItensPedido] = useState<ItemPedidoProps[]>(
    []
  );

  const deleteItem = (index: number) => {
    const updatedList = listaItensPedido.filter((_, i) => i !== index);
    setListaItensPedido(updatedList);
  };

  useEffect(() => {
    (async () => {
      const session = await infoSession();
      const data = await allSecretaries();
      if (data) {
        setListaSecretarias(data);
        setUsuario(session?.user_metadata.nome);
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
      id: itensPedido.id,
      produto: itensPedido.produto,
      quantidade: itensPedido.quantidade,
      unidade: itensPedido.unidade,
    };

    setListaItensPedido([...listaItensPedido, { ...itens }]);
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
            disable={true}
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
          <select onChange={(e) => console.log(e.target.value)}>
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

        <div style={{ display: "flex", padding: "0.6rem" }}>
          <InputSearch setState={setItensPedido} value={itensPedido.produto} />

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
            <FaCheckSquare size={30} color={"green"} />
          </span>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DESCRIÇÃO</th>
            <th>QTD</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listaItensPedido.length !== 0 ? (
            listaItensPedido.map((iten, index) => (
              <tr key={index}>
                <td>{iten.id}</td>
                <td>{iten.produto}</td>
                <td>{iten.quantidade}</td>

                <td className="options-table" onClick={() => deleteItem(index)}>
                  <MdDelete size={20} color={"red"} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Nenhum Produto foi adicionado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Request;
