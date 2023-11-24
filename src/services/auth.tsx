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
    throw new Error(error.message)
  }
  return data;
};
