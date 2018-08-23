export const types = {
    newNote: 'NEW_NOTE',
    deleteNote: 'DELETE_NOTE',

}

export function newNote(text) {
    return {
        type: types.newNote,
        text,
    }
}

export function deleteNote(note) {
    return {
        type: types.deleteNote,
        note,
    }
}