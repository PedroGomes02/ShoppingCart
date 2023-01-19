import React from "react";
import ProductCard from "./ProductCard";
import { ProductsContainer } from "./styles";

const Products = (props: any) => {
  return (
    <ProductsContainer>
      {props.products?.map((product: any, index: number) => {
        return (
          <ProductCard
            key={index}
            product={product}
            addToCart={props.addToCart}
          />
        );
      })}
    </ProductsContainer>
  );
};

export default Products;
