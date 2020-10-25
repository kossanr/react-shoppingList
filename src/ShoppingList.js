import React from "react";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList(props) {
  return (
    <ul>
      {props.items.map((item, i) => (
        <ShoppingItem
          handleCheckItem={props.handleCheckItem}
          handleDeleteItem={props.handleDeleteItem}
          key={i}
          item={item}
        />
      ))}
    </ul>
  );
}

ShoppingList.defaultProps = {
  items: [],
};
