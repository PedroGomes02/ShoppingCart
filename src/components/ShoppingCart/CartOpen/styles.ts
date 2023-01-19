import styled from "styled-components";

const CartOpenContainer = styled.div`
  position: absolute;
  top: 8rem;
  display: flex;
  padding: 5px;
  margin-left: 8rem;
  background-color: yellow;
  border: 0.2rem solid black;
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.4rem;
  }
`;

export { CartOpenContainer };
