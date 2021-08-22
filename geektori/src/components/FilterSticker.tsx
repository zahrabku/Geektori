import React, { FC } from "react";
import Container from "./container";
import "../styles/sass/filtersticker.scss";
import DropDown from "./DropDown";
import Switch from "./Switch";
import RangeSlider from "./Slider";




const itemDetails = ["جدیدترین", "قدیمی ترین", "فلان"];

const FilterSticker: FC = () => {
  return (
    <Container>
      <div className="filtersticker-container">
        <DropDown label="ترتیب نمایش" items={itemDetails}></DropDown>
        <Switch label="فقط موجود"></Switch>
        <Switch label="فقط تخفیف‌دار"></Switch>
        <DropDown label="دسته بندی" items={itemDetails}></DropDown>
        <RangeSlider></RangeSlider>
      </div>
    </Container>
  );
};

export default FilterSticker;
