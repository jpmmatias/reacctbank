import { url } from 'inspector';
import styled from 'styled-components';

interface sectionProps {
	background: 'purple' | 'gray' | 'image';
	backgroundImage?: string;
}

export const Section = styled.section<sectionProps>``;