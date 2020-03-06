import {combineReducers} from 'redux';
import CommPage from '../Redux/CommPage'
import RequestPage from '../Redux/RequestPage'
const rootReducer=combineReducers(
    {
        CommPage,
        RequestPage
    }
)
export default rootReducer;