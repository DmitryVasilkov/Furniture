import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, addToCart } from "./ProductsSlice";

function productList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => dispatch(setProducts(data)))
      .catch((error) => console.log("Error fetching data", error));
  }, [dispatch]);
  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, quantity: 1 }));
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <button onClick={() => handleAddToCart(product)}>buy</button>
        </div>
      ))}
    </div>
  );
}

export default productList;
