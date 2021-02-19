import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/pages/Home';
import Login from '../views/pages/Login';
import RecoveryPass from '../views/pages/RecoveryPass';

function Routes() {
	return (
		<Switch>
			<Route exact path='/' render={Home} />
			<Route exact path='/login' render={Login} />
			<Route exact path='/recoveryPass' render={RecoveryPass} />
		</Switch>
	);
}

export default Routes;
