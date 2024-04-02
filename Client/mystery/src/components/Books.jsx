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
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
    <h1 className='font-semibold text-xl pb-2 '>You might like</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex harum autem accusantium voluptates provident veritatis minus numquam quis, commodi assumenda? Assumenda autem esse, amet cupiditate aliquid maiores perferendis saepe!
    Optio molestiae illo eius odit quod accusantium ipsa consequuntur dolor nobis sapiente in earum vero, excepturi cupiditate hic cum dolorem quasi, esse aspernatur facilis voluptatem numquam? Exercitationem numquam cumque eaque!
    Architecto autem, esse laborum eligendi atque facilis magnam possimus ratione suscipit quasi quis cupiditate officia id, facere debitis alias repudiandae voluptatum blanditiis earum tempore nulla et, sapiente soluta saepe! Autem.
    Explicabo, id perspiciatis. Aut molestiae perferendis voluptatum autem accusamus placeat, cumque mollitia doloribus iste minima pariatur, rerum sed reprehenderit, aperiam eveniet beatae facilis doloremque! Quas commodi vel dicta hic debitis!</p>
    
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
   </>

  )
}

export default Books