export const types = {
    update_header_layout: 'UPDATE_HEADER_LAYOUT',

}

export function updateHeaderLayout(headerLayout) {
    return {
        type: types.update_header_layout,
        headerLayout,
    }
}