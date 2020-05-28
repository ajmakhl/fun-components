import React from "react"
import "./style.css"

export default (props) => {
  return (
    <div className="msg-box-001-container">
      <div className="msg-box-001-tag">{props.tag}</div>
      <div className="msg-box-001-title">{props.title}</div>
      <div className="msg-box-001-detail">{props.detail}</div>
      <div className="msg-box-001-button" onClick={props.onClick}>
        {props.buttonText} <span>{props.buttonIcon}</span>
      </div>
    </div>
  )
}
