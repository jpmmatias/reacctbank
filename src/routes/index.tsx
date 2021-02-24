import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../views/pages/Dashboard';
import Home from '../views/pages/Home';
import Login from '../views/pages/Login';
import RecoveryPass from '../views/pages/RecoveryPass';
import RecoveryPass2 from '../views/pages/RecoveryPass2';
import PrivateRoute from './privateRoute';
import ErrorPage from '../views/pages/ErrorPage';

function Routes() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/login' component={Login} />
			<PrivateRoute path='/dashboard' component={Dashboard} />
			<Route exact path='/recoveryPass' component={RecoveryPass} />
			<Route path='/recoveryPass/:temporaryPass' component={RecoveryPass2} />
			<Route path='/errorPage' component={ErrorPage} />
		</Switch>
	);
}

export default Routes;
