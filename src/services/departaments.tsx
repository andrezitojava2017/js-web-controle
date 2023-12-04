import { supabase } from "../api/supabase";

export const allDepartaments = async (id:string) => {
  try {

    let { data: departamentos, error } = await supabase
      .from("departamentos")
      .select('id,descricao')
      .eq('id_secretaria', id)

    if (error) {
      throw new Error(
        "Ocorreu um erro inesperado na consulta dos departamentos"
      );
    }
    return departamentos;

  } catch (error) {
    console.error(error);
    throw error;
  }
};
