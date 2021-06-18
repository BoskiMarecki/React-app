import React,{FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { pushActualSite } from '../../actions/actualSiteAction';
import { ISingleUser } from '../../entities/users';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { IPostsReducer } from '../../reducers/postsReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { Colors } from '../../styledHelpers/Colors';
import { rand } from '../MainPage/MainPage';
import { Resume } from '../Resume/Resume';
import {Workspaces} from '../Workspaces/Workspaces';

type PushActualSite = ReturnType<typeof pushActualSite>;

const Wrapper=styled.div`
    width:100%;
`;
const InnerWrapper=styled.div`
 width:100%;
    height: 400px;
    display:flex;
    box-shadow: 0 0 1em grey;
    border-radius:5px;
    overflow: hidden;
    color:${Colors.darkBlue};
`;

const DivImg=styled.div`
    height:100%;
    width:400px;
`;
const ImgPost= styled.div`
    position:absolute;
    width:380px;
    margin-top:250px;
    color:white;
    text-align:left;
    padding:10px;
`;
const ImgLatestPublication = styled.img`
    width:100%;
`;

const LatestPublicationDiv=styled.div`
    padding-left: 10px;
    text-align:left;
`;
 const Title= styled.h2`
    text-align:left;
 `;

 const SeeMore = styled.p`
    color:${Colors.blue};
    margin-top: 20px;
    font-weight: bold;
 `;

const Publications= styled.div`
    text-align:left;
`;

 const SinglePublication = styled.div`
    display:flex;
    margin:5px;
 `;

 const SinglePublicationContent=styled.div`
    padding-left:10px;
    color:${Colors.darkBlue};
 `;

 const SingleImg=styled.img`
    width:80px;
 `;

 const Date= styled.span`
    margin-top: auto;
    margin-bottom:auto;
    color:#adafba;
 `;

 const Profile = styled.div`
    display: flex;
    align-items:center;
 `;
 const ProfilePic=styled.img`
    width: 25px;
    border-radius: 50%;
    margin-top: auto;
    margin-bottom:auto;
    margin-left:5px;
    margin-right:5px;
`;

  const ProfileName = styled.span`
    margin-top: auto;
    margin-bottom:auto;
    color:#5a6175;
  `;
  const SingleTitle= styled.h3`
  `;


interface IHome{
    user:{
        id: number,
        name: string,
        picture: string
    }

}


export const Home: FC<IHome> = props=>{

const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))

 const { postList }= useSelector<IState, IPostsReducer>(globalState => ({
    ...globalState.posts
  }))
const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users,
  }))


  const photo = {
      src: photoList[59]?.url
  };

const dispatch = useDispatch();
 useEffect(()=>{
    dispatch<PushActualSite>(pushActualSite({ 
      name: 'Home',
      icon: '../Media/icons/house.png'
  }))
  },[dispatch]);

   function getUserPost(user: ISingleUser) {
       if(user !== undefined){
           for (let i = 0; i < postList.length; i++) {
           const el = postList[i];
           if(el.id===user.id){
               return el.title;
           }
       }
       }
       
       return "";
   }
   
 function getUserPhoto(user : ISingleUser) {
   for (let i = 0; i < photoList.length; i++) {
     const e = photoList[i];
     if(e.id===user.id){
        return e.url
     }
   }
   return "No photo";
 }



  const NewUser1 = usersList[rand(0,9)];
  const NewUser2 = usersList[rand(0,9)];
  const NewUser3 = usersList[rand(0,9)];
  const NewUser4 = usersList[rand(0,9)];
    return(
        
    <Wrapper> 
        <InnerWrapper>
        <DivImg>
            <ImgPost>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam molestiae veniam dignissimos accusamus fuga eveniet dolorem! Dolor voluptas hic natus!
            </p>
            <Profile>
                <Date> 7 jan.2020 </Date>
                <ProfilePic src={getUserPhoto(NewUser1)} />
                <ProfileName> {NewUser4? NewUser4.name :""}</ProfileName>
            </Profile>
            </ImgPost>
            <ImgLatestPublication src={photo.src}/>
            
        </DivImg>
        <LatestPublicationDiv>
            <Title>Latest Publication</Title>
            <Publications>
                <SinglePublication>
                    <SingleImg src={photoList[1]? photoList[rand(1,100)].url: " "}/>
                    <SinglePublicationContent>
                        <SingleTitle>{postList? getUserPost(NewUser1):" "}</SingleTitle>
                    <Profile>
                        <Date> 7 dec.1999 </Date>
                        <ProfilePic src={getUserPhoto(NewUser1)} />
                        <ProfileName> {NewUser1? NewUser1.name :""}</ProfileName>
                    </Profile>
                    </SinglePublicationContent>
                    
                </SinglePublication>
                <SinglePublication>
                    <SingleImg src={photoList[1]? photoList[rand(1,100)].url: " "}/>
                    <SinglePublicationContent>
                        <SingleTitle>{postList? getUserPost(NewUser2):" "}</SingleTitle>
                    <Profile>
                        <Date> 06 jun.2020 </Date>
                        <ProfilePic src={getUserPhoto(NewUser2)} />
                        <ProfileName> {NewUser2? NewUser2.name:""}</ProfileName>
                    </Profile>
                    </SinglePublicationContent>
                    
                </SinglePublication>
                <SinglePublication>
                    <SingleImg src={photoList[1]? photoList[rand(1,100)].url: " "}/>
                    <SinglePublicationContent>
                        <SingleTitle>{postList? getUserPost(NewUser3):" "}</SingleTitle>
                    <Profile>
                        <Date> 25 apr.2020 </Date>
                        <ProfilePic src={getUserPhoto(NewUser3)} />
                        <ProfileName> {NewUser3? NewUser3.name :""}</ProfileName>
                    </Profile>
                    </SinglePublicationContent>
                    
                </SinglePublication>

            </Publications>


            <SeeMore>See more publications</SeeMore>
        </LatestPublicationDiv>
        
          </InnerWrapper>
        <Workspaces/>
        <Resume user={props.user}/>

    </Wrapper>

)
}