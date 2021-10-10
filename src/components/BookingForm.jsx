import { useState } from "react";

import Input from "./Input";
import { inputName, inputEmail, inputDate, inputTime } from "../data/form.json";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const isDisabled = !(name && email && date && time);

  function submitForm(event) {
    event.preventDefault();
    resetState();
    alert("Your booking request is saved!");
  }

  function resetState() {
    setName("");
    setEmail("");
    setDate("");
    setTime("");
  }

  return (
    <section className="booking">
      <h2>Book a table</h2>
      <form className="booking-form">
        <Input hook={[name, setName]} HTMLParameters={inputName}>
          Full Name*
        </Input>
        <Input hook={[email, setEmail]} HTMLParameters={inputEmail}>
          Email*
        </Input>
        <Input hook={[date, setDate]} HTMLParameters={inputDate}>
          Date*
        </Input>
        <Input hook={[time, setTime]} HTMLParameters={inputTime}>
          Time*
        </Input>
        <button
          type="submit"
          className="button submit-btn"
          disabled={isDisabled}
          onClick={(event) => submitForm(event)}
        >
          Book
        </button>
      </form>
    </section>
  );
}
