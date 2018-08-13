export const types = {
    setIsExpanded: 'SET_EXPANDED',
}

export function setIsExpanded(isExpanded) {
    return {
        type: types.setIsExpanded,
        isExpanded,
    }
}