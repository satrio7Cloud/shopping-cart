import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({

})

const midleware = [thunk]

const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store;
