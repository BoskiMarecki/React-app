import { IActualSite } from '../../entities/actualSite'

export const PUSH_ACTUALSITE = 'PUSH_ACTUALSITE';

export interface IActualSiteTypes{
    PUSH_ACTUALSITE:{
        actualSite: IActualSite;
    }
}