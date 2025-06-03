import Product from "./components/Product.jsx";

function App() {
  const products = [
    { id: 1, name: "Laptop", description: "A high performance laptop" },
    { id: 2, name: "Smartphone", description: "Latest model smartphone" },
    { id: 3, name: "Headphones", description: "Noise-cancelling headphones" },
  ];
  return (
    <div>
      {products.map((product) => (
        <Product
          name={product.name}
          description={product.description}
          initLikes={0}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default App;
