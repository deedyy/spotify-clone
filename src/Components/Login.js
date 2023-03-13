import React from "react";
import styled from "styled-components";




 export default function Login() {

    const handleClick = () =>  {
        const clientId = '0fcdcb1f6619442695e64eb1f1f91119'
        const redirectUri = 'http://localhost:3000/'
        const api_url = 'http://accounts.spotify.com/authorize'
        const scope = [ 
                        'user-library-read',
                        'user-read-private',
                        'user-read-email',
                        'user-modify-playback-state',
                        'user-read-playback-state',
                        'user-read-currently-playing',
                        'user-read-recently-played',
                        'user-top-read',
                    ];
                    
        window.location.href = `${api_url}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(
            " "
            )}&response_type=token&show_dialog=true`;
    
    
        
        
    }
  return (
    
     <Container>
        <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#FCC83F" className="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg>
        BeeMusic</div>
        <button onClick={handleClick }>Connect</button>
      </Container>
    
  );
}

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
height:100vh;
width:100vw;
background-color:#ADD8E6;
font-family:sans-serif;
font-size:2rem;


icon{
    display:flex;
    flex-direction:row;
    
}

button{
    padding:0.5rem 2rem;
    border-radius:5rem;
    background-colour:white;
    color:black;
    font-size:1.4rem;
    cursor:pointer;
}

`

