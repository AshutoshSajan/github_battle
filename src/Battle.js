// function PlayerPreview(props){
// 	return (
// 		<div>
// 			<div className="column">
// 				<img className="avatar"
// 				src={props.avatar}
// 				alt={"Avatar for " props.username}/>
// 				<h2 className="username">@{props.username}</h2>
// 			</div>
// 			<button className="reset", onClick={props.onReset.bind(null, props.id)}>
// 				Reset
// 			</button>
// 		</div>
// 	)
// }

// handleSubmit(id, username){
// 	this.setState(function(){
// 		var newState = {};
// 		newState[id + 'Name'] = username;
// 		newState[id + 'Image'] = 'https';
// 	})
// }
// export default class Battle extends React.Component {
// 	constructor(){
// 		super();
// 		this.username = "";
// 		this.input = ""
// 		this.state = {};
// 		console.log(this.state)
// 	}

// 	handleEnter = (e) => {
// 		if(e.key === 'Enter' && e.target.value.trim()){
// 			this.username = e.target.value;
// 			this.input = e.target;
// 			fetch("https://cors-anywhere.herokuapp.com/" + `https://api.github.com/users/${this.username}`).then(res => res.json()).then(data => this.setState(data));
// 			console.log(this.state);
// 			e.target.value = "";
// 		}
// 	}

// 	handleClick(e){
// 		// if(this.refs.myInput !== null){
// 		// 	var inpt = this.refs.myInput;

// 		// 	console.log(inpt);
// 		// 	// this.username = e.target.previousElementSibling.innerText;
// 		// 	fetch("https://cors-anywhere.herokuapp.com/" + `https://api.github.com/users/${inpt}`).then(res => res.json()).then(data => this.setState(data));
// 		// 	console.log(this.state);
// 		// 	e.target.value = "";
// 		// }
// 	}

// 	render = () => {
// 		var playerOneName = this.state.playerOneName;
// 		var playerTwoName = this.state.playerTwoName;
// 		var playerOneImage = this.state.playerOneImage;
// 		var playerTwoImage = this.state.playerTwoImage;

// 		return(
// 			<section>
// 				<div className="input-box-container">
// 				{!playerOneName && <PlayerInput id='playerOne'
// 					label='player one'
// 					onSubmit={this.handleSubmit}
// 				}/>}

// 				{playerOneImage !== null && <PlayerPreview avatar={playerOneImage}
// 				username={playerOneName}
// 				onReset={this.handleReset}
// 				id="playerOne"/>}

// 				{!playerTwoName && <PlayerInput id='playerTwo'
// 					label='player two'
// 					onSubmit={this.handleSubmit}
// 				}/>}

// 				{playerTwoImage !== null && <PlayerPreview avatar={playerTwoImage}
// 				username={playerTwoName}
// 				onReset={this.handleReset}
// 				id="playerTwo"/>}
				
// 					<div>
// 						<input className="input" ref="myInput" placeholder="Enter github username" onKeyPress={this.handleEnter}/>
// 						<button className="submit-btn" onClick={this.handleClick}>Submit</button>
// 						<button className="reset-btn">Reset</button>
// 						<div>
// 						<img src={this.state.avatar_url} />
// 						<p>{this.state.login}</p>
// 						</div>
// 					</div>
// 					<div>
// 						<input className="input" placeholder="Enter github username" onKeyPress={this.handleEnter}/>
// 						<button className="submit-btn">Submit</button>
// 						<div>
// 						<img src={this.state.avatar_url} />
// 						<p>{this.state.login}</p>
// 						</div>
// 						<button className="reset-btn">Reset</button>
// 					</div>
// 				</div>
// 				<button className="battle-btn">Battle</button>
// 			</section>
// 		)
// 	}
// }

import React, { Component } from 'react';
import Player from "./Player";

export default class Battle extends React.Component{
	state = {
		one: null,
		two: null,
		oneResult: "",
		twoResult: ""
	}

	updateState = (data, key) => {
		if(data && key){
			this.setState({[key]: data});
		}else {
			this.setState({oneResult:"", twoResult:"", one:"", two:0})
		}
	}

	handleReset = () => { console.log(this.state)
		this.setState({oneResult:"", twoResult:""})
	}
	
	handleBattle = () => (
		(this.state.one.public_repos > this.state.two.public_repos ? this.setState({oneResult: "Winner", twoResult:"Looser"}) : "" )|| (this.state.two.public_repos > this.state.one.public_repos ? this.setState({oneResult: "Looser", twoResult:"Winner"}) : "")
	)

	render(){
		return(
			<section>
					{
						this.state.oneResult && this.state.twoResult ? 
						<div className="result">
							<p>{this.state.oneResult}</p>
							<p>{this.state.twoResult}</p>
						</div> : ""
					}

				<div style={{display:'flex', justifyContent:'space-around'}}>
					<Player playerName="one" updateState={this.updateState} handleReset={this.handleReset}/>
					<Player playerName="two" updateState={this.updateState} handleReset={this.handleReset}/>
				</div>
				{
					this.state.one && this.state.two && (!this.state.oneResult && !this.state.twoResult)  ? 
					<button	className="battle" onClick={this.handleBattle}>Battle
					</button> : ""
				}
			</section>
		)
	}
}