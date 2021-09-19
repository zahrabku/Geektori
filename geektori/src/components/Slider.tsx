import React from "react";
import { FC } from "react";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import { useState } from "react";
import SliderButton from "./SliderButton";
import "../styles/sass/slider.scss";

interface IValueLabelComponent {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

function ValueLabelComponent(props: IValueLabelComponent) {
  const { children, open, value } = props;
  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
      // className="slider-tooltip"
    >
      {children}
    </Tooltip>
  );
}

const RangeSlider: FC = (props) => {
  const [sliderValue, setSliderValue] = useState<number[]>([0, 10000]);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setSliderValue(newValue as number[]);
  };

  return (
    <div className="formControl-wrapper">
      <div className="range-slider">
        <Slider
          value={sliderValue}
          min={0}
          step={500}
          max={10000}
          onChange={handleSliderChange}
          valueLabelDisplay="on"
          aria-labelledby="range-slider"
          className="main-slider"
        />
        <span className="input-range--label input-range--label--max">
          10000 تومان
        </span>
        <span className="input-range--label input-range--label--min">
          0 تومان
        </span>
      </div>
    </div>
  );
};

export default RangeSlider;
