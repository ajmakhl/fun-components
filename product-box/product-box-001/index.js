import React, { useState } from "react"
import "./style.css"

const Stars = () => {
  const [stars, setStars] = useState([false, false, false, false, false])
  const [_stars, set_Stars] = useState([false, false, false, false, false])
  const handleEnter = (_idx) => {
    set_Stars(_stars.map((i, idx) => (idx <= _idx ? true : false)))
  }
  const handleLeave = () => {
    set_Stars(stars)
  }
  const handleClick = (_idx) => {
    setStars(_stars.map((i, idx) => (idx <= _idx ? true : false)))
  }
  return _stars.map((i, idx) => {
    return (
      <svg
        key={idx}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={i === true ? "#ffbe00" : "gray"}
        className="feather feather-star ratereview-star"
        onMouseEnter={() => handleEnter(idx)}
        onMouseLeave={() => handleLeave(idx)}
        onClick={() => handleClick(idx)}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )
  })
}

export default (props) => {
  const [detailActive, setDetailActive] = useState("")
  return (
    <div className="prod-box-001-container">
      <div className="img-c">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="title">{props.title}</div>
      <div
        onClick={() => setDetailActive("active")}
        className={`detail ${detailActive}`}
      >
        {props.detail}
      </div>
      <div
        onClick={() => setDetailActive("active")}
        className={`detail-action ${detailActive}`}
      >
        Read More...
      </div>
      <div className="head">
        <div className="head-title">Reviews & Ratings</div>
        <div className="head-action">View all</div>
      </div>
      <div className="ratereview">
        <div className="ratereview-ratings">{props.ratings}</div>
        <div className="ratereview-content">
          <div className="ratereview-stars">
            <Stars />
          </div>
          <div className="ratereview-reviews">{props.reviews}</div>
        </div>
      </div>
    </div>
  )
}
