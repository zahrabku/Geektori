import React from "react";
import { FC } from "react";
import "../styles/sass/filtersticker.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface IDropDown {
  label: string;
  items: string[];
}

const DropDown: FC<IDropDown> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isSelected, setIsSelected] = useState('جدیدترین');

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  function handleSelect(e: any) {
    setIsSelected(e.target.innerText);
    setIsOpen(!isOpen);
  }

  return (
    <div className="formControl-wrapper">
      <div className="formControl">
        <label className="formControl-label">{props.label}</label>
        <div className="dropdown-field" onClick={handleOpen}>
          <div className="dropdown-field-text">
            <span>{isSelected}</span>
          </div>
          <div className="dropdown-field-icon" >
            <FontAwesomeIcon
              icon={!isOpen ? faAngleDown : faAngleUp}
            ></FontAwesomeIcon>
          </div>
        </div>
        {isOpen ? (
          <div className="dropdown-items">
            <div onClick={handleSelect}>جدیدترین</div>
            <div onClick={handleSelect}>پرفروش ترین</div>
            <div onClick={handleSelect}>ارزان ترین</div>
            <div onClick={handleSelect}>گران ترین</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DropDown;
