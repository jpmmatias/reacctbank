import React, { ReactNode } from 'react';
import { Container } from './style';

interface SectionProps {
	background: 'purple' | 'gray' | 'image';
	backgroundImage?: string;
	children: ReactNode;
}

const Section = ({ background, backgroundImage, children }: SectionProps) => {
	return (
		<Container background={background} backgroundImage={backgroundImage}>
			{children}
		</Container>
	);
};

export default Section;
