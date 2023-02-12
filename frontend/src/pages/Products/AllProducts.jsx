import React from "react";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";

function AllProducts() {
  const [products, setProducts] = useState([]);

  return (
    <>
      {/* Search Bar */}
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-5 gap-6">
          {/* {products.map(product => (
            <ProductCard product={product} />
          ))} */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default AllProducts;
