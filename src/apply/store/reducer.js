import {fromJS} from "immutable";


const defaultState=fromJS({
ApplyData:{
        theme:'志愿服务实践活动',
        unit_name:'miao',
        unit_place:'wang',
        unit_contact:'15212341234',
        during_data:'从古到今',
        price:3.5,
}
});
export default (state = defaultState,action)=>{
    return state;
}