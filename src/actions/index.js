import { LOGIN_STATUS, FETCH_ARTICLES} from './types';
import axios from "axios";



  

  export const testLogin = async dispatch => {
      const query=`mutation{
        createUserToken(email:"haithem+test@monsupervoisin.fr",password:"password"){
           user{
             Address {
               id
             }
             lastName
             firstName 
           }
           authToken
           error {
             code
             message
           }
         }
        }`;
     const variables = {};

      
    const response={};
    try {
      const response = await axios.get('https://dev.api.monsupervoisin.fr/graphql', {
        query,
        variables
      });
  
      console.log(response.data)


    } catch (error) {
      console.log(error);
    }


      dispatch({ type: LOGIN_STATUS, payload: response.data });

  }


  export function fetchAllArticles(articles){
    return({
      type : FETCH_ARTICLES,
      payload : articles
    })
  }
