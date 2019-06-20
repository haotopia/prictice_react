import axios from 'axios';
import cookie from 'react-cookies';
import * as constants from './constant';

const changeUser = (e)=>({
    type:constants.GET_USER,
    data:e,
});

export const changeCla=(e)=>({
    type:constants.CHANGE_CLA,
    data:e,
});
export const changeFam=(e)=>({
    type:constants.CHANGE_FAM,
    data:e,
});
export const changePol=(e)=>({
    type:constants.CHANGE_POL,
    data:e,
});
export const changeSex=(e)=>({
    type:constants.CHANGE_SEX,
    data:e,
});
export const changeCon=(e)=>({
    type:constants.CHANGE_CON,
    data:e,
});
export const changeEmail=(e)=>({
    type:constants.CHANGE_EMAIL,
    data:e,
});


export const getUser = ()=>{
    return (dispatch)=>{
        axios.get('https://shsj.haotopia.xin/api/user',{
            headers:{
                Authorization: cookie.load('Authorization')
            }

        }).then((res)=>{
            if(res) {
                dispatch(changeUser(res.data));
            }else{
                alert('登陆失败')
            }

        });
    }
};

export const postUser = (s_class,family,pol,sex,cont,email,id)=>{
    return (dispatch)=>{
        axios.post('https://shsj.haotopia.xin/api/user',{
            class:s_class,
            family:family,
            political_profile:pol,
            sex:sex,
            cont:cont,
            email:email,
            id:id,
        },{
            headers:{
                Authorization: cookie.load('Authorization')
            }
        }).then((res)=>{
            if(res){
                console.log(res);
            }
        })
    }
};