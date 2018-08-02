const actions = {
    DATA_AVAIBILE : 'DATA_AVAIBILE',

}

import Data from '../instructions.json';

export function getData() {

    return (dispatch) => {

        setTimeout(() => {
            const data = Data.instructions;
            dispatch({ type: actions.DATA_AVAIBILE, data: data });
        }, 2000);
    }

}

export default actions;