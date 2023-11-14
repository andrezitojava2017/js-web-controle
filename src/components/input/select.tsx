import "./style/input.css";

type Props = {
  label: string;
  style: {};
};

const Select = (props: Props) => {
  return (
    <>
      <div>
        <label>{props.label}:</label>
      </div>
      <select
        name="lista-secretaria"
        onChange={(text) => console.log(text.currentTarget.value)}
        style={{ ...props.style }}
      >
        <option>TEXTO 1</option>
        <option>TEXTO 2</option>
        <option>TEXTO 3</option>
        <option>TEXTO 4</option>
      </select>
    </>
  );
};

export default Select;
