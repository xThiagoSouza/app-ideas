import { Container, Content } from "./styles";

import { beginner } from "../../assets/data";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Content>
        <h2>Beginner</h2>
        <div className="begin">
          <div className="wrap-content">
            {beginner.map((item) => (
              <div className="sub-content" key={item.title + "1"}>
                <h3>{item.title}</h3>
                <Link to={item.url}>
                  <div>
                    <img
                      src={item.imgSrc}
                      alt={item.title.concat(" thumbnail")}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </Container>
  );
}
