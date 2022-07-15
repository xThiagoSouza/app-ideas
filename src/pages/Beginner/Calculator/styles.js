import styled from "styled-components";

import { Container } from "../../../components/Container/styles";

export const CustomContainer = styled(Container)`
  .calc {
    width: 50%;
    margin: 0 auto;
  }

  .display {
    background: var(--white);
    border-radius: 5px;
    border: 1px solid var(--primary-color);
    padding: 5px 10px;
    text-align: right;
    color: var(--primary-color);
    font-weight: bold;
    font-size: 25px;
  }

  .operations {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    margin-top: 5px;
  }

  .operations button {
    background: var(--primary-color);
    padding: 10px;
    font-size: 25px;
    color: var(--white);
    border: none;
    border-radius: 5px;
    transition: ease-in-out 100ms;
  }

  .operations button:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
