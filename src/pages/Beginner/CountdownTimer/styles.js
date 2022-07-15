import styled from "styled-components";

import { Container } from "../../../components/Container/styles";

export const CustomContainer = styled(Container)`
  form {
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 250px;
    display: flex;
    flex-direction: column;
    color: var(--white);
  }

  form span {
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 2px;
  }

  form input {
    width: 100%;
    margin-bottom: 10px;
  }

  form button {
    border: none;
    border-radius: 5px;
    background: var(--primary-color);
    color: var(--white);
    font-size: 16px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    width: 50%;
    padding: 5px 0;
    align-self: flex-end;
  }

  form button:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  form div {
    width: 100%;
    margin: 16px 0;
    padding: 4px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    font-size: 18px;
    background: var(--red);
    color: var(--white);
  }
`;
