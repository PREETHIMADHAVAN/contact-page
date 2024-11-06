import React from 'react'
import './Button.css';

const Button = (props) => {
  return (
    <button className={props.buttonType}
      onClick={props.onClick}>
      {props.btnIcon}&nbsp;
      {props.buttonName}
      </button>
  )
}

export default Button;