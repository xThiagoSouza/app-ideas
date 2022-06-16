import { Link } from "react-router-dom";

import { beginner } from "../../assets/data";

import { NavbarMenu } from "./styles";

export default function Navbar() {
  return (
    <NavbarMenu>
      <ul className="main-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Beginner
          <ul className="sub-menu">
            {beginner.map((item) => (
              <li key={item.title}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </NavbarMenu>
  );
}
