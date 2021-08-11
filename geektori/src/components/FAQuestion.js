import React from 'react'
import Button from './Button'
import '../styles/sass/FAQuestion.scss'
import '../styles/sass/button__plus.scss'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function FAQuestion(props){
    return(
            <div className="FAQuestion__content">
                <div className="FAQuestion__text">{props.text}</div>
                <Button icon={faPlus} text='' className='button__plus'></Button>
            </div>
        
    )
}

export default FAQuestion;