import React, { FC, useState } from 'react'
import FAQAnswer from './FAQAnswer';
import FAQuestion from './FAQuestion';
import '../styles/sass/FAQItem.scss'

interface IFAQItem{
    question:string;
    answer:string;
}

const FAQItem:FC<IFAQItem>=(props)=>{

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