import { useState, useEffect } from "react";
import Item from "./Item";
import getProducts from "../../services/Products";


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  console.log("Hi");
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="container text-center">
        <div className="row">
      {products.map((product) => {
        return (
          <Item id={product.id} key={product.id} item={product} />
        );
      })}
      </div>
    </div>
  );  
}

export default ItemListContainer;
