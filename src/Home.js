import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Home extends React.Component {
	render(){
		return(
			<div className='home-container'>
				<h1>Github Battle: Battle your friends...</h1>
				<Link className='button' to='./battle'>
					Battle
				</Link>
			</div>
		)
	}
}