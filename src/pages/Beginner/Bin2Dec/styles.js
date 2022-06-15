import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: 25px auto;
  padding: 25px;

  display: flex;
  flex-direction: column;

  h1 {
    color: var(--white);
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    background: var(--primary-color);
    padding: 5px;
    border-radius: 5px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  .displayContent {
    input,
    span {
      width: 50%;
      background: var(--white);
      border: 2px solid var(--primary-color);
      border-radius: 5px;
      padding: 5px 10px;
      font-size: 16px;
      font-family: Arial, sans-serif;
      color: var(--primary-color);
    }

    span {
      margin-left: 10px;
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
