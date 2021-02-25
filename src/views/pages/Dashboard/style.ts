import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

export const Sidebar = styled.aside`
	height: 100%;
	width: 12%;
	background-color: #68de5a;

	div.logo {
		width: 100%;
		margin-top: 5%;
		margin-bottom: 10%;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 75%;
			height: auto;
		}
	}

	nav {
		height: 100%;
		ul {
			height: 60%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 0 3%;

			li {
				margin-bottom: 5%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				div {
					cursor: pointer;
					padding: 5.5%;
					width: 60%;
					height: 100%;
					border-radius: 5px;
					display: flex;
					flex-direction: column;
					background-color: #8c52e5;
					justify-content: space-around;

					img {
						width: 35%;
						height: auto;
					}
					h1 {
						font-size: 14px;
						font-weight: 400;
						color: #fff;
					}
				}
			}
		}
	}
`;

interface ContentProps{
	center?:boolean;
}

export const Content = styled.main<ContentProps>`
	display:${(props) => props.center && 'flex'};
	justify-content:${(props) => props.center && 'center'};
    align-items:${(props) => props.center && 'center'};
	margin: auto;
	height: 90%;
	width: 70%;	
	.lançamentos {
		height: 70%;
		overflow: auto;
	}
	.contentHead {
		display: flex;
		justify-content: space-between;
		h1 {
			color: #fff;
		}
	}
	.cardContentTitle {
		display: flex;
		height: 38px;
		align-items: center;
		margin-bottom: 36px;
		img {
			margin-right: 21px;
			height: 100%;
			width: auto;
		}
		h1 {
			font-size: 18px;
			color: #9b9b9b;
			font-weight: 400;
		}
	}
	.cardContentMain {
		margin-bottom: 16px;
		h2 {
			margin-bottom: 5px;
			font-size: 18px;
			color: #9b9b9b;
			font-weight: 400;
		}
		span {
			font-size: 30px;
			font-weight: 700;
			line-height: 35px;
		}
	}
	.cardContentTotal {
		display: flex;
		align-items: center;
		h2 {
			font-size: 18px;
			color: #9b9b9b;
			font-weight: 400;
			margin-right: 50px;
		}
		span {
			font-weight: 700;
			font-size: 30px;
			color: #68de5a;
		}
	}
`;
