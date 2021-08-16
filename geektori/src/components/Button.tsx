import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import '../styles/sass/button.scss'


interface IButton{
    icon:IconProp  ;
    text?:string;
    className?:string;
}


const Button :FC<IButton>=(props)=>{

    return(
        <button className={`button ${props.className}`}>
            <div>{props.text}</div>
            <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
        </button>
    )

}

export default Button;