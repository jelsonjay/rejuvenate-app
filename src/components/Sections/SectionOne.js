import React from 'react'


const SectionOne = () => {
  return (
    <>
    <div className='main'>
    <section id='section_one' className='grid' >
    <ul>
  {/* Card 1 */}
    <li>
    <div className='card'>
    <img src='/images/section_1.png' alt=''/> 
    <div className='card_content'>
    <div className='card_items social-icons'>
    <span>Beneft</span>
    <img src='/icons/present.svg' alt=''/> 
    </div>
    <h3>An Example of a Benefits Post</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Ut dolor sit purus massa, mattis nec.</p>
    </div>
    </div>
    </li>
  {/* Card 2 */}
    <li>
    <div className='card'>
    <img src='/images/section_2.png' alt=''/> 
    <div className='card_content'>
    <div className='card_items social-icons'>
    <span>Beneft</span>
    <img src='/icons/bag.svg' alt=''/> 
    </div>
    <h3>An Example of a Benefits Post</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Ut dolor sit purus massa, mattis nec.</p>
    </div>
    </div>
    </li>
  {/* Card 3 */}
    <li>
    <div className='card'>
    <img src='/images/section_3.png' alt=''/> 
    <div className='card_content'>
    <div className='card_items social-icons'>
    <span>Beneft</span>
    <img src='/icons/hands.svg' alt=''/> 
    </div>
    <h3>An Example of a Benefits Post</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Ut dolor sit purus massa, mattis nec.</p>
    </div>
    </div>
    </li>
    </ul>
    </section>
    </div>
    </>
  )
}

export default SectionOne
