import { supabase } from "../api/supabase";

export const addSeretariat = async (description: string) => {
  try {
    const { error } = await supabase
      .from("secretarias")
      .insert({ descricao: description });

    if (error) {
      throw new Error(
        "Ocorreu um erro inesperado na tentativa de inserir uma nova secretaria!"
      );
    }
    return "Secretaria adicionada com sucesso!!";

  } catch (error) {
    console.error(error);
    throw error;
  }
};
