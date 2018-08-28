export const types = {
    newNote: 'NEW_NOTE',
    deleteNote: 'DELETE_NOTE',

}

export function newNote(note) {
    return {
        type: types.newNote,
        note,
    }
}

export function deleteNote(note) {
    return {
        type: types.deleteNote,
        note,
    }
}