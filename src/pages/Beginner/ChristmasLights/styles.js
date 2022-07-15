import styled from "styled-components";

import { Container } from "../../../components/Container/styles";

export const CustomContainer = styled(Container)`
  justify-content: center;
  align-items: center;

  .lights {
    width: calc(7 * 50px + 9 * 10px);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    background: var(--primary-color-light);
  }

  .lights div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
  }

  .controls {
    margin: 10px auto;
    display: flex;
    flex-direction: column;
  }

  .controls div {
    display: flex;
    align-items: center;
  }

  .controls button {
    border: none;
    border-radius: 5px;
    background: var(--primary-color);
    color: var(--white);
    font-size: 16px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    width: 100px;
    padding: 5px 0;
    margin: 10px 0;
    align-self: flex-end;
  }

  .controls button:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  .controls span {
    color: var(--white);
    font-size: 18px;
    font-weight: bold;
    font-family: Arial;
  }

  .controls input {
    margin: 0 5px;
  }

  .on {
    opacity: 1;
  }

  .off {
    opacity: 0.5;
  }
`;
