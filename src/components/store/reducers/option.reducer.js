import { CHANGE_OPTION_ACTION_TYPE } from "../actions/option.action";

const initialState = {
  option: {
    before: localStorage.getItem('before')===null? '' : JSON.parse(localStorage.getItem('before')),
    now: localStorage.getItem('now')===null ? 0 : JSON.parse(localStorage.getItem('now')),
  }
}

const optionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_OPTION_ACTION_TYPE: {
      return {...state, option: {before: `${state.option.before.concat(-state.option.now)}`, now: action.index}}
    }
    default: return initialState
  }
}

export default optionReducer