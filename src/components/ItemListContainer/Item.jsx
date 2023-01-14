import { Link } from "react-router-dom";
function Item(props) {
  const { title, price, img, category, id } = props.item;

    return (
        <div className="card col col-6 col-md-3">
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body mx-auto">
                <h5 className="card-title">{title}</h5>
                <small>{category}</small>
                <p className="card-text">{price}</p>
                <br></br>
                <Link to={`/detalle/${id}`}>
                <button className="btn btn-primary">Ver más</button>
                </Link>                
            </div>
        </div>
    );  
}

export default Item;

