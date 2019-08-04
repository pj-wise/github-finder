import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onSubmit = e => {
    e.preventDefault(); //Forces no reload console.log below would not work without it
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  //REGULAR FUNCTION SYNTAX need to include this.onSubmit.bind(this)
  //   onSubmit(e) {
  //     e.preventDefault();
  //     console.log(this.state.text);
  //   }

  onChange = e => this.setState({ [e.target.name]: e.target.value }); //can also do name: e.target.value

  render() {
    return (
      <div>
        {/* with regular function syntax above MUST bind(this) */}
        {/* <form onSubmit={this.onSubmit.bind(this)} className="form">  */}
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.showClear && ( // && means if this.props.showClear is true then show button
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
