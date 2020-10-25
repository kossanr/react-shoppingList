import React from "react";

export default class AddItemForm extends React.Component {
  render() {
    //AddItemForm displays form, input box, and add item button
    return (
      <form>
        <input
          type="text"
          placeholder="add items"
          aria-label="Shopping list item"
        />
        <button type="submit" onSubmit>
          {" "}
          Add Item{" "}
        </button>
      </form>
    );
  }
}
