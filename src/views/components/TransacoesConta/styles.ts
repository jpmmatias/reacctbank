import styled from 'styled-components';
export const Container = styled.li`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;
export const Content = styled.div`
	display: flex;
	margin-bottom: 20px;
	div {
		&:first-of-type {
			margin-right: 23px;
			max-width: 34px;
			max-height: 34px;
			img {
				width: 100%;
				height: auto;
			}
		}
		&:last-of-type {
			h1 {
				font-size: 16px;
				font-weight: 700;
				margin-bottom: 6px;
			}
			h2 {
				font-size: 18px;
				font-weight: 500;
				margin-bottom: 1%;
				color: #9b9b9b;
			}
			span {
				font-size: 20px;
				font-weight: 600;
			}
		}
	}
`;
export const Data = styled.span`
	font-size: 12px;
	color: #9b9b9b;
`;