import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: 25px auto;

  h1 {
    color: var(--white);
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    background: var(--primary-color);
    padding: 5px;
    border-radius: 5px;
  }

  form {
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
    margin-bottom: 10px;
    padding: 5px 7px;
    border: none;
    border-radius: 4px;
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
