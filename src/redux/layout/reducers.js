import { types } from './actions';

const defaultState = { isExpanded: true, newNoteViewVisible: false, alert: { text: "", visible: false } };

export default dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.setIsExpanded:
            return { ...state, isExpanded: action.isExpanded };
        case types.setVisibleNewNoteView:
            return { ...state, newNoteViewVisible: action.visible };
        case types.showAlert:
            return { ...state, alert: action.alert };
        case types.collapseAlert:
            return { ...state, alert: action.alert };
        default:
            return state;
    }
}