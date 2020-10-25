import React from "react";

export default function ShoppingItem(props) {
  return (
    <li>
      <h2
        style={{ textDecoration: props.item.checked ? "line-through" : null }}
      >
        {props.item.name}
      </h2>
      <button type="button" onClick={() => props.handleCheckItem(props.item)}>
        Check
      </button>
      <button type="button" onClick={() => props.handleDeleteItem(props.item)}>
        Delete
      </button>
    </li>
  );
}
ShoppingItem.defaultProps = {
  item: {},
};
