import styled from 'styled-components';

export const Section = styled.section`
	width: 100vw;
	height: 100vh;
`;

interface Input{
	isInvalid:string
}

export const Input = styled.input<Input>`
	display:flex;
	width:100%;
	border: ${(props) => !! props.isInvalid && '1px solid red !important'};
	margin:0px !important;
	margin-bottom:${(props) => !! !props.isInvalid && '30px !important'};
`

export const InputMessage = styled.div`
	margin-bottom:30px;
	
	Input{
		margin:0px !important;
	}
	
	p{
		font-size:xx-small;
		color:red;	
	}
`
