import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/pages/Home';
import Login from '../views/pages/Login';

function Routes() {
	return (
		<Switch>
			<Route exact path='/' render={Home} />
			<Route exact path='/login' render={Login} />
		</Switch>
	);
}

export default Routes;
