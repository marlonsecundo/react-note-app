import { types } from './actions';

export default dataReducer = (state = { notes: [] }, action) => {
    switch (action.type) {
        case types.newNote:
            return { notes: [...state.notes, action.note] }
        case types.deleteNote:
            return state.notes.filter((note) => {
                return note !== action.note;
            });
        default:
            return state;
    }
}