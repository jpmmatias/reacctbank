import React from 'react';
import { render } from '@testing-library/react';
import RecoveryPass from '../../../views/pages/RecoveryPass';

describe('RecoveryPass app', () => {
	it('RecoveryPass', () => {
		const { debug } = render(<RecoveryPass />);
	});
});
