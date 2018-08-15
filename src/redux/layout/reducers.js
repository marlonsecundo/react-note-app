import { types } from './actions';

export default dataReducer = (state = { isExpanded: true }, action) => {
    switch (action.type) {
        case types.setIsExpanded:
            return { ...state, isExpanded: action.isExpanded };
        default:
            return state;
    }
}