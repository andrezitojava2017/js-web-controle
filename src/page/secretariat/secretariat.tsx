import { useState } from "react";
import ButtonJs from "../../components/button/button";
import InputJs from "../../components/input/input";
import "./style/secretariat.css";
import { addSeretariat } from "../../services/secretariat";
import MessageSnack from "../../components/messageSnack/messageSnack";

const Secretariat = () => {
  const [secretaria, setSecretaria] = useState<string>("");
  const [openSnack, setOpenSnack] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const newSecretariat = async () => {
    try {
      const rs = await addSeretariat(secretaria);
      if (rs) {
        setMessage(rs);
        setOpenSnack(true);
      }
    } catch (error: any) {
      setMessage(error);
      setOpenSnack(true);
    }
  };

  return (
    <div className="content-secretariat">
      <h3 style={{ textAlign: "center", padding: "0.8rem", color: "#575353" }}>
        CADASTRO DE SECRETARIAS
      </h3>
      <div className="formulario">
        <div>
          <InputJs
            value={secretaria}
            setState={setSecretaria}
            label="Descrição"
            name="secretaria"
            type="text"
            placeholder="Digite nome da secretaria"
            style={{ width: "30em" }}
          />
        </div>
      </div>
      <div className="button">
        <ButtonJs
          value="Salvar"
          class={"btn"}
          style={{ backgroundColor: "#1E1D59" }}
          onClick={newSecretariat}
        />
      </div>
      <MessageSnack
        message={message}
        open={openSnack}
        type="success"
        onClose={() => setOpenSnack(false)}
      />
    </div>
  );
};

export default Secretariat;
