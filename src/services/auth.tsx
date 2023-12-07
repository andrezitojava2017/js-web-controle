import { supabase } from "../api/supabase";

export const signInUser = async (
  e_mail: string,
  pass: string
): Promise<any> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: e_mail,
    password: pass,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const updateDataUser = async () => {
  try {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        nome: "Jederson @ndré",
        secretaria: "2",
        cargo: "Supervisor de Tecnologia",
      },
    });
    if (error) {
      throw new Error("Ocorreu um erro inesperado na atualização do usuario!!");
    }

    console.log(data);
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};

export const infoSession = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      throw new Error(
        "Ocorreu um erro inesperado na tentativa de recuperar dados da sessão!"
      );
    }
    return data.session?.user;
    
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
};
