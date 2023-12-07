import React, { useEffect, useState } from "react";
import { allProducts } from "../../services/products";
import "./style/listProducts.css";

const ListProducts = () => {
  type Product = {
    id: number;
    descricao: string;
  };
  const [listaProdutos, setListaProdutos] = useState<Product[]>([
    { id: 0, descricao: "" },
  ]);
  /* const [listaProdutos, setListaProdutos] = useState<Product[]>([
    {
      id: 0,
      descricao: "MIKROTIK",
    },
    {
      id: 1,
      descricao: "TPLINK",
    },
    {
      id: 2,
      descricao: "UNIFI",
    },
    {
      id: 3,
      descricao: "ROTEADOR",
    },
    {
      id: 4,
      descricao: "ADAPTADOR",
    },
    {
      id: 5,
      descricao: "MIKROTIK",
    },
    {
      id: 6,
      descricao: "TPLINK",
    },
    {
      id: 7,
      descricao: "UNIFI",
    },
    {
      id: 8,
      descricao: "ROTEADOR",
    },
    {
      id: 9,
      descricao: "ADAPTADOR",
    },
    {
      id: 10,
      descricao: "MIKROTIK",
    },
    {
      id: 11,
      descricao: "TPLINK",
    },
    {
      id: 12,
      descricao: "UNIFI",
    },
    {
      id: 13,
      descricao: "ROTEADOR",
    },
    {
      id: 14,
      descricao: "ADAPTADOR",
    },
    {
      id: 15,
      descricao: "UNIFI",
    },
    {
      id: 16,
      descricao: "ROTEADOR",
    },
    {
      id: 17,
      descricao: "CARO VERMELHO",
    },
    {
      id: 18,
      descricao: "ADAPTADOR",
    },
    {
      id: 158,
      descricao: "UNIFI",
    },
    {
      id: 168,
      descricao: "ROTEADOR",
    },
    {
      id: 178,
      descricao: "CARO VERMELHO",
    },
  ]);
*/

  useEffect(() => {
    (async () => {
      const rs = await allProducts();

      if (rs) {
        setListaProdutos(rs);
      }

      console.log("lista de produtos: ", listaProdutos);
    })();
  }, []);

  return (
    <section
      style={{
        width: "70%",
        overflow: "scroll",
        padding: 10,
      }}
    >
      <table>
        <tr>
          <th>ID</th>
          <th>Descrição</th>
        </tr>

        {listaProdutos.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.descricao}</td>
          </tr>
        ))}
      </table>
    </section>
  );
};

export default ListProducts;
