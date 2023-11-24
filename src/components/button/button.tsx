import "./style/button.css";

type Props = {
  value: string;
  class?: string;
  style?: {};
  onClick?: () => void;
};

const ButtonJs = (props: Props) => {
  return (
    <input
      type="button"
      className={props.class}
      value={props.value}
      style={{ ...props.style }}
      onClick={props.onClick}
    />
  );
};

export default ButtonJs;
