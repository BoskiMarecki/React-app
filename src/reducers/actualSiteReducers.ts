import {IActualSite} from '../entities/actualSite';
import * as actionTypes from '../actions/actiontypes/actualSiteType';

export interface IActualSiteReducer{
    site: IActualSite
}

const site: IActualSite ={
  name: 'Home',
  icon: '../Media/icons/house.png',
}

const defaultState = (): IActualSiteReducer => ({
    site: site
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) =>{
    switch (action.type) {
        case actionTypes.PUSH_ACTUALSITE: {
             const data: actionTypes.IActualSiteTypes['PUSH_ACTUALSITE']= action;
             return{
                 ...state,
                 site: data.actualSite
             }
        }

        default:{
            return state
        }
            
    }
}