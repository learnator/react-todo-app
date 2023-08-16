import React from "react";
import Header from "./Components/Header";
import AddTodoItem from "./Components/AddTodoItem";

function App() {
  return (
    <>
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h1>Todo Items</h1>
        </div>
        <div className="col-6">
          <AddTodoItem />
        </div>
      </div>
    </>
  );
}

export default App;
