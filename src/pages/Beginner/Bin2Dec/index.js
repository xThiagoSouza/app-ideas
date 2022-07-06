import { useState } from "react";

import { CustomContainer } from "./styles";

export default function Bin2Dec() {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("");
  const [convertedValue, setConvertedValue] = useState("Valor convertido...");

  function validateInput(stringValue) {
    const regX = /^[0-1]+$/g;

    return stringValue.match(regX);
  }

  function handleInputChange(e) {
    const value = e.target.value;

    if (value === "") {
      setMessage("");
      return;
    }

    if (!validateInput(value)) {
      setMessage("Digite somente 0 e 1");
    } else {
      setInputText(value);
      setMessage("");
    }
  }

  function onFormSubmit(e) {
    e.preventDefault();

    if (inputText !== "" && validateInput(inputText)) {
      let newValue = 0;
      let cont = 0;
      let valueToConvert = inputText;

      for (let index = valueToConvert.length - 1; index >= 0; index--) {
        newValue += Number(valueToConvert.charAt(index)) * Math.pow(2, cont);

        cont++;
      }

      setConvertedValue(newValue);
    }
  }

  return (
    <CustomContainer>
      <h1>Conversor Binário para Decimal</h1>
      <form onSubmit={onFormSubmit}>
        <div className="displayContent">
          <input
            type="text"
            name="inputToConvert"
            placeholder="Digite os valores aqui..."
            onChange={handleInputChange}
          />
          <span>{convertedValue}</span>
        </div>

        <div className="actionsContent">
          <span>{message}</span>

          <button disabled={message.length !== 0 ? true : false} type="submit">
            Converter
          </button>
        </div>
      </form>
    </CustomContainer>
  );
}
