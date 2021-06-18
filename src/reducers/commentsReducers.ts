import {ISingleComment} from '../entities/comments';
import * as actionTypes from '../actions/actiontypes/commentsType'

export interface ICommentsReducer{
    commentsList: ISingleComment[];
}

const defaultState = (): ICommentsReducer => ({
    commentsList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) =>{
    switch (action.type) {
        case actionTypes.GET_COMMENTS: {
             const data: actionTypes.ICommentsTypes['GET_COMMENTS']= action;
             return{
                 ...state,
                commentsList: data.commentsList
             }
        }

        default:{
            return state
        }
            
    }
}