import React, { useState } from "react";
import { Item } from "../../types";
import CartOpen from "./CartOpen";
import { CartContainer } from "./styles";

interface Props {
  items: Item[] | undefined;
  removeFromCart: (item: Item) => void;
}

const ShoppingCart = (props: Props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <CartContainer>
      <button onClick={() => setCartIsOpen(!cartIsOpen)}>
        🛒{props.items?.length}
      </button>
      {cartIsOpen ? (
        <CartOpen items={props.items} removeFromCart={props.removeFromCart} />
      ) : (
        ""
      )}
    </CartContainer>
  );
};

export default ShoppingCart;
