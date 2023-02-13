import React from 'react';
import './style.css';
const card = (props) => {
  return (
    <div className='card'>
      <img className='card_img' src={props.src} alt="announcement"/>
      <h3 className='card_title'>{props.title}</h3>
      <p className='card_text'>{props.text}</p>
    </div>
  )
}

export default card;