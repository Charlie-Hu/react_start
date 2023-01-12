import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import isshow_reducer from "./reducer/isshow_reducer";
import city_reducer from "./reducer/city_reducer";
import cinemas_reducer from "./reducer/cinemas_reducer";
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'


const reducer = combineReducers({
    isshow_reducer,
    city_reducer,
    cinemas_reducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)));
export default store