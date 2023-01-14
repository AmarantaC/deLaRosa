import { useState } from "react";



function ItemCount({ onAddToCart }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    // count < stock
    setCount(count + 1);
  }

  function handleSubstract() {
    // validar -1 -2
    setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <small>Agregá la cantidad deseada al carrito</small>
      <div className="itemcount_control">
        <button onClick={handleSubstract}>-</button>
        <span className="itemcount_count">{count}</span>
        <button onClick={handleAdd}>+</button>
      </div>

      <div className="itemcount_btns">
        <button onClick={() => onAddToCart(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
