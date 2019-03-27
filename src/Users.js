import React from 'react';
import Battle from "./Battle";

export default class Users extends React.Component{
	constructor (props){
		super();
		this.state = {

		}
	}

	componentDidMount(){
		fetch("https://api.github.com/users/sajan1231").then(res=> res.json()).then(data => console.log(data));
	}
	render(){
		console.log(this.props)
		return (
			<div className="input-box-container">
				<h1>{this.props.userName}</h1>
				<input className="input" type="text" placeholder="Enter github username"/>
				<button className="submit-btn" style={{display:'block'}}>Submit</button>
				<button className="reset-btn" style={{display:'block'}}>Reset</button>
			</div>
		)
	}
}