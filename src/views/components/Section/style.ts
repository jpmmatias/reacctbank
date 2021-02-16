import styled from 'styled-components';

interface sectionProps {
	background: 'purple' | 'white' | 'image';
}

export const Section = styled.section<sectionProps>`
	width: 100vw;
	height: 100vh;
	background-color: ${(props) =>
		props.background === 'purple' ? '#8C52E5' : '#EAEAEA'};
`;
