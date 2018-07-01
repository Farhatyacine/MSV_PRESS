import { LOGIN_STATUS } from '../actions/types';

export default function(state=null , action){
    switch (action.type){
        case LOGIN_STATUS :
            console.log('hani wselt lel reducer');
            console.log(action.payload);
            return action.payload;
        default : 
            return state ;
    }
}