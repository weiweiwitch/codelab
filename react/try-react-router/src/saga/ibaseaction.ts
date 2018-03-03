import { IFetchTestDataAction } from '../redux/modules/router4redux';

export enum TypeKeys {
    FETCH_TEST_DATA = 'FETCH_TEST_DATA',
}

export interface IBaseAction {
    type: TypeKeys;
}

export type ActionTypes =
    | IFetchTestDataAction;