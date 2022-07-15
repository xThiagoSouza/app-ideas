import { useState } from "react";

import { Container } from "./styles";

export default function ColorCycle() {
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [ruleId, setRuleId] = useState("");
  const [baseRed, setBaseRed] = useState("");
  const [baseGreen, setBaseGreen] = useState("");
  const [baseBlue, setBaseBlue] = useState("");
  const [endRed, setEndRed] = useState("");
  const [endGreen, setEndGreen] = useState("");
  const [endBlue, setEndBlue] = useState("");

  function handleChange(e) {
    const regX = /^[0-8A-F]+$/g;

    if (e.target.value === "") {
      return;
    }

    if (!e.target.value.match(regX)) {
      setMessage("Apenas 0 até 8 e A até F");

      return;
    }

    if (e.target.value.length < 2) {
      setMessage("Min 2 digits");

      return;
    }

    switch (e.target.name) {
      case "baseRed": {
        setBaseRed(e.target.value);

        setMessage("");

        return;
      }
      case "baseGreen": {
        setBaseGreen(e.target.value);

        setMessage("");

        return;
      }
      case "baseBlue": {
        setBaseBlue(e.target.value);

        setMessage("");

        return;
      }
      case "endRed": {
        setEndRed(e.target.value);

        setMessage("");

        return;
      }
      case "endGreen": {
        setEndGreen(e.target.value);

        setMessage("");

        return;
      }
      case "endBlue": {
        setEndBlue(e.target.value);

        setMessage("");

        return;
      }
      default:
        return;
    }
  }

  function handleClick() {
    const disable = !disabled;

    let styleSheet = document.styleSheets[0];

    if (
      message !== "" ||
      baseRed === "" ||
      baseGreen === "" ||
      baseBlue === "" ||
      endRed === "" ||
      endGreen === "" ||
      endBlue === ""
    ) {
      setMessage("Preencha todos os campos ");
      return;
    }

    let keyframes = `
		  @keyframes changeColor { 
        0% {
          background: #${baseRed}${baseGreen}${baseBlue}
        } 
        100% {
          background: #${endRed}${endGreen}${endBlue}
        }
      }
		`;

    if (ruleId.length !== 0 || ruleId === 0) {
      styleSheet.deleteRule(0);
      console.log(1);
      setDisabled(disable);
      setRuleId("");
    } else {
      const ruleId = styleSheet.insertRule(keyframes, 0);
      console.log(2);

      setDisabled(disable);
      setRuleId(ruleId);
    }
  }

  let style = {
    animationName: "changeColor",
    animationTimingFunction: "ease-in-out",
    animationDuration: "4s",
    animationDelay: "0.0s",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    animationFillMode: "forwards",
  };

  return (
    <Container>
      <h1>Color Cycle</h1>

      <div className="box" style={style}></div>

      <div className="controls">
        <h4>Start Values</h4>

        <div className="baseValues">
          <div>
            <span>Red</span>
            <input
              type="text"
              name="baseRed"
              className="red"
              maxLength="2"
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
          <div>
            <span>Green</span>
            <input
              type="text"
              name="baseGreen"
              className="green"
              maxLength="2"
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
          <div>
            <span>Blue</span>
            <input
              type="text"
              name="baseBlue"
              className="blue"
              maxLength="2"
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
        </div>

        <h4>End Values</h4>

        <div className="EndValues">
          <div>
            <span>Red</span>
            <input
              type="text"
              name="endRed"
              className="red"
              maxLength="2"
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
          <div>
            <span>Green</span>
            <input
              type="text"
              name="endGreen"
              className="green"
              maxLength="2"
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
          <div>
            <span>Blue</span>
            <input
              type="text"
              name="endBlue"
              className="blue"
              maxLength="2"
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
        </div>

        <button onClick={handleClick}>{disabled ? "Stop" : "Start"}</button>
      </div>

      <p>{message && message}</p>
    </Container>
  );
}
