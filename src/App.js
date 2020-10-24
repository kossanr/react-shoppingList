import React from "react";
import AddItemForm from "./AddItemForm";
import ShoppingList from "./ShoppingList";

export default class App extends React.Component {
  //create state

  state = {
    shoppingItems: [],
  };
  render() {
    return <main className="App">{/* content goes here */}</main>;
  }
}
