import React from 'react'
import Carditem from './Carditem'
import './Cards.css'
function CardContainor() {
  return (
    <div className='containor'>

      
      <h1>
        Check out The Epic Desctination
      </h1>
      
      
      <div className='cards-wraper'>
          <div className='flex-card'>
            <Carditem 
            namefigure="luxxi"
            image="/images/img-9.jpg"
            title="Fake belive mutch better than no belive."
            />

            <Carditem 
            namefigure="jinxe"
            image="/images/img-4.jpg"
            title="the most important thing in your live is the most thing who you don't care about it."
            />

          </div>

          <div className='flex-card'>
            <Carditem 
            namefigure="linda"
            image="/images/img-2.jpg"
            title="The greatest glory in living lies not in never falling, but in rising every time we fall."
            />

            <Carditem 
            namefigure="linda"
            image="/images/img-8.jpg"
            title="The greatest glory in living lies not in never falling, but in rising every time we fall."
            />

          </div>
      </div>
    </div>
  )
}

export default CardContainor