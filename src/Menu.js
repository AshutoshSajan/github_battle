import React from "react";

export default class Menu extends React.Component {
  handleClick = (e, props) => {
    var text = e.target.innerText;
    this.props.updateSearch(text);
  };

  render = () => {
    return (
      <ul className="ul">
        <li>
          <button className={"filter-btn"} onClick={this.handleClick}>
            All
          </button>
        </li>
        <li>
          <button className={"filter-btn"} onClick={this.handleClick}>
            Javascript
          </button>
        </li>
        <li>
          <button className={"filter-btn"} onClick={this.handleClick}>
            Ruby
          </button>
        </li>
        <li>
          <button className={"filter-btn"} onClick={this.handleClick}>
            Java
          </button>
        </li>
        <li>
          <button className={"filter-btn"} onClick={this.handleClick}>
            CSS
          </button>
        </li>
        <li>
          <button className={"filter-btn"} onClick={this.handleClick}>
            Python
          </button>
        </li>
      </ul>
    );
  };
}
