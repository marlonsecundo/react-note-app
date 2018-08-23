import { types } from './actions';

export default dataReducer = (state = { notes: [] }, action) => {
    switch (action.type) {
        case types.newNote:
            return { notes: [...state.notes, { text: action.text, id: Math.random().toString(36).substr(2, 9) }] }
        case types.deleteNote:
            let notes = state.notes.filter((note) => {
                return note !== action.note;
            });

            return { notes: [...notes] }
        default:
            return state;
    }
}