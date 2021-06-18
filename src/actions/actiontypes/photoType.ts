import { ISinglePhoto } from '../../entities/photos'

export const GET_PHOTO = 'GET_PHOTO';

export interface IPhotoTypes{
    GET_PHOTO:{
        photoList:ISinglePhoto[];
    }
}