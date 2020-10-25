import React from "react";

export default function ShoppingItem(props) {
  return (
    <li>
      <h2
        style={{ textDecoration: props.item.checked ? "line-through" : null }}
      >
        {props.item.name}
      </h2>
      <button type="button">Add</button>
      <button type="button">Delete</button>
    </li>
  );
}
