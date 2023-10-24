import './style/button.css';

const ButtonJs = (props:{value: string, class:string}) => {
  return <input type="button" className={props.class} value={props.value} />;
};

export default ButtonJs;