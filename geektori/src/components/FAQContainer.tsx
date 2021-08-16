import React, { FC } from 'react'
import FAQItem from './FAQItem'
import '../styles/sass/FAQContainer.scss'

const FAQContainer:FC=(props)=>{

    return(
        <div className="FAQContainer">
        <FAQItem question="بچه ها من برگشتم با یک استوری دیگهههه" answer="خوش اومدیی"></FAQItem>
        <FAQItem question="بچه ها سلاااام من برگشتم با یک استوری دیگهههه" answer="خوش اومدیییی"></FAQItem>
        <FAQItem question="بچه ها سلاااام من با یک استوری دیگهههه" answer="خوش اومدییی"></FAQItem>
        <FAQItem question="بچه ها سلاااام من برگشتم با یک استوری" answer="خوش اومدییی"></FAQItem>
        <FAQItem question="بچه ها سلاااام من برگشتم با یک  دیگهههه" answer="خوش اومدیییی"></FAQItem>
        </div>
    )
}

export default FAQContainer;