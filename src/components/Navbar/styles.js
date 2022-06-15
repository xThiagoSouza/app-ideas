import styled from "styled-components";

export const NavbarMenu = styled.nav`
  width: 100%;

  color: var(--white);
  width: inherit;
  background: var(--primary-color);
  padding-left: 25px;

  ul li {
    cursor: pointer;
  }

  .main-menu {
    list-style: none;
    display: flex;
    height: 50px;
    align-items: center;
  }

  .main-menu li {
    height: 100%;
    padding: 0 25px;

    font-size: 18px;
    font-family: Arial;
    font-weight: bold;
    text-transform: uppercase;

    display: flex;
    align-items: center;
  }

  .main-menu li a {
    text-decoration: none;
  }

  .main-menu li a:visited {
    color: var(--white);
  }

  .main-menu li:hover a:visited {
    color: var(--primary-color);
  }

  .main-menu li:hover {
    background: var(--primary-color-light);
    color: var(--primary-color);
  }

  .main-menu li:hover .sub-menu {
    top: 50px;
  }

  .sub-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -1000px;
  }

  .sub-menu li {
    background: var(--primary-color-light);
    border-bottom: 1px solid var(--primary-color);
    color: var(--primary-color);
    padding: 10px;
    z-index: 5;

    a {
      text-decoration: none;

      &:visited {
        color: var(--primary-color);
      }
    }

    &:hover a {
      color: var(--primary-color-light);
    }
  }

  .sub-menu li:hover {
    background: var(--primary-color);
    color: var(--white);
  }

  .sub-menu li:hover a:visited {
    background: var(--primary-color);
    color: var(--white);
  }
`;
