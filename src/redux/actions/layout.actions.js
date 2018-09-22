export const types = {
    setIsExpanded: 'SET_EXPANDED',
    setVisibleNewNoteView: 'SET_VISIBILITY_NEW_NOTE_VIEW',
    showAlert: 'SHOW_ALERT',
    collapseAlert: 'COLLAPSE_ALERT',
}

export function setIsExpanded(isExpanded) {
    return {
        type: types.setIsExpanded,
        isExpanded,
    }
}

export function setVisibleNewNoteView(visible) {
    return {
        type: types.setVisibleNewNoteView,
        visible,
    }
}

export function showAlert(text) {
    return {
        type: types.showAlert,
        alert: { text, visible: true }
    }
}

export function collapseAlert() {
    return {
        type: types.collapseAlert,
        alert: { text: "", visible: false }
    }
}