import * as constants from './constant';
import {fromJS} from "immutable";

const defaultState= fromJS({
    login:true,
});
export default (state = defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_LOGIN:
            return state.set('login',true);
        default:
            return state;
    }
}