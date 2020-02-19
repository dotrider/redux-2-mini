//
import axios from 'axios';

let initalState = {
    loading: false,
    articles: []
};

//action type
const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

//action builder
export function requestArticles(){
    let articles = axios.get('/api/hacker-news').then( res => res.data);
    //this will return an action
    return {
        type: REQUEST_ARTICLES,
        //payload in this case is my axios call => articles
        payload: articles
    }
}


//reducer
export default function reducer(state = initalState, action){
    switch (action.type){
        case REQUEST_ARTICLES + '_PENDING':
            return {...state, loading: true}
        case REQUEST_ARTICLES + '_FULFILLED':
            return {loading: false, articles: action.payload}
        case REQUEST_ARTICLES + '_REJECTED':
            return {...state, loading: false}        
        default:
            return state;
    }   
}