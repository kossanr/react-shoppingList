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

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter((itm) => itm !== item);
    this.setState({
      shoppingItems: newItems,
    });
  };
  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map((itm) => {
      if (itm === item) {
        itm.checked = !itm.checked;
      }
      return itm;
    });
    this.setState({
      shoppingItems: newItems,
    });
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
            <ShoppingList
              handleCheckItem={this.handleCheckItem}
              handleDeleteItem={this.handleDeleteItem}
              items={this.state.shoppingItems}
            />
          </section>
        </main>
      </>
    );
  }
}
