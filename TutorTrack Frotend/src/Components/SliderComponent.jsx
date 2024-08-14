import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds
  };

  const slides = [
    {
      title: 'We provide proper education with a futuristic education model.',
      description: 'Our teaching skills are exceptional, combining years of experience, a passion for education, and personalized attention to ensure each student excels.',
      image: '', // Add any image path if required
    },
    {
      title: 'Register now and avail more offers!!!',
      description: 'We know you\'re busy—plan ahead and book your tutoring sessions in advance. We\'ll ensure a skilled tutor arrives on time, ready to help when you need it most.',
      image: '', // Add any image path if required
    },
    {
      title: '',
      description: '',
      image: 'https://i.pinimg.com/564x/ac/12/11/ac12119eefee51e85abbd845c7237ea5.jpg',
    },
    {
      title: '',
      description: '',
      image: 'https://klaymatrix.com/wp-content/uploads/2021/07/Python-Course-Thumbnail.png',
    },
    {
      title: '',
      description: '',
      image: 'https://skillfloor.com/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_21719306206.jpg',
    },
    {
      title: '',
      description: '',
      image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/198/Mobile/Content/DSA_1720779645.png',
    },
    {
      title: '',
      description: '',
      image: 'https://www.construx.com/wp-content/uploads/2020/06/devops-essentials.jpg',
    },
  ];

  return (
    <div className="slider-container">
      <div className="slider-title">
        <h2>Courses Offered</h2>
      </div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide.image && <img src={slide.image} alt={`Slide ${index + 1}`} className="slider-image" />}
            {slide.title && (
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
