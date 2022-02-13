import React from "react";
import { useDispatch } from "react-redux";
import { editState } from "../features/state/stateSlice";

function Edit({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      className="actionBtn bg-[#f8ab1c] px-10"
      onClick={(id) => dispatch(editState(id))}
    >
      Edit
    </button>
  );
}

export default Edit;
