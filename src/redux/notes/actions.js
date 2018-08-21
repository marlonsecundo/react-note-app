export const types = {
    newNote: 'NEW_NOTE',
    deleteNote: 'DELETE_NOTE',

}

export function newNote(text) {
    return {
        type: types.newNote,
        note: { text }
    }
}

export function deleteNote(id) {
    return {
        type: types.deleteNote,
        id,
    }
}