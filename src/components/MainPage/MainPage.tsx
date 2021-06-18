import React,{FC, useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import {Navbar} from '../Navbar/Navbar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {Home} from '../Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Error404 } from '../../Error/Error404';

import {getUsers} from "../../actions/usersActions"
import {getPhoto} from "../../actions/photoAction"
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { ISingleUser } from '../../entities/users';
import { Entities } from '../Entities/Entities';
import { getPost } from '../../actions/postAction';
import { getComments } from '../../actions/commentsAction';
import { WorkspacesSite1 } from '../WorkspacesSite/WorkspacesSite1';
import { Profile } from '../Profile/Profile';
import { WorkspacesSite2 } from '../WorkspacesSite/WorkspacesSite2';
import { WorkspacesSite3 } from '../WorkspacesSite/WorkspacesSite3';
import { WorkspacesSite4 } from '../WorkspacesSite/WorkspacesSite4';
import { WorkspacesSite5 } from '../WorkspacesSite/WorkspacesSite5';
import { WorkspacesSite6 } from '../WorkspacesSite/WorkspacesSite6';
import { WorkspacesSite0 } from '../WorkspacesSite/WorkspacesSite0';


type GetUsers = ReturnType<typeof getUsers>;
type GetPhoto = ReturnType<typeof getPhoto>;
type GetPost = ReturnType<typeof getPost>;
type GetComments = ReturnType<typeof getComments>;


const Wrapper = styled.div`
  width:100%;
  margin:0;
  padding:0;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  display: flex;
  clear:both;
`;

const InnerWrapper = styled.div`
  width:100%;
  margin-left:auto;
  margin-right:auto;
`;


const Content = styled.div`
  width: 1200px;
  margin-top:20px;
  margin-left:auto;
  margin-right:auto;
  clear:both;
`;
export function rand( min: number, max: number ){
      if ( min > max ){
        let tmp = min;
        min = max;
        max = tmp;
    }
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}


const App:FC =()=>{


  const dispatch = useDispatch(); 
  useEffect(()=>{
    dispatch<GetPost>(getPost());
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhoto>(getPhoto());
    dispatch<GetComments>(getComments())
  },[dispatch]);

const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({ 
    ...globalState.users,
  }))

  const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))
  
  function getUserPhoto(user : ISingleUser) {
   for (let i = 0; i < photoList.length; i++) {
     const e = photoList[i];
     if(e.id===user.id){
        return e.url
     }
   }
   return "No photo";
 }

const NewUser= usersList[0];

const User= { 
    id: NewUser? NewUser.id :0,
    name: NewUser? NewUser.name: '',
    jobTitle: NewUser? NewUser.company.catchPhrase: "",
    company: NewUser? NewUser.company.name :"",
    picture: photoList? getUserPhoto(NewUser) :"../..//img/user.jpg",
    email: NewUser? NewUser.email :"",
    phone: NewUser? NewUser.phone :"",
    city: NewUser? NewUser.address.city:"",
}
 
  function usr(){ 
    let usr
    if (User.id>0) {
      usr=User.id
    }
    return usr
  }

  
 return (
     <Router>
       <Navbar user={User}/>
       <Wrapper>
         <LeftMenu user={User}/>
         <InnerWrapper>
           <Content>
             <Switch>
               <Route path="/publications" >
                <Error404/>
               </Route>
               <Route path="/people">
                 <Error404/>
               </Route>
               <Route path="/entities">
                 <Entities/>
               </Route>
               <Route path="/administration">
                 <Error404/>
               </Route>
               <Route path="/ecosystem">
                 <Error404/>
               </Route>
               <Route path="/404">
                 <Error404/>
               </Route>
               <Route path="/workspacesSite0" >
                 <WorkspacesSite0 user={User}/>
               </Route>
               <Route path="/workspacesSite1" >
                 <WorkspacesSite1 user={User}/>
               </Route>
               <Route path="/workspacesSite2" >
                 <WorkspacesSite2 user={User}/>
               </Route>
               <Route path="/workspacesSite3" >
                 <WorkspacesSite3 user={User} />
               </Route>
               <Route path="/workspacesSite4" >
                 <WorkspacesSite4 user={User}/>
               </Route>
               <Route path="/workspacesSite5" >
                 <WorkspacesSite5 user={User}/>
               </Route>
               <Route path="/workspacesSite6" >
                 <WorkspacesSite6 user={User}/>
               </Route>
               <Route path="/profile">
                 <Profile user={User} id={usr()} />
               </Route>
               <Route path="/">
                 <Home user={User}/>
               </Route>
             </Switch>
           </Content>
         </InnerWrapper>
       </Wrapper>
     </Router>
 );
};





export default App;
