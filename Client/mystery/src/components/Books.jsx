import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/List.json"
import Cards from "./Cards"

function Books() {
  const filterData=list.filter((data)=>data.category === "Read");
  console.log(filterData)
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   <>
   {/* <div className="partition"> */}
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-5'>
    <div>
    <h1 className='font-semibold text-xl pb-2 '>You might like</h1>
    <p>Hey! here are few books. You can read these short stories</p>
    
   </div>
   <div>
   <div className="slider-container">
      <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>

        ))}
      </Slider>
    </div>
    </div>
    </div>
    {/* </div> */}
   </>

  )
}

export default Books