import React, { FC } from 'react'
import '../styles/sass/FAQAnswer.scss'


const FAQAnswer : FC = (props) => {
    return(
        <div className="FAQAnswer__container">
            <p>{props.children}</p>
        </div>
    )
}

export default FAQAnswer;