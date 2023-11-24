import { supabase } from "../api/supabase";

export const signInUser = async (
  e_mail: string,
  pass: string
): Promise<void> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: e_mail,
    password: pass,
  });

  if (error) {
    console.log("Ocorreu um erro \n", error);
  }

  if (data.user !== null) {
    console.log(data);
  }
};
