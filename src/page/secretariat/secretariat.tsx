import ButtonJs from "../../components/button/button";
import InputJs from "../../components/input/input";
import "./style/secretariat.css";

const Secretariat = () => {
  return (
    <div className="content">
      <h3 style={{ textAlign: "center", padding: "0.8rem", 'color': '#575353'}}>
        CADASTRO DE SECRETARIAS
      </h3>
      <div className="formulario">
        <div>
          <span>Descrição:</span>
          <InputJs
            name="secretaria"
            type="text"
            placeholder="Digite nome da secretaria"
            style={{ marginLeft: "0.8rem", width:'30em' }}
          />
        </div>
      </div>
      <div className="button">
        <ButtonJs value="Salvar" class={'btn'} style={{'backgroundColor':'#1E1D59'}}/>
      </div>
    </div>
  );
};

export default Secretariat;
