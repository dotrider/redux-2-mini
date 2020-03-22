////Middle Man
import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleWare from 'redux-promise-middleware';

//reducers
import hackerNewsReducer from './hackerNewsReducer';
import mediumReducer from './mediumReducer';
import redditReducer from './redditReducer';


//Combine reducers root
const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    mediumReducer: mediumReducer,
    redditReducer

})

export default createStore(rootReducer, applyMiddleware(promiseMiddleWare))