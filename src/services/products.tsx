import { supabase } from "../api/supabase";

export const addProduct = async(product: string) => {
  try {
    const { data, error } = await supabase
      .from("produtos")
      .insert([{ descricao: product }])
      .select();

      if(error){
        throw new Error("Ocorreu um erro inesperado na inserção do produto!")
      }

     return data;
     
  } catch (error) {
    throw error
  }
};
