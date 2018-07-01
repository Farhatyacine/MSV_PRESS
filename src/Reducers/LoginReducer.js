import {  SET_USER_TOKEN } from '../actions/types';

export default function(state="wkufh", action){
    switch (action.type){
        case SET_USER_TOKEN :    
            return state;
            
        default : 
            return state ;
    }
}