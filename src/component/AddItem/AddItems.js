import React from "react";
import "./AddItems.css";

class AddItems extends React.Component {
  state = {
    name: "",
    age: "",
  };

  handleChange = (e) => {
    // console.log(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    // let addFun = this.props.addFun;
    // addFun(this.s);
    if (e.target.name.value === "" && e.target.age.value === "") {
      return false;
    } else {
      this.props.addFun(this.state);
      this.setState({
        name: "",
        age: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter task..."
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Enter hours..."
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddItems;
