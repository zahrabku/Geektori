import React from 'react'
import '../styles/sass/container__body.scss'



const Container: React.FC = (props) => {
    return (
        <div className={"container__body"} >
            {props.children}
        </div>
    );
}

export default Container;