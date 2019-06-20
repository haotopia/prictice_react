import {combineReducers} from "redux-immutable";
import applyReducer from '../apply/store/reducer';
import userReducer from '../user/store/reducer';
import practiceReducer from '../practice/store/reducer';
import loginReducer from '../login/store/reducer';

export default combineReducers({
    apply:applyReducer,
    user:userReducer,
    practice:practiceReducer,
    login:loginReducer,
})