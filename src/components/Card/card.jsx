import React from 'react';
import './style.css';
const card = (props) => {
  return (
    <div className={props.isSmall ? "card_small" : "card"}>
      <img className={props.isSmall ? "card_img_small" : "card_img"} src={props.src} alt="announcement"/>
      <h3 className='card_title'>{props.title}</h3>
    </div>
  )
}

export default card;