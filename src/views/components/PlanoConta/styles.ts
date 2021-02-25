import styled from 'styled-components';

export const Container = styled.div`
    width:50%;
   
    form{
        display:flex;
        flex-direction:row;
        margin-top:25px;

        div{
            margin-right:30px;
            width:45%;
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
        
        label{
            margin-bottom:10px;
        }
        
        input{
            font-weight:10;
            width:100%;
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
            p{
                margin-right:20px;
            }
        }
    }
`