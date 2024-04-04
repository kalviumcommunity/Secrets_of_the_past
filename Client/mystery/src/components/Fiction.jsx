import React, {useState, useEffect} from 'react'

function Fiction() {
  // const [novels, setNovels] = useState([]);

  useEffect(()=>{
    // I have to add the link logic here
  })
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>Here are some <span className='text-red-700'>Fictional stories</span> for you</h1>
          <p className='mt-7 pb-7'>Don't get too engaged in reading !</p>

    </div>
    </div>
    </>
  )
}

export default Fiction