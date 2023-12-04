import { supabase } from "../api/supabase";

export const maxSolicitation = async () => {
  let { data, error } = await supabase
    .from("pedidos")
    .select("numero_pedido")
    .gt("numero_pedido", 5);

  if (error) {
    console.log(error);
  }
  console.log(data);
};

export const allSecretaries = async () => {
  try {
    let { data, error } = await supabase.from("secretarias").select("*");
    if (error) {
      throw new Error("Ocorreu um erro inesperado na busca das secretarias!");
    }
    return data;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
};
