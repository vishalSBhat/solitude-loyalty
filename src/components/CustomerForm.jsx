import React, { Component } from "react";
import TextField from "./TextField";
import updateSearch from "../utils/updateSearch";

export default class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      itemName: "",
      itemsList: [],
      searchList: [],
      errors: {
        name: null,
        date: null,
        itemsList: null,
      },
    };
  }

  setField = (e) => {
    console.log(this.props.menu);
    const val =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    this.setState({ [e.target.name]: val });
    if (e.target.name === "itemName")
      this.setState({
        searchList: updateSearch(
          e.target.value,
          this.props.menu,
          this.state.itemsList
        ),
      });
  };

  updateItem = (item) =>
    this.setState({
      itemsList: [...this.state.itemsList, item],
      searchList: [],
      itemName: "",
      errors: { ...this.state.errors, itemsList: null },
    });

  validate = () => {
    let errors = {
      name: null,
      date: null,
      itemsList: null,
    };
    if (this.state.name === "") errors.name = "This field is required";
    else if (this.state.name.length <= 2 || this.state.name.length > 15)
      errors.name = "Name should have 2 to 15 characters";
    if (this.state.date === "") errors.date = "This field is required";
    if (this.state.itemsList.length === 0)
      errors.itemsList = "You should add atleast 1 dish.";
    this.setState({ errors });
    if (
      errors.name === null &&
      errors.date === null &&
      errors.itemsList === null
    )
      return true;
    else return false;
  };

  formSubmit = () => {
    if (this.validate()) {
      this.props.onSubmit(this.state);
      this.setState({ name: "", date: "", itemsList: [] });
    } else return;
  };

  render() {
    return (
      <div className="px-4">
        <TextField
          type="text"
          value={this.state.name}
          name="name"
          placeholder="Your Name"
          onChange={this.setField}
          error={this.state.errors.name}
        />
        <TextField
          type="date"
          value={this.state.date}
          name="date"
          placeholder=""
          onChange={this.setField}
          error={this.state.errors.date}
        />
        {this.state.itemsList.length > 0 && (
          <ul className="mt-2 mb-0 pb-0">
            {this.state.itemsList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
        <TextField
          type="text"
          value={this.state.itemName}
          name="itemName"
          placeholder="Dish"
          onChange={this.setField}
          error={this.state.errors.itemsList}
        />
        <div style={{ position: "relative", height: "130px" }}>
          {this.state.searchList.length > 0 && (
            <div className="row mt-1 dish-list-box">
              <div className="col-10 col-sm-4 p-0">
                {this.state.searchList.map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    className="py-2 px-3 m-0 dish-name"
                    onClick={() => this.updateItem(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          <button
            type="button"
            className="btn btn-md btn-light my-3"
            onClick={this.formSubmit}
          >
            View Timeline
          </button>
        </div>
      </div>
    );
  }
}
