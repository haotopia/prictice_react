import React from 'react';
import {Redirect} from 'react-router-dom';
import {
    LoginWrapper, Title,LoginItem,Button,InputItem
} from './style'
import {Input,Tooltip, Icon} from "antd";
import ReactCanvasNest from "react-canvas-nest";
import {connect} from "react-redux";
import * as actionCreators from './store/actionCreators';

class Login extends React.Component{

    render(){

        const {loginStatus}=this.props;
        if(!loginStatus){
        return (
            <div>
            <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 255, 255, 255 ',lineColor:'255,255,255' }} style = {{ zIndex: 0 }} />
            <LoginWrapper>
                <LoginItem>
                <Title><h1>社会实践查询系统</h1></Title>
                    <InputItem>
                        <Input
                            placeholder="请输入学号或邮箱"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={
                                <Tooltip title="第一次登陆请使用学号登陆">
                                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                            ref={(input)=>{this.account=input}}
                        />
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            suffix={
                                <Tooltip title="首次登陆后请及时更改您的初始密码">
                                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                            ref={(input)=>{this.password = input}}
                        />
                    </InputItem>
                <Button onClick={()=>this.props.login(this.account,this.password)}>登陆</Button>
                    <p>忘记密码？</p>
                </LoginItem>
            </LoginWrapper>
            </div>
        );
        }else{
            return <Redirect to='/'/>
        }
    }

}
const mapState =(state)=>({
   loginStatus:state.getIn(['login','login']),
});
const mapDispatch = (dispatch)=>({
    login(accountElement,passwordElement){
        dispatch(actionCreators.login(accountElement.state.value,passwordElement.state.value))

    }
});

export default connect(mapState,mapDispatch)(Login);
