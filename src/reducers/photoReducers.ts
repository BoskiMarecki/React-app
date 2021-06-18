import {ISinglePhoto} from '../entities/photos';
import * as actionTypes from '../actions/actiontypes/photoType';

export interface IPhotoReducer{
    photoList: ISinglePhoto[];
}

const defaultState = (): IPhotoReducer => ({
    photoList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) =>{
    switch (action.type) {
        case actionTypes.GET_PHOTO: {
             const data: actionTypes.IPhotoTypes['GET_PHOTO']= action;
             return{
                 ...state,
                 photoList: data.photoList
             }
        }

        default:{
            return state
        }
            
    }
}