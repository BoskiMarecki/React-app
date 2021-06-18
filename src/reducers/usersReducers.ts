import {ISingleUser} from '../entities/users';
import * as actionTypes from '../actions/actiontypes/userTypes';

export interface IUsersReducer{
    usersList: ISingleUser[];
}

const defaultState = (): IUsersReducer => ({
    usersList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) =>{
    switch (action.type) {
        case actionTypes.GET_USERS: {
             const data: actionTypes.IUserTypes['GET_USERS']= action;
             return{
                 ...state,
                 usersList: data.usersList
             }
        }

        default:{
            return state
        }
            
    }
}