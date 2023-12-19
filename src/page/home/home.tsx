import { supabase } from "../../api/supabase";
import { updateDataUser } from "../../services/auth";
import "./style/home.css";

const Home = () => {
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log("Usuario deslogado");
    window.location.reload();
  };

  const sessao = async () => {
    const { data, error } = await supabase.auth.getSession();
    console.log(data);
  };

  const atualizarDados = async () => {
    await updateDataUser();
  };

  return (
    <div className="home">
      <h3>Bem vindo ao Web Controle</h3>
      <input type="button" value="SAIR" onClick={signOut} />
      <input type="button" value="SESSÃO" onClick={sessao} />

      <input type="button" value="ATUALIZAR" onClick={atualizarDados} />
    </div>
  );
};

export default Home;
