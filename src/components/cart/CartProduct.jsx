function CartProduct({ product, quantity }) {
  return (
    <div className="flex gap-4">
      <img src={product.image} alt={product.name}  width={50}/>
      <div className="product-info">
        <h4>{product.name}</h4>
        <p>{quantity} x {product.price} €</p>
      </div>
      <div className="font-bold">
        <p>{Number(quantity) * parseFloat(product.price.replace(' €', ''))} €</p>
      </div>
    </div>
  );
}

export default CartProduct;