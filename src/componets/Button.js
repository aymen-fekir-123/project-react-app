import React from 'react'
import { Link } from 'react-router-dom';
import './button.css'

export const Button = ({
stylbutton,
type, 
onclick,
sizebutton,
content


}) => {
    let style = ["btn-primary", "btn-outline", "btn-test"]
    let size = ["btn-meduim", "btn-large"]
    let che_btn_style = style.includes(stylbutton) ? stylbutton : style[0]
    let che_btn_size= size.includes(sizebutton) ? sizebutton : size[0]

    return (
        <Link to="/sign-up" className='btn-mobile'>
            <button 
            className={`btn ${che_btn_style} ${che_btn_size}`}
            onClick={onclick}
            type={type}
            >
                {content}
            </button>
        </Link>
    )
}

