import React from 'react';
import Loading from './Loading';
import Menu from './Menu';



export default class Popular extends React.Component{
	constructor(){
		super();
		this.state = {
			repos: [],
			loading: false,
			lang: "All"
		}
	}

	componentDidMount = (val = "All") => {
		this.setState({loading: true});
		fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${val}&sort=stars&order=desc&type=Repositories`)
		.then(res => res.json())
		.then(({items}) => this.setState({repos: items, loading: false}));
	}

	// toggleClass = (e) => {
	// 	const currentState = this.state.active;
	// 	this.setState({ active: !currentState });
	// 	var newClass = this.state.active ? 'list': "links";
	// 	e.target.classList.add(newClass);
  //}

	 handleLinks = (val) => {
	 		this.componentDidMount(val)
	 		this.setState({lang: val})
	 }

	render = () => {
		return (
			<>
        <Menu updateSearch={this.handleLinks}/>
				{
					navigator.onLine ? 
						<div className={"main-container"} >
							{this.state.loading ? <Loading /> :this.state.repos.map((repo, index) => {
								return (<Repo repoData={repo} rank={index + 1} key={repo.name}/>)
							})
						}
						</div>
				: <div className="networkError">No internet connection</div>
			}
			</>
		)
	}
}


 function Repo(props) {
	const {name, owner} = props.repoData;
	return (
		<div>
			<div className="repo-container">
				<p>{"#" + props.rank}</p>
				<h1>{name}</h1>
				<img src={owner.avatar_url}
				style={{width:"150px", borderRadius:"50%", marginTop:"20px"}} alt={"players"}/>
			</div>
		</div>
	)
}