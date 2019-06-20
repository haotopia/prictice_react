import {fromJS} from "immutable";

const defaultState=fromJS({
    PracticeData:[
        {
            key: '1',
            PracticeName: '情暖童心',
            PracticeTime: '2018年7月15至2018年9月1日',
            price: '1.5',
        },
        {
            key: '2',
            firstName: 'Jim',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '4',
            firstName: 'Joe',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '5',
            firstName: 'Joe',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },

    ],

});
export default (state = defaultState,action)=>{
    return state;
}