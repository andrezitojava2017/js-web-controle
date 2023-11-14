import ButtonJs from "../../components/button/button";
import InputJs from "../../components/input/input";
import Select from "../../components/input/select";
import "./style/departament.css";

const Departament = () => {
  return (
    <div className="content">
      <section>
        <h3
          style={{ textAlign: "center", padding: "0.8rem", color: "#575353" }}
        >
          CADASTRO DE DEPARTAMENTOS
        </h3>
      </section>

      <section>
        <Select style={{ width: "30em" }} label="Secretaria" />
      </section>
      <section>
        <InputJs
          label="Departamento:"
          name="departamento"
          placeholder="Descrição"
          type="text"
          style={{ width: "30em" }}
        />
      </section>

      <section>
        <ButtonJs value="Salvar" class={"btn"} />
      </section>

    </div>
  );
};

export default Departament;
