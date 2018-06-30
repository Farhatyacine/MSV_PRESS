import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import allPressArticlesReducer from './allPressArticlesReducer';

export default combineReducers({
    loginToken:LoginReducer,
    allpressArticles:allPressArticlesReducer

});