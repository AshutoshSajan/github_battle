import React from 'react';
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

	handleReset = () => {
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
							<p className="para">{this.state.oneResult}</p>
							<p className="para">{this.state.twoResult}</p>
						</div> : ""
					}

				<div style={{display:'flex', justifyContent:'space-around'}}>
					<Player playerName="one" updateState={this.updateState} handleReset={this.handleReset}/>
					<Player playerName="two" updateState={this.updateState} handleReset={this.handleReset}/>
				</div>
				<div>
				{
					this.state.one && this.state.two && (!this.state.oneResult && !this.state.twoResult)  ? 
					<button	className="battle-btn" onClick={this.handleBattle}>Battle
					</button> : ""
				}
				</div>
			</section>
		)
	}
}