import React from "react";
import Edit from "./Edit";
import Delete from "./Delete";

function Row({ data }) {
  const { id, name, username, email, address } = data;
  return (
    <tr>
      <td className="py-4">{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{address.city}</td>
      <td>
        <Edit id={id} />
      </td>
      <td>{/* <Delete /> */}</td>
    </tr>
  );
}

export default Row;
