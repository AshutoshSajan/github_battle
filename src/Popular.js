import React from 'react';
import Loading from './Loading';

export default class Popular extends React.Component{
	constructor(){
		super();
		this.state = {
			repos: [],
			loading: false
		}
	}

	componentDidMount(){
		this.setState({loading: true});
		fetch("https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories")
		.then(res => res.json())
		.then(({items}) => this.setState({repos: items, loading: false}));
	}

	render(){
		console.log(this.state.data)
		// var error = error;
		return (
			<div>
				{
					navigator.onLine ? 
						<div style={{display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gridGap: "20px"}}>
							{this.state.loading ? <Loading /> :this.state.repos.map((repo, index) => <Repo repoData={repo} rank={index + 1} />)}
						</div>
				: <div className="networkError">No internet connection</div>
			}
			</div>
		)
	}
}

 function Repo(props) {
 	console.log(props);
	const {name, owner} = props.repoData;
	return (
		<div className="repo-container">
			<p>{"#" + props.rank}</p>
			<h1>{name}</h1>
			<img src={owner.avatar_url}
			style={{width:"150px", borderRadius:"50%", marginTop:"20px"}}/>
		</div>
	)
}