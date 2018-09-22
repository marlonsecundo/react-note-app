export const types = {
    newNote: 'NEW_NOTE',
    deleteNote: 'DELETE_NOTE',
    clearNotes: 'CLEAR_NOTES',
    addLastDay: 'ADD_LAST_DAY',
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

export function addLastDay(day) {
    return {
        type: types.addLastDay,
        day,
    }
}