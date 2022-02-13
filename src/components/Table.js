import React, { useEffect, useState } from "react";
import Row from "./Row";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/users/userSlice";

function Table() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const apiUrl =
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

  useEffect(async () => {
    await axios({
      method: "GET",
      url: apiUrl,
    }).then((res) => {
      console.log(res.data);
      dispatch(addUser(res.data));
    });
  }, []);

  setUsers(useSelector((state) => state.users));
  console.log(users);

  return (
    <div>
      <div className="flex justify-between">
        <p className="font-semibold text-lg">User list</p>
        <button className="actionBtn bg-[#0e74b8]">Add new user</button>
      </div>
      <div className="flex justify-center">
        <table className="table-fixed border min-w-full mt-4">
          <thead className="bg-slate-700 py-4">
            <tr>
              <th className="p-4">Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <Row data={user} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
