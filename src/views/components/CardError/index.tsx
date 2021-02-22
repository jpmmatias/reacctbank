import React from 'react';
import { Container } from './style';

interface CardProps {
	children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
	return <Container>{children}</Container>;
};

export default Card;