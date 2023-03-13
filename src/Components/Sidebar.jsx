import React,{useState} from "react";
import styled from "styled-components";
import {AiFillHome} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi';
import {MdFeedback} from 'react-icons/md';
import {MdFavorite} from 'react-icons/md';
import {HiNewspaper} from 'react-icons/hi';
import {BsFillCalendarCheckFill} from'react-icons/bs';
import {BsCalendar3EventFill} from 'react-icons/bs';
import {BsFillPersonFill} from'react-icons/bs';
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import Players from "./Players";


export default function Sidebar () {

  

    return (

      
        <Container>
          <div className="menu">
          <BsThreeDots/>
          <AiOutlineMenuUnfold/>


          </div>
            <div className="top__links">
                <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FCC83F" className="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg>
        BeeMusic
                </div>
                <ul>
                    <li>
                         <AiFillHome/>
                      <span>Home</span>  
                    </li>
                    <li>
                        <BiTrendingUp/>
                      <span>Trends</span>  
                    </li>
                    <li>
                        <MdFeedback/>
                      <span>Feed</span>  
                    </li>
                </ul>
            
            <div>
              discover
            </div>
            <ul>
                    <li>
                         <HiNewspaper/>
                      <span>New and Notable</span>  
                    </li>
                    <li>
                        <BsFillCalendarCheckFill/>
                      <span>Release Calender</span>  
                    </li>
                    <li>
                        <BsCalendar3EventFill/>
                      <span>Events</span>  
                    </li>
                </ul>
                <div>Your Collection</div>
                <ul>
                    <li>
                         <MdFavorite/>
                      <span>Favourits Songs</span>  
                    </li>
                      <li>
                        <BsFillPersonFill/>
                      <span>Artist</span>  
                    </li>
                </ul>
                </div>
            <Players/>
        </Container>
        
    )
}
const Container = styled.div`  
   background-color: white;
   color:black;
   display:flex;
   flex-direction:column;
   height:100%;
   width:100%;
   border-radius:4px;

   .menu{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    padding-top:10px;
   }

   .top__links {
    display:flex;
    flex-direction:column;


   .logo {

    display:flex;
    flex-direction:row;
    text-align: center;
    margin:1rem 0;
    padding-left:1rem;

   }

   ul{
    list-style-type: none;
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:1rem;

   li{
    display:flex;
    gap:1rem;
    cursor:pointer;
    transition:0.3s ease-in-out;
    &:hover{
        color:#b3b3b3;
       }
     }
    } 
 }
 @media (max-width: 600px) {
  /* CSS rules for hiding the sidebar */
  ..top__links {
    display: none;
    width:50%;
  }

  /* CSS rules for adjusting the main content area */
  .main-content {
    width: 100%;
  }
}

`