import React, { FC } from "react";
import Container from "./container";
import "../styles/sass/grid-template.scss";

interface IItemsToShow {
  items: React.ReactNode;
}

const GridSticker: FC<IItemsToShow> = (props) => {
  const hjj = React.Children.map(props.items, (i) => (
    <div className="grid-item">{i}</div>
  ));

  return (
    <Container>
      <div className="grid-template">{hjj}</div>
    </Container>
  );
};

export default GridSticker;
