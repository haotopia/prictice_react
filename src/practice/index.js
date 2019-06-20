import React from 'react';
import ReactCanvasNest from "react-canvas-nest";
import { InputItem, PracticeItem, PracticeWrapper, Title} from "./style";
import {connect} from 'react-redux';
import { Table} from "antd";
import {Redirect} from 'react-router-dom';
const { Column } = Table;


class Practice extends React.Component{


    render(){
        const {loginStatus}=this.props;
        if(loginStatus){
        return (
            <div>
                <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 255, 255, 255 ',lineColor:'255,255,255' }} style = {{ zIndex: 0 }} />
                <PracticeWrapper>
                    <PracticeItem>
                        <Title><h1>社会实践查询系统</h1></Title>
                        <InputItem>
                            <Table dataSource={this.props.PracticeData}>
                                <Column title="实践名称" dataIndex="PracticeName" key="PracticeName" />
                                <Column title="实践时间" dataIndex="PracticeTime" key="PracticeTime" />
                                <Column title="分值" dataIndex="price" key="price" />

                            </Table>,
                        </InputItem>
                    </PracticeItem>
                </PracticeWrapper>
            </div>
        );}else{
            return <Redirect to='/login'/>
        }
    }

}


const mapStateToProps =(state)=>{
    return {
        PracticeData:state.getIn(['practice','PracticeData']),
        loginStatus:state.getIn(['login','login']),
    }
};

const mapDispatchToProps =(dispatch)=>{
    return {}
};


export default connect(mapStateToProps,mapDispatchToProps)(Practice);