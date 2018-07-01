import { SET_USER_TOKEN, FETCH_ARTICLES} from './types';

export function fetchAllArticles(articles){
    return({
        type : FETCH_ARTICLES,
        payload : articles
    })
}


export const setUserlogin = (token) => async dispatch => {
    dispatch({
        type : SET_USER_TOKEN,
        payload : token
    });
};