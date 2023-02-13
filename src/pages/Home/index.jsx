import React from 'react'
import './style.css';
import Card from '../../components/AnnouncementCard/card';

let announcement = [
  {
    src:"/images/Image2.png",
    title:"MEET AND GREET NORMAN ORNELAS",
    text:"Award-winning poet Norman Ornelas is dropping by on March 10, 7 PM. Hewill be reading from his new collection,Spring, and signing copies. Buy ticketsnow!"
  },
  {
    src:"/images/Image3.png",
    title:"SITE RENOVATION",
    text:"We will be closed for the whole month of September for store renovations. We are excited to welcome you to a bigger and more updated space."
  },
  {
    src:"/images/Image4.png",
    title:"WE'RE HIRING",
    text:"We are looking for full-time and part-time staff. If you're passionate about books, apply here!"
  }
]

const Home = () => {
  return (
    <div>
      <nav className='nav_bar'>
        <img className='nav_logo' src='/images/Aaiena-removebg-preview.png' alt='logo'/>
        <ul className='nav_list'>
          <li className='nav_list_item'><a href='hero_section'>Home</a></li>
          <li className='nav_list_item'><a href='#'>Sale</a></li>
          <li className='nav_list_item'><a href='#'>Casual Shirt</a></li>
          <li className='nav_list_item'><a href='#'>Ethnic</a></li>
          <li className='nav_list_item'><a href='#'>Sportswear</a></li>
        </ul>
      </nav>
      <section className='hero_section'>
        <img className='down_arrow' src='/images/extras/down-arrow.png' alt='down arrow'></img>
      </section>
      <section className="announcement_section">
        <h2 className='header_primary'>Announcement</h2>
        <div className='card_container'>
          {announcement.map((item, index) => 
              <Card src={item.src} title={item.title} text={item.text}/>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home