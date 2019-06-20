import styled from 'styled-components';

export const LoginWrapper =styled.div`
    height:400px;
    width:33%;
    position:relative;
    text-align:center;
    margin:8% auto;
    border-radius:5px 0;
    background:#ddd;
    opacity:0.6;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    @media only screen and (max-width: 991px ) {
            width:80%;
            margin:40% auto;
            height:300px
        }
    
`;
export const Input =styled.input`
    display:block;
    width:200px;
    height:30px;
    line-height:30px
    padding:0 20px;
    color:#777;
    margin:10px auto;
    
    `;

export const Title = styled.div`
    margin:5% auto;
    `;
export const InputItem = styled.div`
    width:66%
    margin:5% auto;
`;
export const Button = styled.div`
    width:220px;
    height:30px;
    line-height:30px;
    color:#fff;
    background:#3194d0;
    border-radius:15px;
    margin:10px auto;
    text-align:center;
    `;
export const LoginItem = styled.div`
    width:100%;
    position:absolute;
    margin:8% auto;
    `;