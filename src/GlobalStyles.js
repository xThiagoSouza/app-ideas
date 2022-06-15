import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
			margin: 0;
			padding: 0;
			outline: 0;
			box-sizing: border-box;
		}

		:root {
			--white: #fff;
			--black: #000;
			--red: #f00;
			--primary-color: #651ae8;
			--primary-color-light: #c7bade;
		}

		body {
			background: var(--black);
		}
`;
