import React from 'react'
import Button from './Button'
import '../styles/sass/FAQuestion.scss'
import '../styles/sass/button__plus.scss'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'


function FAQuestion(props){
    const isOpen=props.isOpen;

    return(
            <div className="FAQuestion__content" onClick={props.click}>
                <div className="FAQuestion__text">{props.text}</div>
                <Button icon={isOpen ? faMinus : faPlus} text='' className='button__plus'></Button>
            </div>
        
    )
}

export default FAQuestion;