import React, { FC } from 'react'
import FAQItem from './FAQItem'
import '../styles/sass/FAQContainer.scss'

const FAQContainer:FC=(props)=>{

    return(
        <div className="FAQContainer">
        <FAQItem question="بچه ها سلاااام من برگشتم با یک استوری دیگهههه" answer="خوش اومدیییی"></FAQItem>
        <FAQItem question="بچه ها سلاااام من برگشتم با یک استوری دیگهههه" answer="خوش اومدیییی"></FAQItem>
        <FAQItem question="بچه ها سلاااام من برگشتم با یک استوری دیگهههه" answer="خوش اومدیییی"></FAQItem>
        <FAQItem question="بچه ها سلاااام من برگشتم با یک استوری دیگهههه" answer="خوش اومدیییی"></FAQItem>
        <FAQItem question="بچه ها سلاااام من برگشتم با یک استوری دیگهههه" answer="خوش اومدیییی"></FAQItem>
        </div>
    )
}

export default FAQContainer;