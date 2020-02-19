////Middle Man
import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleWare from 'redux-promise-middleware';

//reducers
import hackerNewsReducer from './hackerNewsReducer';
import mediumReducer from './mediumReducer';


//Combine reducers root
const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    mediumReducer: mediumReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleWare))