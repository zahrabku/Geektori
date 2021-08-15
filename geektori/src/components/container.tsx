import React, { FC } from 'react'
import '../styles/sass/container__body.scss'

interface IContainer{
    className:string;
}

const Container: FC<IContainer> = (props) => {
    
    return (
        
        <div className={`container__body ${props.className}`} >
            {props.children}
        </div>
    );
}

export default Container;