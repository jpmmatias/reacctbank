import React from 'react';
import { render } from '@testing-library/react';
import Login from '../../../views/pages/Login';

describe('Login app', () => {
	it('Login', () => {
		const { debug } = render(<Login />);
	});
});
