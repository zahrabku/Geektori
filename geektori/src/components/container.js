import React from 'react'
import '../styles/sass/container__body.scss'



function Container(props) {
    return (
        <div className={props.className} >
            {props.children}
        </div>
    );
}

export default Container;