import React from "react"
import "./style.css"

export default (props) => {
  return (
    <div className="prof-box-001-container">
      <div className="prof-box-001-img">
        <img src={props.img} alt={props.name} />
        <div className="prof-box-001-status">{props.status}</div>
      </div>
      <div className="prof-box-001-content">
        <div className="prof-box-001-identity">
          <div className="prof-box-001-name">{props.name}</div>
          <div className="prof-box-001-handle">{props.handle}</div>
        </div>
        <div className="prof-box-001-position">{props.position}</div>
        <div className="prof-box-001-detail">{props.detail}</div>
      </div>
    </div>
  )
}
