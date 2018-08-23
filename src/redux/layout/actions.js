export const types = {
    setIsExpanded: 'SET_EXPANDED',
    setVisibleNewNoteView: 'SET_VISIBILITY_NEW_NOTE_VIEW', 
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