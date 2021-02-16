import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/pages/Home';

function Routes() {
	return (
		<Switch>
			<Route exact path='/' render={Home} />
		</Switch>
	);
}

export default Routes;
