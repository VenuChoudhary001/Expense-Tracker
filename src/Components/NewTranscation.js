import React, { useState, useContext } from "react";
import { Data } from "./Context";
function NewTranscation() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { data, AddTranscation } = useContext(Data);
  return (
    <>
      <form className="form">
        <div className="form-group my-1">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text"
            className="form-control"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group my-1">
          <label htmlFor="amount">
            Amount<br></br>
            (negative-expense,positive-income)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary text-white"
          onClick={(e) => {
            e.preventDefault();
            AddTranscation({
              id: data.length + 1,
              data: text,
              amount: parseInt(amount),
            });
          }}
        >
          Add Transcation
        </button>
      </form>
    </>
  );
}

export default NewTranscation;
