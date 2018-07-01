import { SET_USER_TOKEN, FETCH_ARTICLES} from './types';
import axios from "axios";

  export function fetchAllArticles(articles){
    return({
      type : FETCH_ARTICLES,
      payload : articles
    })
  }


  export function setUserlogin(token){
    return({
      type : SET_USER_TOKEN,
      payload : token
    })
  }
