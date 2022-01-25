import React from "react";
import "./todoItems.css";

const TodoItems = (props) => {
  const { items, deleteFun } = props;
  //   const { deleteFun } = props;
  const listItem =
    items.length > 0 ? (
      items.map((e) => {
        return (
          <div key={e.id}>
            <span className="name">{e.name}</span>
            <span className="age">{e.age}</span>
            <span className="action icon" onClick={() => deleteFun(e.id)}>
              &times;
            </span>
          </div>
        );
      })
    ) : (
      <p>There Is No Item To Show</p>
    );
  return (
    <div className="listItems">
      <div>
        <span className="name title">Task</span>
        <span className="age title">Hours</span>
        <span className="action title">Action</span>
      </div>
      {listItem}
    </div>
  );
};

export default TodoItems;
