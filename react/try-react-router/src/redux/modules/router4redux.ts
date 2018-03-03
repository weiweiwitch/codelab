import { ActionTypes, TypeKeys } from '../../saga/ibaseaction';

export function fetchTestData(param: string): {} {
    return {
        type: TypeKeys.FETCH_TEST_DATA,
        newTestData: param,
    };
}

export class ReduxState {
    testData: string = '';
}

const initialState = new ReduxState();

export interface IFetchTestDataAction {
    type: TypeKeys.FETCH_TEST_DATA;
    newTestData: string;
}

export default function reducer(state: ReduxState = initialState, action: ActionTypes): ReduxState {
    switch (action.type) {
        case TypeKeys.FETCH_TEST_DATA:
            console.info('触发 reducer FETCH_TEST_DATA');
            return {
                ...state,
                testData: action.newTestData,
            };

        default:
            return state;
    }
}