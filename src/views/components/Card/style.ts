import styled from 'styled-components';

export const Container = styled.div`
  @media(max-width: 360px) {
    display: flex;
  }

	@media (max-width: 768px) {
		background-color: none;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	flex: 1;
	background-color: #fbfbfb;
	border-radius: 8px;
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
	padding: 25px 37px;

  @media(max-width: 360px) {
    background-color: #fbfbfb;
    border-radius: 8px;
    padding: 8px;
  }

	.homeFormTitle {
		font-size: 19px;
		font-weight: 700;
		margin-bottom: 30px;
		text-align: center;
		
    @media (max-width: 768px) {
			margin-bottom: 10px;
			font-size: 16px;
		}

    @media(max-width: 360px) {
      font-size: 12px;
    }
	}

	form {
		display: flex;
		flex-direction: column;

    @media(max-width: 360px) {
      display: grid;      
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      gap: 2px;
      margin-left: 6px;
    }

		input {
			border: none;
			border-bottom: 1px solid #878686;
			background: none;
			padding: 5px;
			font-weight: 600;

      @media(max-width: 360px) {
        width: 100px;
      }

			@media (max-width: 768px) {
				margin-bottom: 20px;
			}

			&::placeholder {
				font-size: 12px;
				color: #878686;
				font-weight: 500;
			}
		}
	}
`;
