import { types } from './actions';

export default dataReducer = (state = { isExpanded: true, newNoteViewVisible: false }, action) => {
    switch (action.type) {
        case types.setIsExpanded:
            return { ...state, isExpanded: action.isExpanded };
        case types.setVisibleNewNoteView:
            return { ...state, newNoteViewVisible: action.visible }
        default:
            return state;
    }
}