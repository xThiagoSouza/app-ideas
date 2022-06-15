import { useState } from "react";

import { Container } from "./styles";

export default function Bin2Dec() {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("");
  const [convertedValue, setConvertedValue] = useState("Valor convertido...");

  function handleInputChange(e) {
    const regX = /^[0-1]+$/g;

    if (e.target.value.match(regX) === null) {
      setMessage("Digite somente 0 e 1");
    } else {
      setInputText(e.target.value);
      setMessage("");
    }
  }

  function handleButtonConverter() {
    if (inputText !== "" && inputText.match(/^[0-1]+$/g) !== null) {
      let newValue = 0;
      let cont = 0;
      let valueToConvert = inputText;

      for (let index = valueToConvert.length - 1; index >= 0; index--) {
        newValue += valueToConvert.charAt(index) * Math.pow(2, cont);

        cont++;
      }

      setConvertedValue(newValue);
    }
  }

  return (
    <Container>
      <h1>Conversor Binário para Decimal</h1>
      <div className="displayContent">
        <input
          type="text"
          maxLength="8"
          name="inputToConvert"
          placeholder="Digite os valores aqui..."
          onChange={handleInputChange}
        />
        <span>{convertedValue}</span>
      </div>

      <div className="actionsContent">
        <span>{message}</span>

        <button
          disabled={message.length !== 0 ? true : false}
          onClick={handleButtonConverter}
        >
          Converter
        </button>
      </div>
    </Container>
  );
}
