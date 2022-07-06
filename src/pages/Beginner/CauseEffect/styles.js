import styled from "styled-components";

import { Container } from "../../../components/Container/styles.js";

export const CustomContainer = styled(Container)`
  div {
    display: flex;
  }

  .persons-list {
    width: 125px;
    margin-right: 10px;
  }

  .persons-list li {
    padding: 5px 10px;
    font-size: 18px;
    font-family: Arial;
    border-bottom: 1px solid var(--white);
    background: var(--primary-color);
    color: var(--white);
    list-style: none;
    cursor: pointer;
  }

  .persons-list li:last-child {
    border-bottom: 0;
  }

  .persons-list li:hover {
    opacity: 0.8;
  }

  .person-details {
    width: 100%;
    background: var(--primary-color-light);
    padding: 10px;
  }

  .person-details div {
    display: flex;
    flex-direction: column;
  }

  .person-details div p {
    font-size: 18px;
    font-family: Arial;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
  }

  .person-details div span {
    font-size: 14px;
  }
`;
