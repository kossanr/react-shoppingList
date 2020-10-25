import React from "react";
import AddItemForm from "./AddItemForm";
import ShoppingList from "./ShoppingList";

export default class App extends React.Component {
  //create state

  state = {
    //state object
    shoppingItems: [
      { name: "apples", checked: false },
      { name: "yogurt", checked: true },
      { name: "carrots", checked: true },
    ],
  };
  render() {
    //App conatins title, Shoppinglist with prop items, and AddItemForm
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList items={this.state.shoppingItems} />
          </section>
        </main>
      </>
    );
  }
}
