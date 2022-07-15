import { useState } from "react";

import { CustomContainer } from "./styles";

export default function Calculator() {
  const [valueToShow, setValueToShow] = useState(0);
  const [operator1, setOperator1] = useState("");
  const [operator2, setOperator2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  function validateDigits(clickedValue, operator) {
    return String(Number(clickedValue) + Number(operator)).length > 8
      ? false
      : true;
  }

  function validateResult(resultStr) {
    if (resultStr.length > 8) {
      setValueToShow("ERR");
      setOperator1("");
      setOperator2("");
      setOperation("");
      setResult("");

      return false;
    }

    return true;
  }

  function doTheMath(operator1, operation, operator2) {
    switch (operation) {
      case "+":
        return String(Number(operator1) + Number(operator2));
      case "-":
        return String(Number(operator1) - Number(operator2));
      case "/":
        return String(Number(operator1) / Number(operator2));
      default:
        return;
    }
  }

  function handleClick(e) {
    e.preventDefault();

    let clickedValue = e.target.innerText;

    switch (clickedValue) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        // Operador 1
        if (operation === "") {
          // validar digitos
          if (!validateDigits(clickedValue, operator1)) break;

          setOperator1(operator1 + clickedValue);
          setValueToShow(operator1 + clickedValue);

          break;
        }

        // Operador 2

        // validar digitos
        if (!validateDigits(clickedValue, operator2)) break;

        setOperator2(operator2 + clickedValue);
        setValueToShow(operator2 + clickedValue);

        break;
      }
      case "+":
        if (operator1 !== "" && operator2 !== "") {
          let sumStr = doTheMath(operator1, operation, operator2);

          if (!validateResult(sumStr)) break;

          setResult(sumStr);
          setValueToShow(sumStr);
          setOperator1(sumStr);
          setOperator2("");
          setOperation("+");

          break;
        }

        if (operator1 === "" && operator2 === "" && result === "") {
          setOperator1("0");
          setOperation("+");

          break;
        }

        if (operator1 === "" && operator2 === "" && result !== "") {
          setOperator1(result);
          setOperation("+");
          setResult("");

          break;
        }

        setOperation("+");

        break;
      case "-":
        if (operator1 !== "" && operator2 !== "") {
          let minusStr = doTheMath(operator1, operation, operator2);

          if (!validateResult(minusStr)) break;

          setResult(minusStr);
          setValueToShow(minusStr);
          setOperator1(minusStr);
          setOperator2("");
          setOperation("-");

          break;
        }

        if (operator1 === "" && operator2 === "" && result === "") {
          setOperator1("0");
          setOperation("-");

          break;
        }

        if (operator1 === "" && operator2 === "" && result !== "") {
          setOperator1(result);
          setOperation("-");
          setResult("");

          break;
        }

        setOperation("-");

        break;
      case "/":
        if (operator1 !== "" && operator2 !== "") {
          if (operator2 === "0") {
            setValueToShow("ERR");
            setOperator1("");
            setOperator2("");
            setOperation("");
            setResult("");

            break;
          }

          let divideStr = doTheMath(operator1, operation, operator2);

          if (!validateResult(divideStr)) break;

          setResult(divideStr);
          setValueToShow(divideStr);
          setOperator1(divideStr);
          setOperator2("");
          setOperation("/");

          break;
        }

        if (operator1 === "" && operator2 === "" && result === "") {
          setOperator1("0");
          setOperation("/");

          break;
        }

        if (operator1 === "" && operator2 === "" && result !== "") {
          setOperator1(result);
          setOperation("/");
          setResult("");

          break;
        }

        setOperation("/");

        break;
      case "=": {
        switch (operation) {
          case "+": {
            if (operator1 !== "" && operator2 !== "") {
              let sumStr = String(Number(operator1) + Number(operator2));

              if (!validateResult(sumStr)) break;

              setResult(sumStr);
              setValueToShow(sumStr);
              setOperator1("");
              setOperator2("");
              setOperation("");

              break;
            }

            if (operator2 === "") {
              let sumStr = String(Number(operator1) + Number(operator1));

              if (!validateResult(sumStr)) break;

              setResult(sumStr);
              setValueToShow(sumStr);
              setOperator1("");
              setOperator2("");
              setOperation("");

              break;
            }

            break;
          }
          case "-": {
            if (operator1 !== "" && operator2 !== "") {
              let minusStr = String(Number(operator1) - Number(operator2));

              if (!validateResult(minusStr)) break;

              setResult(minusStr);
              setValueToShow(minusStr);
              setOperator1("");
              setOperator2("");
              setOperation("");

              break;
            }

            if (operator2 === "") {
              let minusStr = String(Number(operator1) - Number(operator1));

              if (!validateResult(minusStr)) break;

              setResult(minusStr);
              setValueToShow(minusStr);
              setOperator1("");
              setOperator2("");
              setOperation("");

              break;
            }

            break;
          }
          case "/": {
            if (operator2 === "0") {
              setValueToShow("ERR");
              setOperator1("");
              setOperator2("");
              setOperation("");
              setResult("");

              break;
            }

            if (operator1 !== "" && operator2 !== "") {
              let divideStr = String(Number(operator1) / Number(operator2));

              if (!validateResult(divideStr)) break;

              setResult(divideStr);
              setValueToShow(divideStr);
              setOperator1("");
              setOperator2("");
              setOperation("");

              break;
            }

            if (operator2 === "") {
              let divideStr = String(Number(operator1) / Number(operator1));

              if (!validateResult(divideStr)) break;

              setResult(divideStr);
              setValueToShow(divideStr);
              setOperator1("");
              setOperator2("");
              setOperation("");

              break;
            }

            break;
          }

          default: {
          }
        }

        break;
      }
      case "C": {
        if (operator2 !== "") {
          setOperator2("");
          setValueToShow(operator1);

          break;
        }

        if (operation !== "") {
          setOperation("");
          setValueToShow(operator1);

          break;
        }

        setOperator1("");
        setValueToShow(0);

        break;
      }
      case "AC": {
        setValueToShow(0);
        setOperator1("");
        setOperator2("");
        setOperation("");
        setResult("");

        break;
      }
      default: {
      }
    }
  }

  return (
    <CustomContainer>
      <h1>Calculator</h1>

      <div className="calc">
        <div className="display">
          <span>{valueToShow}</span>
        </div>

        <form className="operations" onClick={handleClick}>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>+</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>/</button>
          <button>C</button>
          <button>0</button>
          <button>AC</button>
          <button>=</button>
        </form>
      </div>
    </CustomContainer>
  );
}
