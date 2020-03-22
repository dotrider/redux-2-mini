import axios from 'axios';

let initialState = {
        loading: false,
        articles: []
}


const GET_ARTICLES = 'GET_ARTICLES';

export function getArticles (){
    let results = axios.get('/api/reddit').then(res => res.data);
        return{
            type: GET_ARTICLES,
            payload: results
        }

}

export default function reducer (state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_ARTICLES + '_PENDING':
        return {...state, loading: true}
        case GET_ARTICLES + '_FULFILLED':
        return {loading: false, articles: payload}
        case GET_ARTICLES + '_REJECTED':
        return {...state, loading: true}
        default:
        return state
    }
}