const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4 rounded" />
      <h2 className="text-lg font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
