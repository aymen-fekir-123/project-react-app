import React from 'react'
import{ Link } from 'react-router-dom'
function Carditem(props) {
  return (
    <div className='card-containor'>
        <Link className='link-card'>
            <figure className='items-pic' data-category={props.namefigure}> 
              <img src={props.image} alt='imge' />
            </figure>
            <div className='cardifo'>
                <h5>{props.title}</h5>
            </div>
        </Link>

    </div>
)
}

export default Carditem