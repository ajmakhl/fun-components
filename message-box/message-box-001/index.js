import React from "react"
import "./style.css"

export default (props) => {
  return (
    <div class="container">
      <div class="tag">{props.tag}</div>
      <div class="title">{props.title}</div>
      <div class="detail">{props.detail}</div>
      <div class="button" onClick={props.onClick}>
        {props.buttonText} <span>{props.buttonIcon}</span>
      </div>
    </div>
  )
}
