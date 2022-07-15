import { useState } from "react";

import { Container } from "./styles";

export default function CountdownTimer() {
  const [message, setMessage] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("00:00");

  function handleChange(e) {
    e.preventDefault();

    if (eventName !== "" || eventDate !== "") {
      setMessage("");
    }

    switch (e.target.name) {
      case "eventName": {
        setEventName(e.target.value);

        return;
      }
      case "eventDate": {
        setEventDate(e.target.value);

        return;
      }
      case "eventTime": {
        setEventTime(e.target.value);

        return;
      }
      default:
        return;
    }
  }

  function handleClick(e) {
    e.preventDefault();

    if (eventName === "") {
      setMessage("Event name can't be blank");

      return;
    }
  }

  return (
    <Container>
      <h1>Countdown Timer</h1>

      <form onChange={handleChange}>
        <span>Event name</span>
        <input type="text" name="eventName" />
        <span>Date</span>
        <input type="date" name="eventDate" />
        <span>Optional time</span>
        <input type="time" name="eventTime" />

        <button onClick={handleClick}>Start</button>

        {message.length !== 0 ? <div>{message}</div> : ""}
      </form>
    </Container>
  );
}

/*
	"User can see a warning message if the event date or time are incorrectly entered."
	
	"User can see a warning message if the time until the event data and time that has been entered would overflow the precision of the countdown timer."
	"User can click on the 'Start' button to see the countdown timer start displaying the days, hours, minutes, and seconds until the event takes place."
	"User can see the elements in the countdown timer automatically decrement. For example, when the remaining seconds count reaches 0 the remaining minutes count will decrement by 1 and the seconds will start to countdown from 59. This progression must take place from seconds all the way up to the remaining days position in countdown display."
*/
