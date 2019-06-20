import styled from 'styled-components';

export const ApplyWrapper =styled.div`
    width:33%;
    position:absolute;
    text-align:center;
    margin:5% 33%;
    border-radius:5px 0;
    background:#ddd;
    opacity:0.6;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    @media only screen and (max-width: 991px ) {
            width:80%;
            margin:40% 10%;
            
        }
    
`;

export const Title = styled.div`
    margin:5% auto;
    `;
export const InputItem = styled.div`
    width:66%;
    margin:5px auto;
    @media only screen and (max-width: 991px ) {
            width:94%;
          
        }
`;

export const ApplyItem = styled.div`
    width:100%;
    margin:8% auto;
    `;
export const ButtonItem = styled.div`
    margin:15px auto;

`;
export const SubmitButton = styled.div`
    display:inline-block;
    height:28px;    
    width:100px;   
    color:#fff;
    background:#18a6f0;
    border-radius:25px;
    line-height:26px;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    
    `;
export const ResetButton = styled.div`
    display:inline-block;    
    width:100px; 
    height:28px;   
    color:#fff;
    background:#aaa;
    border-radius:25px;
    line-height:26px;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    
    `;