import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 75%;
  margin: 75px auto;

  h2 {
    width: 100%;
    color: var(--white);
    text-align: center;
    background: var(--primary-color);
    padding: 5px;
    border-radius: 5px 5px 0 0;
  }

  .begin {
    height: auto;
    margin-bottom: 25px;
  }

  .wrap-content {
    width: 99%;
    margin: 0 auto;
    border: 2px solid var(--primary-color-light);
    border-top: none;
    border-radius: 0 0 5px 5px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow-y: scroll;
  }

  .sub-content {
    color: var(--white);
    width: 200px;
    height: 200px;
    margin: 10px 0 30px 0;
  }

  .sub-content h3 {
    background: var(--primary-color);
    text-align: center;
    font-size: 100%;
    padding: 5px 0;
  }

  .sub-content div {
    width: 99%;
    height: 100%;
    margin: 0 auto;
    padding: 5px;
    border: 1px solid var(--primary-color-light);
    border-top: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sub-content img {
    width: 100%;
  }
`;
