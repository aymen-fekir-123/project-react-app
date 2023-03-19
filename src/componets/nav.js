import React from 'react'
import { Link } from 'react-router-dom'
import { Button }  from './Button'
import './nav.css'
import '../App.css'
function Nav() {

  const [click, setclick] = React.useState(false)
  const handellclick = () => setclick(priv => !priv)
  const closeMenu = () => setclick(false)

  const [button, setbutton] = React.useState(true)

  function Showbutton () {
    if (window.innerWidth <= 960) {
      setbutton(false)
    }else {
      setbutton(true)
    }
  }

  React.useEffect(() => {
    Showbutton()
  }, [])


  window.addEventListener("resize", Showbutton);


  return (
    <>
      <nav className='navbar'>
          <div className='navbar-containor'>
            <Link to="/" className='navbar-logo'>
                AYME <i className='fab fa-typo3'/>
            </Link>

            {!button&&<div className='menu-icon' onClick={handellclick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>}
            <ul className={click ? 'menu-bar active' : 'menu-bar'}>
              <li className='menu-li'>
                <Link 
                to="/" 
                className='menu-link'
                onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className='menu-li'>
                <Link 
                to="/service" 
                className='menu-link'
                onClick={closeMenu}
                >
                  Service
                </Link>
              </li>
              <li className='menu-li'>
                <Link 
                to="/product" 
                className='menu-link'
                onClick={closeMenu}
                >
                  Product
                </Link>
              </li>
              {!button&&<li className='menu-li'>
                <Link 
                to="/sign-up" 
                className='menu-link-mobile'
                onClick={closeMenu}
               >
                  Sign Up
                </Link>
              </li>}
              

            </ul>
            {button && <Button stylbutton="btn-outline" content="Sing-Up" />}
            
          </div>
      </nav>
   
    </>
  )
}

export default Nav