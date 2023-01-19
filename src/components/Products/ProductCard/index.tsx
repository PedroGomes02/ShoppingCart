import React from "react";
import { Product, ProductImage } from "./styles";

const ProductCard = (props: any) => {
  return (
    <Product>
      <p>{props.product.title}</p>
      <span>{props.product.price}€</span>
      <ProductImage src={props.product.image} />
      <button onClick={() => props.addToCart(props.product)}>
        Add to Cart
      </button>
    </Product>
  );
};

export default ProductCard;
