import styled from 'styled-components';

export const Container = styled.div`

    width: 50%;
    height: 50%;

    form{
        display:flex;
        flex-direction:row;
        margin-top:25px;
        
        .grid-container {
            display: grid;
            grid-template-columns: auto auto;
            padding: 10px;
        }

        .grid-item{
            padding: 20px;
        }

        button{
            width:100px;
            height:50px;
            border-radius:15px;
            background-color:#8c52e5;
            border:1px;
            color:#fff;

            &:hover{
                background-color:#7545c1   
            }
        }
        
        input{
            font-weight:10;
            width:100%;
        }
    }

`;