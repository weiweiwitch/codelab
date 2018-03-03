import { ReduxState } from './modules/router4redux';
import { combineReducers } from 'redux';
import router4redux from '../redux/modules/router4redux';

export interface ICombineState {
    router4redux: ReduxState;
}

export default combineReducers({
    router4redux,
});