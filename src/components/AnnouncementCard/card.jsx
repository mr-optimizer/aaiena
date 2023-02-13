import React from 'react';
import './style.css';
const card = (props) => {
  return (
    <div className='announcement_card'>
      <img className='announcement_card_img' src={props.src} alt="announcement"/>
      <h3 className='announcement_card_title'>{props.title}</h3>
      <p className='announcement_card_text'>{props.text}</p>
    </div>
  )
}

export default card;