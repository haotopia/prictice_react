import * as constants from "../../user/store/constant";
import {fromJS} from "immutable";

const defaultState= fromJS ({
    id:0,
    name: 'li',
    stu_id: 201609040111,
    class:'信安1601',
    sex:'男',
    political_profile:'预备党员',
    contact:'15712341234',
    family:'计算机系',
    email:'asdfas@wqwe.com',

});
export default (state = defaultState,action)=>{
    switch(action.type){
        case constants.GET_USER:
            console.log(action.data);
            state.set('id',action.data.data.id);
            state.set('name',action.data.data.name);
            state.set('stu_id',action.data.data.stu_id);
            state.set('class',action.data.data.class);
            state.set('sex',action.data.data.sex);
            state.set('political_profile',action.data.data.political_profile);
            state.set('contact',action.data.data.contact);
            state.set('family',action.data.data.family);
            state.set('email',action.data.data.email);
            return state;
        case constants.CHANGE_USER:
            return state;
        case constants.CHANGE_CLA:
            state.set('family',action.data);
            state.set('class',action.data);
            return state;
        case constants.CHANGE_FAM:
            return state.set('family',action.data);
        case constants.CHANGE_POL:
            return state.set('political_profile',action.data);
        case constants.CHANGE_CON:
            return state.set('contact',action.data);
        case constants.CHANGE_SEX:
            return state.set('sex',action.data);
        case constants.CHANGE_EMAIL:
            return state.set('email',action.data);

        default:

            return state;
    }
}