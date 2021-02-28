import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

export const Sidebar = styled.aside`
	height: 100%;
	width: 20%;
	background-color: #68de5a;
	@media (max-width: 414px) {
		div.logo {
			margin-bottom: 30%;
			margin-top: 10%;
			align-items: center;
			justify-content: center;
			img {
				margin: 0 auto !important;
				width: 80% !important;
				height: auto !important;
			}
		}
	}
	div.logo {
		cursor: pointer;
		width: 100%;
		margin-top: 15%;
		margin-bottom: 12%;
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			width: 35%;
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
						word-break: break-all;
					}
					@media (max-width: 414px) {
						width: 80%;
						align-items: center;
						img {
							width: 55%;
							height: auto;
						}
						h1 {
							font-size: 11px;
							font-weight: 400;
							color: #fff;
						}
					}
				}
			}
		}
	}
`;

interface ContentProps {
	center?: boolean;
}

export const Content = styled.main<ContentProps>`
	display: ${(props) => props.center && 'flex'};
	justify-content: ${(props) => props.center && 'center'};
	align-items: ${(props) => props.center && 'center'};
	margin: auto;
	height: 90%;
	width: 70%;

	.logoutButton{
		width: 40px;
    height: auto;
		cursor: pointer;
		img{
			width:100%;
			height:auto;
		}
	}
	.lancamentosCard{
		width: 100%;
		height:48%;
		display: flex;
		margin-top: 3%;
		.cardLancamentosWrapper{
			overflow-y:auto;
			width: 100%;
			border-radius: 8px;
		}
		@media (max-width: 728px) {
			height: 30%;
		}
						
	}
	.contas {
		display: flex;
		justify-content: space-between;
		margin-top: 1.5%;
    height: 40%;
		align-items:center;
		width:100%;
		.cardConta {
			width: 47%; 
			display: flex; 
			height: 80%;
		}
		@media (max-width: 728px) {
			flex-direction: column;
			height: 60%;
			justify-content: space-around;
			.cardConta {
			width: 100%;
			display: flex;
			height: 46%;
		}
		}

	}

	.lançamentos {
		height: 70%;
		overflow: auto;
		.aindantemlancamentos{
			font-size:22px;
		}
	}
	.contentHead {
		display: flex;
		justify-content: space-between;
		h1 {
			color: #fff;
		}
		@media (max-width: 728px) {
			h1{
				font-size:18px;
			}
		}
	}
	}
	.cardContentTitle {
		display: flex;
		height: 38px;
		align-items: center;
		margin-bottom: 12px;
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

		@media (max-width: 728px) {
			height: 18px;
			margin-bottom: 15px;
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
	}
	.cardContentMain {
		margin-bottom: 5px;
		h2 {
			margin-bottom: 5px;
			font-size: 18px;
			color: #9b9b9b;
			font-weight: 400;
		}
		span {
			font-size: 22px;
			font-weight: 700;
			line-height: 35px;
		}

		@media (max-width: 728px) {
		margin-bottom:5px;
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
			@media (max-width: 869) {
				font-size: 18px;
				font-weight: 700;
				line-height: 15px;
			}
			@media (max-width: 414) {
				font-size: 22px;
				font-weight: 700;
				line-height: 15px;
			}
		}

		@media (max-width: 1003px) {
			h2 {
				margin-right: 15px;
		}
			span {
				font-size: 22px;
				font-weight: 700;
				line-height: 15px;
			}
		}
	
	
	
`;
