/* eslint-disable react/prop-types */
import { useState } from "react";

export function NewTodoForm(/*props*/ {onSubmit}) {
    const [newItem, setNewItem] = useState("");

// props allows you to pass information to custom components or we can call onsubmit directly, called destructing
    function handelSubmit(event) {
        event.preventDefault();

        if(newItem === "" ) return;

        // props.onSubmit(newItem);
        onSubmit(newItem);

        setNewItem("");
      }

  return(

  <form className="new-item-form" onSubmit={handelSubmit}>
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input
        type="text"
        id="item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
    </div>
    <button className="btn">Add</button>
  </form>
  )
}
