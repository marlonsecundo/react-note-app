import { combineReducers } from 'redux';

import actions from '../actions';

let dataState = { data: [], loading: true };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case actions.DATA_AVAIBILE:
            state = Object.assign({}, state, { data: action.data, loading: false })
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dataReducer,    
});

export default rootReducer;