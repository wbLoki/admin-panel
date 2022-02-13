import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/users/userSlice";

function Edit({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      className="actionBtn bg-[#f8361c] px-10"
      onClick={(id) => dispatch(deleteUser(id))}
    >
      Delete
    </button>
  );
}

export default Edit;
