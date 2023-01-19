import React from "react";
import { Item } from "../../../types";
import { CartOpenContainer } from "./styles";

const CartOpen = (props: any) => {
  return (
    <CartOpenContainer>
      {props.items?.map((item: Item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} width="4%"/>
          {item.title} - ${item.price}
          <button onClick={() => props.removeFromCart(item)}>
            Remove From Cart
          </button>
        </div>
      ))}
    </CartOpenContainer>
  );
};

export default CartOpen;
