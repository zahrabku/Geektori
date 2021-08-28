import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "../styles/sass/button.scss";

interface IButton {
  icon?: IconProp;
  text?: string;
  className?: string;
  click?:()=>void
}


const Button: FC<IButton> = (props) => {
  return (
    <button className={`button ${props.className}`} onClick={props.click}>
      <div>{props.text}</div>
      {props.icon ? <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon> : ""}
    </button>
  );
};

export default Button;
