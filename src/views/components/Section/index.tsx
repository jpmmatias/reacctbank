import React, { ReactNode } from 'react';
import { Section } from './style';

interface SectionProps {
	background: 'purple' | 'white' | 'image';
	children: ReactNode;
}

const SectionHome = ({ background, children }: SectionProps) => {
	return <Section background={background}>{children}</Section>;
};

export default SectionHome;
