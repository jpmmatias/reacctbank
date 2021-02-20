import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../views/pages/Dashboard';
import Home from '../views/pages/Home';
import Login from '../views/pages/Login';
import RecoveryPass from '../views/pages/RecoveryPass';

function Routes() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/login' component={Login} />
			<Route path='/dashboard' component={Dashboard} />
			<Route exact path='/recoveryPass' render={RecoveryPass} />
		</Switch>
	);
}

export default Routes;
