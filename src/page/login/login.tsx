import imageLogin from "../../assets/login.png";
import ButtonJs from "../../components/button/button";
import InputJs from "../../components/input/input";
import "./style/login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="image">
        <img src={imageLogin} />
      </div>
      <div className="form">
        <InputJs placeholder="Seu e-mail" type="email" name="email" />
        <InputJs placeholder="Password" type="password" name="password" />

        <div style={{paddingBottom:'4rem', paddingLeft:'8rem'}}>
          <a href="#">
            <span>Esqueci minha senha!</span>
          </a>
        </div>

        <ButtonJs value={"Logar"} class={"btn"} />
      </div>
    </div>
  );
};

export default Login;
