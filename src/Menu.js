import React from "react";

export default class Menu extends React.Component {
  handleClick = (e) => {
    var text = e.target.value || e.target.innerText;
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
        <li>
          <select onChange={this.handleClick}>
            <option value="all">All</option>
            <option value="erlang">Erlang</option>
            <option value="elixir">Elixir</option>
            <option value="rust">Rust</option>
            <option value="dart">Dart</option>
            <option value="go">Go</option>
            <option value="bash">Bash</option>
            <option value="lua">Lua</option>
            <option value="c++">C++</option>
            <option value="c">C</option>
            <option value="c%23">C#</option>
            <option value="typescript">TypeScript</option>
            <option value="assembly">Assembly</option>
            <option value="haskell">Haskell</option>
            <option value="scala">Scala</option>
            <option value="julia">Julia</option>
            <option value="swift">Swift</option>
          </select>
        </li>
      </ul>
    );
  };
}
