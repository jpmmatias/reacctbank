import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
	return (
		<>
    <Provider store={store}>
			<GlobalStyle />
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
    </Provider>
		</>
	);
};

export default App;
