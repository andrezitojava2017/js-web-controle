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
        <Select />
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
        <InputJs
          label="Local:"
          name="local"
          placeholder="ex: PSF, subprefeitura"
          type="text"
          style={{ width: "30em" }}
        />
      </section>

      {/* 
      <div className="formulario">
        <div>
          <Select />
        </div>
      </div>
      <div className="formulario">
        <InputJs
          label="Departamento:"
          name="departamento"
          placeholder="Descrição"
          type="text"
          style={{ width: "30em" }}
        />
      </div>
      <div className="formulario">
        <InputJs
          label="Local:"
          name="local"
          placeholder="ex: PSF, subprefeitura"
          type="text"
          style={{ width: "30em" }}
        />
      </div>
      <div className="button">
        <ButtonJs
          value="Salvar"
          class={"btn"}
          style={{ backgroundColor: "#1E1D59" }}
        />
      </div>
  */}
    </div>
  );
};

export default Departament;
