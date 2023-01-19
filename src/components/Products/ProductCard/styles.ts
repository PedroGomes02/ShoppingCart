import styled from "styled-components";

const Product = styled.div`
  width: 20%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 0.2rem solid black;
  text-align: center;
  font-size: 0.8rem;
  color: white;

  p,
  span {
    padding: 0.2rem;
    background-color: white;
    color: black;
  }

  button {
    padding: 0.2rem;
    margin: 0.2rem;
    color: black;
    cursor: pointer;
  }
`;

const ProductImage = styled.img`
  width: 30%;
`;

export { Product, ProductImage };
