import { createStore } from 'redux';
import reducers from '../reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: '@AttachNote:Data',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['layout'],
}

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(pReducer);
export const persistor = persistStore(store);