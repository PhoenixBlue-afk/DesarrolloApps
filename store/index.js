import { applyMiddleware, combineReducers, createStore } from 'redux'

import ItemsReducer from './items.reducer'
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    products: ItemsReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))

