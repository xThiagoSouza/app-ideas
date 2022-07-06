import styled from "styled-components";

import { Container } from "../../../components/Container/styles.js";

export const CustomContainer = styled(Container)`
  div {
    display: flex;
    justify-content: space-between;
  }

  .displayContent {
    span {
      width: 50%;
      background: var(--white);
      border: 2px solid var(--primary-color);
      border-radius: 5px;
      padding: 5px 10px;
      margin-left: 10px;
      font-size: 16px;
      font-family: Arial, sans-serif;
      color: var(--primary-color);
    }
  }

  .actionsContent {
    margin-top: 10px;

    button {
      border: none;
      border-radius: 5px;
      background: var(--primary-color);
      color: var(--white);
      font-size: 16px;
      font-family: Arial, sans-serif;
      font-weight: bold;
      width: 25%;
      padding: 5px 0;
      align-self: flex-end;

      &:hover {
        cursor: pointer;
        opacity: 0.9;
      }

      &:disabled:hover {
        cursor: not-allowed;
        opacity: 0.9;
      }
    }

    span {
      color: var(--white);
      font-size: 20px;
    }
  }
`;
