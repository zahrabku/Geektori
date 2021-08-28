import React from "react";
import { FC } from "react";
import "../styles/sass/filtersticker.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useData } from "../context";

interface IDropDown {
  label: string;
  items: string[];
}

const DropDown: FC<IDropDown> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, addData } = useData()!;
  const [isSelected, setIsSelected] = useState(props.items[0]);
  // addData('SelectedShowCategory',props.items[0])

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  function handleSelect(e: any) {
    setIsSelected(e.target.innerText);
    addData("SelectedShowCategory", e.target.innerText);
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
          <div className="dropdown-field-icon">
            <FontAwesomeIcon
              icon={!isOpen ? faAngleDown : faAngleUp}
            ></FontAwesomeIcon>
          </div>
        </div>
        {isOpen ? (
          <div className="dropdown-items">
            {props.items.map((i) => {
              return <div onClick={handleSelect}>{i}</div>;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DropDown;
