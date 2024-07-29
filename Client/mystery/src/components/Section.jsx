import React from 'react';
import { useNavigate } from 'react-router-dom';

function Section() {
  const navigate = useNavigate();

  const handleShareExperienceClick = () => {
    navigate('/share');
  };

  const handleFacts = () => {
    navigate('/facts');
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-5 py-5'>
        <div className='section-container flex flex-col md:flex-row justify-between'>
          <div className='content md:w-1/2'>
            <div className='text'>
              <h2><b>Share Your Story:</b></h2>
              <p>
                <br />
                Hey! What are you worried about? Listen, every person has his/her
                own mysterious story. Yes, the story of their life.
                <br /><br />
                Speak, We are here to listen you.
                <br /><br />
              </p>
              <button
                className='bg-darkest-blue text-white py-2 px-4 rounded hover:bg-blue-400'
                onClick={handleShareExperienceClick}
              >
                Share Experience
              </button>
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
            <img
              className='laptop_boy'
              src="https://th.bing.com/th/id/OIG2.Xhg3upHHY._mm64cggWe?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
              alt="Mystery Image"
            />
          </div>
          <div className='content md:w-1/2'>
            <div className='text'>
              <h2><b>Know the world:</b></h2>
              <p>
                <br />
                Curious to know the truth, the facts which you didn't knew. <br></br>
                You can find it here.<br></br><br/>
                Come and travel through this mysterious world.
              </p>
              <br />
              <button
                className='bg-darkest-blue text-white py-2 px-4 rounded hover:bg-blue-400'
                onClick={handleFacts}
              >
                Read Facts
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
