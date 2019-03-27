// import React, { Component } from 'react';
// import Popular from "./Popular";

// export default class Data extends Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			data: []
// 		}
// 	}

// 	componentDidMount(){
// 		fetch("https://cors-anywhere.herokuapp.com/" + "https://api.github.com/search/repositories?q=topic:java+topic:javaScript+topic:python+topic:java+topic:c+topic:c++").then(res => res.json()).then(user => this.setState({data: user.items}));
// 	}

// 	render(){
// 		return (
// 			<section>
// 				{this.state.data.map(v => <Popular repoData={v} />)}
// 			</section>
// 		)
// 	}
// }