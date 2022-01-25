import React from "react";
import "./App.css";
import TodoItems from "./component/todoItems/TodoItems";
import AddItems from "./component/AddItem/AddItems";

class App extends React.Component {
  state = {
    itemsData: [
      { id: 1, name: "Task 1", age: 20 },
      { id: 2, name: "Task 2", age: 22 },
      { id: 3, name: "Task 3", age: 40 },
    ],
  };

  deleteItem = (idEle) => {
    // First Way
    // let allItems = this.state.itemsData;
    // let eleDeleted = allItems.findIndex((item) => item.id === idEle);
    // allItems.splice(eleDeleted, 1);
    // this.setState({ itemsData: allItems });

    // Second Way
    let allItems = this.state.itemsData.filter((e) => {
      return e.id !== idEle;
    });
    this.setState({ itemsData: allItems });
  };

  addNewItems = (newEle) => {
    newEle.id = Math.random();
    let allItems = this.state.itemsData;
    allItems.push(newEle);
    this.setState({ itemsData: allItems });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo</h1>
        <TodoItems items={this.state.itemsData} deleteFun={this.deleteItem} />
        <AddItems addFun={this.addNewItems} />
      </div>
    );
  }
}

export default App;
