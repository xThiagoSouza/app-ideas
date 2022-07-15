import { useState } from "react";

import { CustomContainer } from "./styles";

export default function ChristmasLights() {
  const [intensity, setIntensity] = useState(3);
  const [disabled, setDisabled] = useState(false);
  const [idInterval, setIdInterval] = useState("");

  return (
    <CustomContainer>
      <h1>Christmas Lights</h1>

      <div className="lights">
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
      </div>

      <div className="controls">
        <div>
          <span>Intensity: </span>
          <input
            type="range"
            min="1"
            max="10"
            onChange={(e) => {
              setIntensity(Number(e.target.value));
            }}
            value={intensity}
            disabled={disabled}
          />
          <span>{intensity}s</span>
        </div>

        <button
          onClick={() => {
            setDisabled(!disabled);

            const odd = document.getElementsByClassName("odd");
            const even = document.getElementsByClassName("even");

            if (idInterval === "") {
              let idInterval = setInterval(() => {
                if (odd[0].classList.contains("on")) {
                  odd[0].classList.remove("on");
                  odd[1].classList.remove("on");
                  odd[2].classList.remove("on");
                  odd[3].classList.remove("on");

                  odd[0].classList.add("off");
                  odd[1].classList.add("off");
                  odd[2].classList.add("off");
                  odd[3].classList.add("off");
                } else {
                  odd[0].classList.remove("off");
                  odd[1].classList.remove("off");
                  odd[2].classList.remove("off");
                  odd[3].classList.remove("off");

                  odd[0].classList.add("on");
                  odd[1].classList.add("on");
                  odd[2].classList.add("on");
                  odd[3].classList.add("on");
                }

                if (even[0].classList.contains("off")) {
                  even[0].classList.remove("off");
                  even[1].classList.remove("off");
                  even[2].classList.remove("off");

                  even[0].classList.add("on");
                  even[1].classList.add("on");
                  even[2].classList.add("on");
                } else {
                  even[0].classList.remove("on");
                  even[1].classList.remove("on");
                  even[2].classList.remove("on");

                  even[0].classList.add("off");
                  even[1].classList.add("off");
                  even[2].classList.add("off");
                }
              }, intensity * 1000);

              setIdInterval(idInterval);
            } else {
              clearInterval(idInterval);
              setIdInterval("");

              odd[0].classList.remove("on");
              odd[1].classList.remove("on");
              odd[2].classList.remove("on");
              odd[3].classList.remove("on");

              odd[0].classList.remove("off");
              odd[1].classList.remove("off");
              odd[2].classList.remove("off");
              odd[3].classList.remove("off");

              even[0].classList.remove("on");
              even[1].classList.remove("on");
              even[2].classList.remove("on");

              even[0].classList.remove("off");
              even[1].classList.remove("off");
              even[2].classList.remove("off");
            }
          }}
        >
          {disabled ? "Stop" : "Start"}
        </button>
      </div>
    </CustomContainer>
  );
}
