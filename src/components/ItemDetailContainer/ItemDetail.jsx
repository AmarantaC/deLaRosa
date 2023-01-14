function ItemDetail({ title, img, category, price, }) {
  return (
    <div className="text-center container px-4">
    <div className="card mb-3">
      <img src={img} class="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text"><small className="text-muted">{category}</small></p>
      </div>
      <a href="/cart">
        <button className="btn btn-primary">Ver Carrito</button>
      </a>
    </div>
    </div>
  );
}

export default ItemDetail;
