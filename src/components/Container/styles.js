import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: 25px auto;

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

  input {
    width: 50%;
    background: var(--white);
    border: 2px solid var(--primary-color);
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    font-family: Arial, sans-serif;
    color: var(--primary-color);
  }
`;
