import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import dataReducer from '../reducers/dataReducer';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(
        combineReducers({
            // rootReducer:rootReducer,
            dataReducer:dataReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    return store
}