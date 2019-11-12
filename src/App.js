import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import './App.css';

class App extends React.Component{
	render(){
		return (
			<Switch>
				<Route exact path="/" component={Mainpage}/>
			</Switch>
		)
	}
}

export default App;
