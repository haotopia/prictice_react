import React from 'react';
import ReactCanvasNest from "react-canvas-nest";
import { InputItem, ApplyItem, ApplyWrapper, Title, ButtonItem,SubmitButton,ResetButton} from "./style";
import {Input} from "antd";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';



class Apply extends React.Component{



    render(){
        const {loginStatus}=this.props;
        if(loginStatus){
        return (
            <div>
                <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 255, 255, 255 ',lineColor:'255,255,255' }} style = {{ zIndex: 0 }} />
                <ApplyWrapper>
                    <Title><h1>社会实践申报</h1></Title>
                    <ApplyItem>
                        <InputItem>
                            <Input addonBefore="社会实践名称" allowClear value={this.props.ApplyData.theme}  />
                        </InputItem>

                        <InputItem>
                            <Input addonBefore="等级" allowClear value={this.props.ApplyData.price} />
                        </InputItem>

                        <InputItem>
                            <Input addonBefore="实践起止时间" allowClear value={this.props.ApplyData.during_data} />
                        </InputItem>

                        <InputItem>
                            <Input addonBefore="实践单位名称"  allowClear value={this.props.ApplyData.unit_place}/>
                        </InputItem>

                        <InputItem>
                            <Input addonBefore="实践单位联系人" allowClear value={this.props.ApplyData.unit_name} />
                        </InputItem>

                        <InputItem>
                        <Input addonBefore="实践单位联系人联系方式" allowClear value={this.props.ApplyData.unit_contact} />
                        </InputItem>

                        <ButtonItem>
                            <SubmitButton>提交</SubmitButton>
                            <ResetButton>重置</ResetButton>

                        </ButtonItem>

                    </ApplyItem>
                </ApplyWrapper>
            </div>
        );}else{
            return <Redirect to='/login'/>
        }
    }

}
const mapStateToProps =(state)=>{
    return {
        ApplyData:state.getIn(['apply','ApplyData']),
        loginStatus:state.getIn(['login','login']),
    }
};

const mapDispatchToProps =(dispatch)=>{
    return {}
};



export default connect(mapStateToProps,mapDispatchToProps)(Apply);
