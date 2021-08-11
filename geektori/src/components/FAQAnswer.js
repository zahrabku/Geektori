import React from 'react'
import '../styles/sass/FAQAnswer.scss'


function FAQAnswer(props){
    return(
        <div className="FAQAnswer__container">
            <p>{props.children}</p>
        </div>
    )
}

export default FAQAnswer;