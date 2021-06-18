import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actiontypes/actualSiteType';
import { IActualSite } from '../entities/actualSite';

export const pushActualSite = (actualSite: IActualSite): Promise<IActualSite> => ((dispatch: Dispatch)=>{
    dispatch({ 
        type: actionTypes.PUSH_ACTUALSITE,
        actualSite
    })
}) as any;