import React, { useState, useEffect } from 'react';
import dayImage from '../assets/final-morning.mp4';
import nightImage from '../assets/final-night.mp4';

function MyComponent() {
  // Declare a new state variable, which we'll call "image"
  // and set its initial value to the day image
  const [image, setImage] = useState(dayImage);

  useEffect(() => {
    // Get the user's timezone offset in minutes
    const offset = new Date().getTimezoneOffset();

    // Get the current hour in the user's timezone
    const hour = new Date().getUTCHours() + offset / 60;

    // Check if it's currently daytime or nighttime in the user's timezone
    if (hour >= 6 && hour < 18) {
      // If it's daytime, set the image to the day image
      setImage(dayImage);
    } else {
      // If it's nighttime, set the image to the night image
      setImage(nightImage);
    }
  }, []);

  return (
    <video 
    className='lg:w-screen'
    src={image}
    type="video/mp4"
    loop="true"
    autoplay="true"
    
    
    />
  );
}

export default MyComponent;
