import React, { FC } from "react";
import Container from "./container";

interface IItemsToShow {
  items: React.ReactNode;
}

const GridSticker: FC<IItemsToShow> = (props) => {
  return (
    <Container>
      <div className="grid-template">
        {props.items}

        <div className="grid-item"></div>;
      </div>
    </Container>
  );
};

export default GridSticker;
