import React from 'react';
import {Link}from 'react-router-dom';
import {
    HomeItem,HomeWrapper,Title,UserButton,ButtonItem,PracticeButton,JoinButton
} from './style'
import ReactCanvasNest from "react-canvas-nest";

class Home extends React.Component{

    render(){

        return (
            <div>
                <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 255, 255, 255 ',lineColor:'255,255,255' }} style = {{ zIndex: 0 }} />
                <HomeWrapper>
                    <HomeItem>
                        <Title><h1>社会实践查询系统</h1></Title>
                        <ButtonItem>
                            <Link to='/user'>
                            <UserButton> 用户信息</UserButton>
                            </Link>
                            <Link to='/practice'>
                            <PracticeButton>实践信息</PracticeButton>
                            </Link>
                            <Link to='/apply'>
                                <JoinButton>实践申请</JoinButton>
                            </Link>

                        </ButtonItem>
                    </HomeItem>
                </HomeWrapper>
            </div>
        );

    }

}

export default Home;