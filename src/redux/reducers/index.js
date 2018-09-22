import { combineReducers } from 'redux';

import layout from './layout.reducers';
import notes from './notes.reducers';

export default combineReducers({
    layout,
    notes,
})