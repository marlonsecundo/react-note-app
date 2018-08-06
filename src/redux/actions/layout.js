export const types = {
    setHeaderHeight: 'SET_HEADER_HEIGHT',
    setFooterHeight: 'SET_FOOTER_HEIGHT',
    setIsExpanded: 'SET_EXPANDED',
}

export function setHeaderHeight(headerHeight) {
    return {
        type: types.setHeaderHeight,
        headerHeight,
    }
}

export function setFooterHeight(footerHeight) {
    return {
        type: types.setFooterHeight,
        footerHeight,
    }
}

export function setIsExpanded(isExpanded) {
    return {
        type: types.setIsExpanded,
        isExpanded,
    }
}