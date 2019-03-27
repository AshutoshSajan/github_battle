import React from "react";

export default class Player extends React.Component {
	state = {
		username: "",
		userInfo: null
	}

	handleChange = (e) => {
		if(e.key === "Enter"){
			console.log(e)
		}
		this.setState({username: e.target.value})
	}

	handleSubmit = (e, props) => {
		fetch(`https://api.github.com/users/${this.state.username}`)
			.then(res => res.json())
			.then(data => {
				this.props.updateState(data, this.props.playerName);
				this.setState({userInfo: data});
			})
	}

	handleReset = (props) => {
		this.setState({username: "", userInfo: ""});
		this.props.updateState({one:"", two: ""});
	}

	render = () => {
		console.log(this.state.userInfo)
		return(
			<div className="input-box-container">
				{
					this.state.userInfo ? 
						<div className="userInfo">
							<img style={{width: "300px", borderRadius:"50%"}} src={this.state.userInfo ? this.state.userInfo.avatar_url : ""} />
							<div className="para">
								<p>{this.state.userInfo && this.state.userInfo.login}</p>
								<p>followers  {this.state.userInfo && this.state.userInfo.followers}</p>
								<p>following  {this.state.userInfo && this.state.userInfo.following}</p>
								<p>publi gists {this.state.userInfo && this.state.userInfo.public_repos}</p>
								<p>public repos {this.state.userInfo && this.state.userInfo.public_gists}</p>
							</div>
							<button  className="reset-btn" type="submit" onClick={this.props.handleReset} onClick={this.handleReset}>Reset</button>
						</div>
					 :
						<div>
							<h1>{"Player " + this.props.playerName}</h1>
							<input className="input" onKeyUp={this.handleChange} defaultValue={this.state.username} type="text" placeholder="Enter Github username" />
							<button  className="submit-btn" type="submit" onClick={this.handleSubmit}>Submit</button>
						</div>
				}
			</div>
		)
	}
}