import { types } from './actions';

export default dataReducer = (state = { notes: [] }, action) => {
    switch (action.type) {
        case types.newNote:
            return { notes: [...state.notes, action.note] }
        case types.deleteNote:
            let notes = state.notes.filter((note) => {
                return note !== action.note;
            });

            return { notes: [...notes] }
        default:
            return state;
    }
}