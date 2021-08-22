import React, { useState } from "react";
import { FC } from "react";

interface ISwitch {
  label: string;
}


const Switch: FC<ISwitch> = (props) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="formControl-wrapper">
      <div className="formControl">
        <label className="formControl-label">{props.label}</label>
        <div className="Switch-items">
          <div className={`Switch-field ${isActive ? 'switch-active': ''} `} onClick={toggleClass}>
            فعال
          </div>
          <div className={`Switch-field ${!isActive ? 'switch-active': ''} `} onClick={toggleClass}>
            غیرفعال
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switch;
