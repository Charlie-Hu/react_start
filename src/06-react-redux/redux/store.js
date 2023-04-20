import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import isshow_reducer from "./reducer/isshow_reducer";
import city_reducer from "./reducer/city_reducer";
import cinemas_reducer from "./reducer/cinemas_reducer";
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'Charlie',
    storage,
    whitelist:[city_reducer]
}
const reducer = combineReducers({
    isshow_reducer,
    city_reducer,
    cinemas_reducer
})
const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)));
export let persistor = persistStore(store)
export default {store, persistor}