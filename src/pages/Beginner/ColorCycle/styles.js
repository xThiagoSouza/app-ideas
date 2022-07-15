import styled from "styled-components";

import { Container } from "../../../components/Container/styles";

export const CustomContainer = styled(Container)`
  align-items: center;
  justify-content: center;

  .box {
    width: 250px;
    height: 250px;
    background: var(--white);
    margin: 10px auto;
  }

  .controls {
    margin: 0 auto;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: var(--white);
    font-size: 16px;
    font-family: Arial;
    font-weight: bold;

    border: 1px solid var(--primary-color);
    padding: 10px;
    border-radius: 5px;
  }

  .controls div {
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  .controls div div {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 50px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-family: Arial;
    text-align: center;
  }

  .red {
    background: #f00;
  }

  .green {
    background: #0f0;
  }

  .blue {
    background: #00f;
  }

  input:disabled {
    opacity: 0.5;
  }

  button {
    border: none;
    border-radius: 5px;
    background: var(--primary-color);
    color: var(--white);
    font-size: 16px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    width: 100px;
    padding: 5px 0;
    margin-top: 10px;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  p {
    color: var(--white);
    margin-top: 10px;
    padding: 5px;
    font-size: 16px;
    font-weight: bold;
  }

  h4 {
    margin: 5px 0 10px;
    border-bottom: 1px solid #fff;
    width: 100%;
    text-align: center;
    padding-bottom: 2px;
  }
`;
