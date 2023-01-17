import { useState, useEffect } from "react";
import Item from "./Item";
import  getProducts, { getProductByCategory, } from "../../services/Products";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  let { categoryid } = useParams();

  useEffect(() => {
    if (!categoryid) {
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => alert(error));
    } else {
      getProductByCategory(categoryid).then((response) => {
        setProducts(response);
      });
  }
  }  , [categoryid]);

  console.log(categoryid);

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
