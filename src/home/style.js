import styled from "styled-components";

export const HomeItem = styled.div`
    width:100%;
    position:absolute;
    margin:8% auto;
    `;

export const HomeWrapper =styled.div`
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
            height:400px
        }
    
`;
export const Title = styled.div`
    margin:5% auto;
    `;
export const ButtonItem = styled.div`
    margin:5% 5%;

`;
export const UserButton = styled.div`
    display:inline-block;
    height:100%;    
    width:100px;
    height:100px;
    line-height:100px;
    color:#fff;
    background:#2be65b;
    border-radius:25px;
    margin:10px 10px;
    box-shadow:0 0 8px rgba(0,0,0,.1);

    `;
export const PracticeButton = styled.div`
    display:inline-block;
    height:100%;    
    width:100px;
    height:100px;
    line-height:100px;
    color:#fff;
    background:#18a6f0;
    border-radius:25px;
    margin:10px 10px;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    `;
export const JoinButton = styled.div`
    display:inline-block;
    height:100%;    
    width:100px;
    height:100px;
    line-height:100px;
    color:#fff;
    background:#22e8;
    border-radius:25px;
    margin:10px 10px;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    `;