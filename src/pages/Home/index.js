import { Container, Content } from "./styles";

import { beginner } from "../../assets/data";
import { Link } from "react-router-dom";

const imagesSrc = "./assets/images/";

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
                <div>
                  <Link to={item.path}>
                    <img
                      src={item.imgSrc}
                      /* src={imagesSrc
                        .concat(
                          item.title.includes(" ")
                            ? item.title
                                .toLowerCase()
                                .trim()
                                .split(" ")
                                .join("-")
                            : item.title.toLowerCase()
                        )
                        .trim()
                        .concat(".jpg")} */
                      alt={item.title.concat(" thumbnail")}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </Container>
  );
}
