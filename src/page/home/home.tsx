import { supabase } from "../../api/supabase";

const Home = () => {
  const signOut = async ()=> {
    const { error } = await supabase.auth.signOut();
    console.log('Usuario deslogado')
  }

  const sessao = async ()=>{
    const { data, error } = await supabase.auth.getSession();
    console.log(data)
  }
  return (
    <div style={{ background: "blue" }}>
      <h3>Bem vindo ao Web Controle</h3>
      <input type="button" value="SAIR" onClick={signOut} />
      <input type="button" value="SESSÃO" onClick={sessao} />
    </div>
  );
};

export default Home;
