export const types = {
    setHeaderHeight: 'SET_HEADER_HEIGHT',
    setFooterHeight: 'SET_FOOTER_HEIGHT',

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