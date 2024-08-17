const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-Commerce</h1>
        <div>
          <a href="#" className="mr-4">Home</a>
          <a href="#" className="mr-4">Products</a>
          <a href="#" className="mr-4">About</a>
          <a href="#" className="mr-4">Contact</a>
          <a href="#" className="relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 rounded-full text-xs px-2">
                {cartCount}
              </span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
