import React from 'react';
import ReactCanvasNest from "react-canvas-nest";
import { InputItem, ApplyItem, ApplyWrapper, Title, ButtonItem,SubmitButton,ResetButton} from "./style";
import {Input} from "antd";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';


import * as actionCreators from "../user/store/actionCreators";



class User extends React.Component{

    constructor(props){
        super(props);
       /* this.famChange = this.famChange.bind(this);
        this.polChange = this.polChange.bind(this);
        this.sexChange = this.sexChange.bind(this);
        this.contactChange = this.contactChange.bind(this);
        this.emailChange = this.emailChange(this);*/



    }

    render(){
        const {loginStatus}=this.props;
        if(loginStatus){
        return (
            <div>
                <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 255, 255, 255 ',lineColor:'255,255,255' }} style = {{ zIndex: 0 }} />
                <ApplyWrapper>
                    <Title><h1>修改用户信息</h1></Title>
                    <ApplyItem>
                        <InputItem>
                            <Input addonBefore="姓名"  disabled value={this.props.name} />
                        </InputItem>

                        <InputItem>
                            <Input addonBefore="学号" allowClear value={this.props.stu_id} disabled/>
                        </InputItem>

                        <InputItem>
                            <Input addonBefore="班级" allowClear value={this.props.class} onChange={this.props.claChange} ref={(input)=>{this.cla=input}}/>
                        </InputItem>

                        <InputItem>
                            <Input addonBefore="院系"  allowClear value={this.props.family} onChange={this.props.famChange} ref={(input)=>{this.fam=input}}/>
                        </InputItem>

                        <InputItem>
                            <Input addonBefore="政治面貌" allowClear value={this.props.political_profile} onChange={this.props.polChange} ref={(input)=>{this.pol=input}}/>
                        </InputItem>

                        <InputItem>
                            <Input addonBefore="性别" allowClear value={this.props.sex } onChange={this.props.sexChange} ref={(input)=>{this.sex=input}}/>
                        </InputItem>

                        <InputItem>
                            <Input addonBefore="联系方式"  allowClear value={this.props.contact} onChange={this.props.contactChange} ref={(input)=>{this.cont=input}}/>
                        </InputItem>

                        <InputItem>
                            <Input addonBefore="邮箱" allowClear value={this.props.email} onChange={this.props.emailChange} ref={(input)=>{this.email=input}}/>
                        </InputItem>

                        <ButtonItem>
                            <SubmitButton onClick={()=>this.props.changeUser(this.cla,this.fam,this.pol,this.sex,this.cont,this.email,this.props.UserData.id)}>提交</SubmitButton>
                            <ResetButton>重置</ResetButton>

                        </ButtonItem>

                    </ApplyItem>
                </ApplyWrapper>
            </div>
        );}else{
            return <Redirect to='/login'/>
        }


    }

    componentDidMount(){
        this.props.getUser();

    }



/*    famChange(){
        this.setState(
            this.props.UserData.family=this.fam.state.value
        );
    }
    polChange(){
        this.setState(
            this.props.UserData.political_profile=this.pol.state.value
        );
    }
    sexChange(){
        this.setState(
            this.props.UserData.sex=this.sex.state.value
        );
    }
    contactChange(){
        this.setState(
            this.props.UserData.contact=this.cont.state.value
        );
    }
    emailChange(){
        this.setState(
            this.props.UserData.email=this.email.state.value
        );
    }*/

}





const mapStateToProps =(state)=>{
    return {
        class:state.getIn(['user','class']),
        family:state.getIn(['user','family']),
        id:state.getIn(['user','id']),
        name: state.getIn(['user','name']),
        stu_id: state.getIn(['user','stu_id']),
        sex:state.getIn(['user','sex']),
        political_profile:state.getIn(['user','political_profile']),
        contact:state.getIn(['user','contact']),
        email:state.getIn(['user','email']),
        loginStatus:state.getIn(['login','login']),
    }
};


const mapDispatch = (dispatch)=>({
    getUser(){
        dispatch(actionCreators.getUser())
    },
    changeUser(claElement,famElement,polElement,sexElement,contElement,emailElement,id){
        dispatch(actionCreators.postUser(
            claElement.state.value,
            famElement.state.value,
            polElement.state.value,
            sexElement.state.value,
            contElement.state.value,
            emailElement.state.value,
            id
            ))

    },

    claChange(e){
        dispatch(actionCreators.changeCla(e.target.value));
    },
    famChange(e){
        dispatch(actionCreators.changeFam(e.target.value));
    },
    polChange(e){
        dispatch(actionCreators.changePol(e.target.value));
    },
    sexChange(e){
        dispatch(actionCreators.changeSex(e.target.value));
    },
    contactChange(e){
        dispatch(actionCreators.changeCon(e.target.value));
    },
    emailChange(e){
        dispatch(actionCreators.changeEmail(e.target.value));
    },


});


export default connect(mapStateToProps,mapDispatch)(User);
