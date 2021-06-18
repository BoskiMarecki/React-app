import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actiontypes/photoType';
import { ISinglePhoto } from '../entities/photos';

export const getPhoto = (): Promise<ISinglePhoto[]> => ((dispatch: Dispatch)=>{
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((photoList: ISinglePhoto[]) =>{
            dispatch({
                type: actionTypes.GET_PHOTO,
                photoList
            })
        })
}) as any;