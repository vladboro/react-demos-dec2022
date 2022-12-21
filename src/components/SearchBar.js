import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    console.log("render");
    return (
      <div className="ui segment">
        <form
          method="post"
          className="ui form"
          onSubmit={(event) => {
            console.log("submit");
            event.preventDefault();
            this.props.onSearchSubmit(this.state.term);
          }}
        >
          <div className="field">
            <label>Image Search</label>
            <input
              name="term"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
