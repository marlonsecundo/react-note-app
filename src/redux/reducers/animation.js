import { types } from '../actions/animation';

export default dataReducer = (state = {}, action) => {
    switch (action.type) {

        case types.update_header_layout:
            return state = { ...state, headerLayout: action.headerLayout };

        default:
            return state;
    }
}