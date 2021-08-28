import React from "react";
import { FC } from "react";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import SliderButton from "./SliderButton";


function valueLabelFormat(value: number) {
  return `${value} `;
}

const RangeSlider: FC = (props) => {
  const [sliderValue, setSliderValue] = useState<number[]>([206000, 336000]);

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
          max={sliderValue[1]}
          onChange={handleSliderChange}
          valueLabelDisplay="on"
          aria-labelledby="range-slider"
          // getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          className='main-slider'
          // ValueLabelComponent={SliderButton}
        />
        <span className="input-range--label input-range--label--max">
            366000 تومان
        </span>
        <span className="input-range--label input-range--label--min">
          0 تومان
        </span>
      </div>
    </div>
  );
};

export default RangeSlider;
