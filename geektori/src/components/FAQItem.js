import React, { useState } from 'react'
import FAQAnswer from './FAQAnswer';
import FAQuestion from './FAQuestion';
import '../styles/sass/FAQItem.scss'


function FAQItem(props){

    const [isOpen,setIsOpen]=useState(false);

    const toggleAccordion=()=>{
        if(isOpen){
            setIsOpen(false)
        }
        else{
            setIsOpen(true)
        }
    }

    return(
        <div className="FAQItem__container">
            <FAQuestion text={props.question} isOpen={isOpen} click={toggleAccordion}></FAQuestion>
            {isOpen &&
            <FAQAnswer>{props.answer}</FAQAnswer>
            }
        </div>
    )
}

export default FAQItem;