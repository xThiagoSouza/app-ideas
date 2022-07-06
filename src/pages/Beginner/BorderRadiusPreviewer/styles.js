import styled from "styled-components";

import { Container } from "../../../components/Container/styles.js";

export const CustomContainer = styled(Container)`
  width: 40%;
  align-items: center;

  .up-props,
  .down-props {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }

  .up-props input,
  .down-props input {
    width: 50px;
    padding: 5px;
    text-align: center;
  }
`;

export const Box = styled.div`
  background: var(--primary-color-light);
  width: 400px;
  height: 400px;
  border: 3px solid var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${(props) =>
    props.borderTopLeftRadius ? `${props.borderTopLeftRadius}px` : "0px"};
  border-top-right-radius: ${(props) =>
    props.borderTopRightRadius ? `${props.borderTopRightRadius}px` : "0px"};
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeftRadius ? `${props.borderBottomLeftRadius}px` : "0px"};
  border-bottom-right-radius: ${(props) =>
    props.borderBottomRightRadius
      ? `${props.borderBottomRightRadius}px`
      : "0px"};

  font-size: 16px;
  font-weight: bolder;
`;
