import { ISinglePost } from './../entities/posts';
import * as actionTypes from '../actions/actiontypes/postsTypes';

export interface IPostsReducer{
    postList: ISinglePost[];
}

const defaultState = (): IPostsReducer => ({
    postList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) =>{
    switch (action.type) {
        case actionTypes.GET_POST: {
             const data: actionTypes.IPostTypes['GET_POST']= action;
             return{
                 ...state,
                 postList: data.postList
             }
        }

        default:{
            return state
        }
            
    }
}