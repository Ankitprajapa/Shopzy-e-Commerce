import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  // Store products
  const [products, setProducts] = useState([]);

  // Store loading state
  const [loading, setLoading] = useState(true);

  // Fetch products when component loads
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Call backend API
        const res = await fetch("/api/products");

        // Convert response to JSON
        const data = await res.json();

        // Store only first 4 products
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        // Stop loading
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-container">

      {/* Hero Banner */}
      <div className="hero-banner">
        <h1>Welcome to Shopzy</h1>

        <p>
          Discover the best products at unbeatable prices.
        </p>
      </div>

      {/* Featured Products */}
      <h2>Featured Products</h2>

      {/* Loading */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="product-grid">

          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}

        </div>
      )}

    </div>
  );
};

export default Home;