import React from 'react'
import FAQAnswer from './FAQAnswer';
import FAQuestion from './FAQuestion';
import '../styles/sass/FAQItem.scss'


function FAQItem(props){
    return(
        <div className="FAQItem__container">
            <FAQuestion text={props.question}></FAQuestion>
            <FAQAnswer>{props.answer}</FAQAnswer>
        </div>
    )
}

export default FAQItem;