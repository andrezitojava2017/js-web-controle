import "./style/input.css";

const InputJs = (props: {
  placeholder: string;
  type: "email" | "text" | "password" | "number";
  name: string;
  class?: string;
}) => {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      className={props.class}
    />
  );
};

export default InputJs;
