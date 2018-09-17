import { types } from './actions';

const defaultState = { notes: [], lastDay: null }

export default dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.newNote:
            return { ...state, notes: [...state.notes, action.note] }
        case types.deleteNote:
            let notes = state.notes.filter((note) => {
                return note !== action.note;
            });
            return { ...state, notes: [...notes] }
        case types.clearNotes:
            return { ...state, notes: [] }
        case types.addLastDay:
            return { ...state, lastDay: action.day }
        default:
            return state;
    }
}