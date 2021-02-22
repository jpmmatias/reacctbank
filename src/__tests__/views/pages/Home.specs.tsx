import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../views/pages/Home';

describe('Home App', () => {
	it('Sign In', () => {
		const { debug } = render(<Home />);
	});
});
