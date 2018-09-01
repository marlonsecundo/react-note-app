export const types = {
    newNote: 'NEW_NOTE',
    deleteNote: 'DELETE_NOTE',
    clearNotes: 'CLEAR_NOTES'
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

export function clearNotes() {
    return {
        type: types.clearNotes,
    }
}