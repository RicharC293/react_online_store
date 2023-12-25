// import css
import { Link } from "react-router-dom";
import "./product-card.css";

function ProductCard({ product }) {

  return (
    <Link to={`/product/${product.id}`}>
      <div className="w-60 rounded-sm p-1 m-1 text-center cursor-pointer hover:bg-gray-400 justify-between">
        <img className="image" src={product.image} alt={product.name} />
        <h3 className="font-bold">{product.name}</h3>
        <h4 className="font-semibold">{product.description}</h4>
        <p className=" text-sm font-semibold">{product.price} €</p>
      </div>
    </Link>
  );
}

export default ProductCard;
