import { createStore, Store } from 'redux';
import reducer from './reducer';

const initialState = {};

export default function customCreateStore(): Store<{}> {
    const store: Store<{}> = createStore(reducer,
        initialState,
    );

    return store;
}