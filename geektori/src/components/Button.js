import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Button({icon,text,className}){

    return(
        <button className={className}>
            <div>{text}</div>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </button>
    )

}

export default Button;