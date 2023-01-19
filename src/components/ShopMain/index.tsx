import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Item } from "../../types";
import Products from "../Products";
import ShoppingCart from "../ShoppingCart";
import { StyledH2 } from "./styles";

const ShopMain = () => {
  const [products, setProducts] = useState<Item[]>();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [products]);

  const [items, setItems] = useState<Item[]>([]);

  function addToCart(item: Item) {
    setItems([...items, item]);
  }

  function removeFromCart(item: Item) {
    setItems(items.filter((i) => i.id !== item.id));
  }

  return (
    <div>
      <StyledH2>Shop Component</StyledH2>
      <ShoppingCart items={items} removeFromCart={removeFromCart} />
      <StyledH2>Products available</StyledH2>
      <Products products={products} addToCart={addToCart} />
    </div>
  );
};

export default ShopMain;
