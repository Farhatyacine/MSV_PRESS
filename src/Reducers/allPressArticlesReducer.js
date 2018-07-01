import { FETCH_ARTICLES } from '../actions/types';

export default function(state=[], action){
    switch (action.type){
        case FETCH_ARTICLES :
            console.log('hani wselt lel reducer');
            console.log(action.payload);
            return action.payload;
        default : 
            return state ;
    }
}