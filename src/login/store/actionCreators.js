import axios from 'axios';
import cookie from 'react-cookies';
import * as constants from './constant';

const changeLogin = ()=>({
    type:constants.CHANGE_LOGIN,
    value:true,
});

export const login = (account , password)=>{
    return (dispatch)=>{
        axios.post('https://shsj.haotopia.xin/api/authorizations',{
            grant_type:'password',
            client_id:1,
            client_secret:'hrQ6s6tqnc7SgPhLeDPPoZojx86t7szBXDqNLrcH',
            password:password,
            username:account
        },{
            headers: {
                'Access-Control-Allow-Origin': "*",
                'access-control-expose-headers': 'Authorization',
            }
        }).then((res)=>{
            if(res) {
                dispatch(changeLogin());
                cookie.save('Authorization', 'Bearer ' + res.data.access_token);
            }else{
                alert('登陆失败')
            }

        });
    }
};