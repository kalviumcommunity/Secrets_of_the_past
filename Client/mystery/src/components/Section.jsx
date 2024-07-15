import React from 'react';

function Section() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-5 py-5'>
        <div className='section-container flex flex-col md:flex-row justify-between'>
          <div className='content md:w-1/2'>
            <div className='text'>
              <h2>Your Thoughts</h2>
              <p>
                Hey! What are you worried about? Listen, every person has his/her
                own mysterious story. Yes, the story of their life.
                <br />
                Here's a place you can share it, be anonymous, and share your own
                story.
              </p>
            </div>
          </div>
          <div className='image md:w-1/2 image-container'>
            <img
              src="https://th.bing.com/th/id/OIG1.guDZyD7oXgJZcRs5pAjV?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
              alt="Mystery Image"
            />
          </div>
        </div>
      </div>

      {/* Second div with image on the left */}
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-5'>
        <div className='section-container flex flex-col md:flex-row-reverse'>
          <div className='image md:w-1/2 image-container'>
            <img className='laptop_boy'
              src="https://th.bing.com/th/id/OIG2.Xhg3upHHY._mm64cggWe?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
              alt="Mystery Image"
            />
          </div>
          <div className='content md:w-1/2'>
            <div className='text'>
              <h2>Your Thoughts</h2>
              <p>
                Hey! What are you worried about? Listen, every person has his/her
                own mysterious story. Yes, the story of their life.
                <br />
                Here's a place you can share it, be anonymous, and share your own
                story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
