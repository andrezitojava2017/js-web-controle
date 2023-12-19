import { useEffect, useState } from "react";
import { allProducts } from "../../services/products";
import "../input/style/input.css";

type Props = {
  value: string | number;
  setState: React.Dispatch<React.SetStateAction<string | object | any>>;
};

const InputSearch = (props:Props) => {
  type Product = {
    id: string;
    descricao: string;
  };

  const [listaProdutos, setListaProdutos] = useState<Product[]>([
    { id: "", descricao: "" },
  ]);

  const searchProducts = async () => {
    try {
      const rs = await allProducts();
      if (rs) {
        setListaProdutos(rs);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      await searchProducts();
    })();
  }, []);


  const selectedItem = (e:any)=>{
    let idProduct = e.currentTarget.value.split('-')[0]
    props.setState({produto: e.currentTarget.value.split('-')[1], id: idProduct})
  }

  return (
    <div>
      <input
        type="search"
        placeholder="buscar produto"
        list="products"
        style={{ width: "30vw" }}
        onSelect={(e) => selectedItem(e)}
      />
      <datalist id="products">
        {listaProdutos.map((produto, index) => {
          return (
            <option
              key={produto.id}
              value={`${produto.id}-${produto.descricao}`}
            />
          );
        })}
      </datalist>
    </div>
  );
};

export default InputSearch;
