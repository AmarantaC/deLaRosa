import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {getDetail} from '../../services/Products';
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [detail, setDetail] = useState({ title: "loading", price: "--,--" });
 
  let params = useParams();
  useEffect(() => {
    getDetail(params.itemid)
      .then((respuesta) => {
        setDetail(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <ItemDetail    
      title={detail.title}
      img={detail.img}
      category={detail.category}
      price={detail.price}
    />
  );
}

export default ItemDetailContainer;

