import { types } from '../actions/layout';

export default dataReducer = (state = {}, action) => {
    switch (action.type) {

        case types.setHeaderHeight:
            return { ...state, headerHeight: action.headerHeight };
        case types.setFooterHeight:
            return { ...state, footerHeight: action.footerHeight };
        default:
            return state;
    }
}