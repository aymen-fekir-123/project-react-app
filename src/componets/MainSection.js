import React from 'react'
import  { Button }  from './Button'
import './button.css'
import './MainSection.css'
function MainSection() {
  return (
    <div className='section'>
        <video src='/videos/video-2.mp4' autoPlay loop muted/>
        <h1>ADVENTUR AWAITS</h1>
        <p>What You Are Waiting For </p>
        <div className='wraper-button'>
          <Button 
          stylbutton={ "btn-outline" }
          sizebutton={"btn-large"}
          content="Watch Trailer"
          >

          </Button>
        
          <Button 
          sizebutton={"btn-large"}
          content="Sign Up"
          >
          
          </Button>
             

        </div>
    
    </div>


  )
}

export default MainSection