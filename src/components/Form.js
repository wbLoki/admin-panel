import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { displayState } from "../features/state/stateSlice";

function Form() {
  const state = useSelector((state) => state.state.value);
  const dispatch = useDispatch();
  const handleSubmit = () => {};
  return (
    <div>
      <div className="flex">Form</div>
      <form onSubmit={handleSubmit}>
        <label>Name</label> <input type="text" name="name" required />
        <label>Username</label> <input type="text" name="username" />
        <label>City</label> <input type="text" name="city" />
        <label>Email</label> <input type="text" name="email" required />
        <button onClick={() => dispatch(displayState())}>Cancel</button>{" "}
        <button
          onClick={() => {
            switch (state) {
              case "edit":
            }
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
