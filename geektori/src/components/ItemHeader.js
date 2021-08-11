import React from 'react'
import Container from './container'
import HorizontalLine from './HorizontalLine';
import '../styles/sass/ItemHeader.scss'


function ItemHeader(props){
    return(
        <Container className={'Container__ItemHeader'}>
        <HorizontalLine></HorizontalLine>
            <h3 className="ItemHeader__text">{props.text}</h3>
        <HorizontalLine></HorizontalLine>
        </Container>
    )
}

export default ItemHeader;