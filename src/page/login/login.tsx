import { useState } from "react";
import imageLogin from "../../assets/login.png";
import ButtonJs from "../../components/button/button";
import InputJs from "../../components/input/input";
import { signInUser } from "../../services/auth";
import { validateCredentials } from "./actions/actions";
import "./style/login.css";
import MessageSnack from "../../components/messageSnack/messageSnack";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [openSnack, setOpenSnack] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>("");

  const logar = async (): Promise<void> => {
    try {
      validateCredentials(email, password);
      const data = await signInUser(email, password);

      if (data != null || data != undefined) {
        window.location.reload();
      }
    } catch (error: any) {
      setMessageError(error.message);
      setOpenSnack(true);
    }
    //
  };

  return (
    <div className="container_login">
      <div className="image">
        <img src={imageLogin} />
      </div>
      <div className="form">
        <InputJs
          placeholder="Seu e-mail"
          type="email"
          name="email"
          setState={setEmail}
          value={email}
        />
        <InputJs
          placeholder="Password"
          type="password"
          name="password"
          setState={setPassword}
          value={password}
        />

        <div style={{ paddingBottom: "4rem", paddingLeft: "8rem" }}>
          <a href="#">
            <span>Esqueci minha senha!</span>
          </a>
        </div>

        <ButtonJs value={"Logar"} class={"btn"} onClick={logar} />
      </div>

      <MessageSnack
        message={messageError}
        open={openSnack}
        type="error"
        onClose={() => setOpenSnack(false)}
      />
    </div>
  );
};

export default Login;
