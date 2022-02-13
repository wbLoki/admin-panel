import React from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../features/users/userSlice";

function Edit({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      className="actionBtn bg-[#f8ab1c] px-10"
      onClick={(id) => dispatch(editUser(id))}
    >
      Edit
    </button>
  );
}

export default Edit;
