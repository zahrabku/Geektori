import React, { FC } from "react";
import Container from "./Container";
import "../styles/sass/filtersticker.scss";
import DropDown from "./DropDown";
import Switch from "./Switch";
import RangeSlider from "./Slider";

const itemDetails = ["جدیدترین", "قدیمی ترین", "فلان"];
const itemDetailscategory = ["فیلم", "کمیک", "برنامه نویسی"];

const FilterSticker: FC = () => {
  return (
    <Container>
      <div className="filtersticker-container">
        <DropDown label="ترتیب نمایش" items={itemDetails}></DropDown>
        <Switch label="فقط موجود"></Switch>
        <Switch label="فقط تخفیف‌دار"></Switch>
        <DropDown label="دسته بندی" items={itemDetailscategory}></DropDown>
        <RangeSlider></RangeSlider>
      </div>
    </Container>
  );
};

export default FilterSticker;
