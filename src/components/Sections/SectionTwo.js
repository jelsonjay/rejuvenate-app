import React from 'react'
import Button from '../Button/Index'

const SectionTwo = () => {
  return (
    <>
    <div className='main'>
    <section id='section_two' className='grid_section_two'>
    <div className='items_center'>
    <Button />
    <h2>@Se_RailWay</h2>
    </div>
    
    <ul>
  {/* Card 1 */}
    <li className='item_center'>
    <div className='card_content'>
    <div className='card_items social-icons'>
    <span>Todat at 8:45pm</span>
    <img src='/icons/twitter.svg' alt=''/> 
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Ut purus massa, mattis nec purus quis, eleifend
       auctor dolor. Nulla mollis non enim vitae consequat.</p>
    <span className='reply-color'>Reply</span>
    </div>
    </li>
  {/* Card 2 */}
    <li>
    <div className='card_content'>
    <div className='card_items social-icons'>
    <span>Todat at 8:45pm</span>
    <img src='/icons/twitter.svg' alt=''/> 
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Ut purus massa, mattis nec purus quis, eleifend
       auctor dolor. Nulla mollis non enim vitae consequat.</p>
    <span>==</span>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Ut purus massa, mattis nec purus quis, eleifend
       auctor dolor. Nulla mollis non enim vitae consequat.</p>
    <span className='reply-color'>Reply</span>
    </div>
    </li>
  {/* Card 3 */}
    <li className='item_center'>
    <div className='card_content'>
    <div className='card_items social-icons'>
    <span>Todat at 8:45pm</span>
    <img src='/icons/twitter.svg' alt=''/> 
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Ut purus massa, mattis nec purus quis, eleifend
       auctor dolor. Nulla mollis non enim vitae consequat.</p>
    <span className='reply-color'>Reply</span>
    </div>
 
    </li>
    </ul>
    </section>
    <div className='items_center'>
    <Button />
    </div>
    </div>
    </>
  )
}

export default SectionTwo

