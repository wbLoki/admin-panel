import React from "react";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import { useSelector } from "react-redux";

function App() {
  console.log(useSelector((state) => state.state));
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="font-semibold text-6xl">
          {/* Dashboard/{useSelector((state) => state.state)} */}
        </h1>
      </header>
      <div className="flex justify-center">
        <div className="border p-4 Main-table rounded-lg text-slate-300 min-w-[80%]">
          {/* <Table /> */}
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
