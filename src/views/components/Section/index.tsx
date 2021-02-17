import React, { ReactNode } from 'react';
import { Section } from './style';

interface SectionProps {
	background: 'purple' | 'gray' | 'image';
	backgroundImage?: string;
	children: ReactNode;
}

const SectionHome = ({
	background,
	backgroundImage,
	children,
}: SectionProps) => {
	return (
		<Section background={background} backgroundImage={backgroundImage}>
			{children}
		</Section>
	);
};

export default SectionHome;
