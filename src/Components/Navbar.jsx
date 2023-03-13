import React from "react";
import styled from "styled-components";
import{FaSearch} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import {FcPrevious} from 'react-icons/fc';
import {FcNext} from 'react-icons/fc'
import { useStateProvider } from "../Stateprovider";

export default function Navbar() {
    const [{userInfo}]= useStateProvider();
    return(
        <Container>
          <div className="left">
            <FcPrevious/>
            <FcNext/>
            
          </div>
          <div className="search__bar">
            <FaSearch /> 
              <input type='text' placeholder="Artists,songs or podcasts"/>

            </div> 
              <div className="avatar">
                <a href="#">
                <CgProfile/>
                <span>{userInfo?.name}</span>
                </a>
              </div>
        </Container>
    )
}

 const Container=styled.div`
 display:flex;
 justify-content:space-between;
 align-items: center;
 padding; 2rem;
 height : 15vh;
 position:sticky;
 top:0;
 transition: 0.3s ease-in-out;
 background-color:ffff;
 

.search__bar{
   background-color:white;
   width:30%;
   padding:0.4rem 1rem;
   border-radius:2rem;
    display; flex;
   align-items: center;
   gap: 0.5rem;
  
  input{
    border:none;
    height:2rem;
    padding-left:20px;
    &:focus{
        outline:none;
    }
   }
    
}
.left{
  
  width:50%;
  padding:0.4rem 1rem;
  border-radius:0rem;
   display; flex;
  align-items: center;
  gap: 0.5rem;
  padding-left:100px;
 
 input{
   border:none;
   height:1rem;
   padding-left:30px;
   &:focus{
       outline:none;
   }
  }
   
}

   


  avatar{
    background color:black;
    padding:0.3rem 0.4rem;
    padding-right:1rem;
    border-radius:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    
a {
    display:flex;
    justify-content:center;
    align-items:center;
    gap:0.5rem;
    text-decoration:none;
    color:white;
    font-weight:bold;
    
 svg{
    font-size:1.3rem;
    background-color:black;
    padding:0.2rem;
    border-radius:1rem;
    color:#c7c5c5;
   } 
  }
 } 
 
 `