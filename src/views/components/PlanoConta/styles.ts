import styled from 'styled-components';

export const Container = styled.div`
    width:50%;
    
    form{
        margin-top:25px;
        
        label{
            margin-bottom:10px;
        }
        
        input{
            font-weight:10;
        }
    }

    ul{
        margin-top:15px;
        list-style:none;
        

        li{
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:25px;
            margin-bottom:10px;
        }
    }
`