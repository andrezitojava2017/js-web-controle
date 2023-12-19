import { useState, useEffect } from "react";
import ButtonJs from "../../components/button/button";
import InputJs from "../../components/input/input";
import "./style/departament.css";
import MessageSnack from "../../components/messageSnack/messageSnack";
import { allSecretaries } from "../../services/requests";
import { addDepartament } from "../../services/departaments";

const Departament = () => {
  type Secretariat = {
    idsecretarias: number;
    descricao: string;
  };

  type SnackType = {
    type: string;
    message: string;
  };
  const [listaSecretariat, setListSecretariat] = useState<Secretariat[]>([]);
  const [select, setSelect] = useState<string>("");
  const [departament, setDepartament] = useState<string>("");
  const [openSnack, setOpenSnack] = useState<boolean>(false);
  const [snack, setSnack] = useState<SnackType>({ type: "", message: "" });

  useEffect(() => {
    (async () => {
      const rs = await allSecretaries();
      if (rs) {
        setListSecretariat(rs);
      }
    })();
  });

  const validateForm = () => {
    if (select === "" || select === null) {
      throw new Error("Atenção a secretaria é Obrigatorio!");
    }
    if (departament === "" || departament === null) {
      throw new Error("Atenção Preencha o campo Descrição!");
    }
  };

  const newDepartament = async () => {
    try {
      validateForm();

      const rs = await addDepartament({
        descricao: departament.toLocaleUpperCase(),
        id_secretaria: select,
      });

      if (rs) {
        setSnack({
          type: "success",
          message: "Departamento inserido com sucesso!!",
        });
        setOpenSnack(true);
      }
    } catch (error: any) {
      setSnack({ type: "error", message: error.message });
      setOpenSnack(true);
    }
  };

  return (
    <div className="content-departament">
      <section>
        <h3
          style={{ textAlign: "center", padding: "0.8rem", color: "#575353" }}
        >
          CADASTRO DE DEPARTAMENTOS
        </h3>
      </section>

      <section>
        <p>Secretaria:</p>
        <select
          required={true}
          style={{ width: "auto" }}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value={""}></option>
          {listaSecretariat.map((secretaria, index) => (
            <option key={index} value={secretaria.idsecretarias}>
              {secretaria.descricao}
            </option>
          ))}
        </select>
      </section>

      <section>
        <InputJs
          value={departament}
          setState={setDepartament}
          label="Departamento:"
          name="departamento"
          placeholder="Descrição"
          type="text"
          style={{ width: "30em" }}
        />
      </section>

      <section>
        <ButtonJs value="Salvar" class={"btn"} onClick={newDepartament} />
      </section>

      <MessageSnack
        message={snack.message}
        open={openSnack}
        type={snack.type}
        onClose={() => setOpenSnack(false)}
      />
    </div>
  );
};

export default Departament;
