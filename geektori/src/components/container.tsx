import React, { HTMLProps } from 'react'
import '../styles/sass/container__body.scss'



const Container: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
    return (
        <div className={`${props.className}  container__body `} >
            {props.children}
        </div>
    );
}

export default Container;