import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actiontypes/postsTypes';
import { ISinglePost } from '../entities/posts';

export const getPost = (): Promise<ISinglePost[]> => ((dispatch: Dispatch)=>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((postList: ISinglePost[]) =>{
            dispatch({
                type: actionTypes.GET_POST,
                postList
            })
        })
}) as any;