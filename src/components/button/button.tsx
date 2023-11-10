import './style/button.css';

type Props = {
  value: string,
  class?: string,
  style?:{},
}

const ButtonJs = (props:Props) => {
  return <input type="button" className={props.class} value={props.value} style={{...props.style}} />;
};

export default ButtonJs;