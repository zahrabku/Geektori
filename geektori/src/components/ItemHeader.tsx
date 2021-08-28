import React, { FC } from "react";
import Container from "./Container";
import HorizontalLine from "./HorizontalLine";
import "../styles/sass/ItemHeader.scss";

interface IitemHeader {
  text: string;
}

const ItemHeader: FC<IitemHeader> = (props) => {
  return (
    <Container className="Container__ItemHeader">
      <HorizontalLine></HorizontalLine>
      <h3 className="ItemHeader__text">{props.text}</h3>
      <HorizontalLine></HorizontalLine>
    </Container>
  );
};

export default ItemHeader;
