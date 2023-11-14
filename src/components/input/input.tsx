import "./style/input.css";

type Props = {
  label?: string;
  placeholder: string;
  type: "email" | "text" | "password" | "number" | "search";
  name: string;
  class?: string;
  style?: {};
};

const InputJs = (props: Props) => {
  return (
    <>
      <div>
        <label>{props.label}</label>
      </div>
      <input
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        className={props.class}
        style={{ ...props.style }}
      />
    </>
  );
};

export default InputJs;
