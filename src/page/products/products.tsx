import { useState } from "react";
import ButtonJs from "../../components/button/button";
import InputJs from "../../components/input/input";
import "./style/products.css";
import MessageSnack from "../../components/messageSnack/messageSnack";
import { addProduct } from "../../services/products";

const Produtcs = () => {
  type Snack = {
    type: string;
    message: string;
  };

  const [produto, setProduto] = useState<string>("");
  const [openSnack, setOpenSnack] = useState<boolean>(false);
  const [snack, setSnack] = useState<Snack>({ type: "", message: "" });

  const saveProduct = async () => {
    try {
      const rs = await addProduct(produto);
      if (rs) {
        setSnack({
          message: "Produto adicionado com sucesso!",
          type: "success",
        });
        setOpenSnack(true);
      }
    } catch (error: any) {
      setSnack({ type: "error", message: error.message });
      setOpenSnack(true);
    }
  };

  return (
    <div className="content">
      <h3 style={{ textAlign: "center", padding: "0.8rem", color: "#575353" }}>
        CADASTRO DE PRODUTOS
      </h3>
      <div className="formulario">
        <div>
          <InputJs
            value={produto}
            setState={setProduto}
            label="Descrição"
            name="produto"
            type="text"
            placeholder="Descreva o produto"
            style={{ width: "30em" }}
          />
        </div>
      </div>
      <div className="button">
        <ButtonJs
          value="Salvar"
          class={"btn"}
          style={{ backgroundColor: "#1E1D59" }}
          onClick={saveProduct}
        />
      </div>
      <MessageSnack
        message={snack.message}
        open={openSnack}
        type={snack.type}
        onClose={() => setOpenSnack(false)}
      />
    </div>
  );
};

export default Produtcs;
