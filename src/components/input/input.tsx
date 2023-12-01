import "./style/input.css";

type Props = {
  label?: string;
  placeholder: string;
  type: "email" | "text" | "password" | "number" | "search";
  name: string;
  class?: string;
  style?: {};
  //setState: React.Dispatch<React.SetStateAction<Credentials>>;
  value: string | number;
  setState: React.Dispatch<React.SetStateAction<string | object | any>>;
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
        value={props.value}
        onChange={(e)=> props.setState(e.target.value)}
      />
    </>
  );
};

export default InputJs;
