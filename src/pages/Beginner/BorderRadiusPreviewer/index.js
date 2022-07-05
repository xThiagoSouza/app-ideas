import { useState } from "react";

import { Container, Box } from "./styles";

export default function BorderRadiusPreviewer() {
  const [upLeft, setUpLeft] = useState(0);
  const [upRight, setUpRight] = useState(0);
  const [downLeft, setDownLeft] = useState(0);
  const [downRight, setDownRight] = useState(0);

  function handleChange(input) {
    switch (input.target.name) {
      case "upLeft": {
        setUpLeft(Number(input.target.value));
        return;
      }
      case "upRight": {
        setUpRight(Number(input.target.value));
        return;
      }
      case "downLeft": {
        setDownLeft(Number(input.target.value));
        return;
      }
      case "downRight": {
        setDownRight(Number(input.target.value));
        return;
      }
      default:
        return;
    }
  }

  return (
    <Container>
      <h1>Border-Radius Previewer</h1>

      <div className="up-props">
        <input type="text" name="upLeft" onChange={handleChange} />
        <input type="text" name="upRight" onChange={handleChange} />
      </div>

      <Box
        borderTopLeftRadius={upLeft}
        borderTopRightRadius={upRight}
        borderBottomLeftRadius={downLeft}
        borderBottomRightRadius={downRight}
      >
        <div>
          <p>border-top-left-radius: {upLeft}px</p>
          <p>border-top-right-radius: {upRight}px</p>
          <p>border-bottom-left-radius: {downLeft}px</p>
          <p>border-bottom-right-radius: {downRight}px</p>
        </div>
      </Box>

      <div className="down-props">
        <input type="text" name="downLeft" onChange={handleChange} />
        <input type="text" name="downRight" onChange={handleChange} />
      </div>
    </Container>
  );
}
