import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import optionReducer from './reducers/option.reducer'
const reducers = {
	option: optionReducer
}
const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer, composeWithDevTools())

export default store
