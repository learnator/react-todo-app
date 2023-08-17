import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { addTodoItem, getAllTodoItems } from "../Services/TodoItemService";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function AddTodoItem() {
  const description = useRef();
  const dueDate = useRef();
  const [count, setCount] = useState(1);

  const onResetTodoForm = (event) => {
    event.preventDefault();
    description.current.value = "";
    dueDate.current.value = "";
  };

  const onTodoFormSubmitted = (event) => {
    event.preventDefault();
    setCount(count + 1);
    const data = {
      desc: description.current.value,
      due: dueDate.current.value,
      id: count,
    };
    addTodoItem(data);
    getAllTodoItems();
  };

  return (
    <>
      <div className="row my-4">
        <div className="row">
          <div className="col d-flex">
            <div className="vr"></div>
            <h3 className="mx-3">Add New Item</h3>
          </div>
        </div>
        <div className="row">
          <hr />
          <div className="col">
            {/* <div className="vr"></div> */}
            <div className="m-3">
              <form>
                <TextField
                  id="filled-basic"
                  label="Description"
                  variant="filled"
                  inputRef={description}
                />
                <br />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="mt-5"
                    id="filled-basic"
                    label="Due Date"
                    variant="filled"
                    inputRef={dueDate}
                  />
                </LocalizationProvider>
                <div className="row">
                  <div className="col">
                    <button
                      className="btn shadow-sm mt-4"
                      onClick={onResetTodoForm}>
                      Cancel
                    </button>
                    <button
                      className="btn btn-primary shadow-sm mt-4 mx-3"
                      onClick={onTodoFormSubmitted}>
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodoItem;
