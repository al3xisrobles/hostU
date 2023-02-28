import React, { useState, useEffect } from 'react'

function Hero() {

  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitleList = ['want a no fee housing solution', 'won’t use their whole lease', 'want cash', 'want a curated, private, and safe process'];

  useEffect(() => {

    // Use setInterval to update the content index every 3 seconds
    const intervalId = setInterval(() => {
      setSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitleList.length);
    }, 3000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Only run this effect once when the component mounts

  return (
    <section className="w-full flex justify-center h-screen min-h-screen" id="home">
      <div className="px-24 max-w-9xl font-bold h-full flex flex-wrap items-center">

        {/* Left Side */}
        <div className="w-full flex flex-col justify-center text-8xl">
          <p>hostU, for students who</p>
          <p className="text-purple-500">{subtitleList[subtitleIndex]}</p>
        </div>

        {/* Right Side */}
        {/* <div className="w-full sm:w-1/2 flex items-center justify-center">
          <div className='w-3/4 h-[300px] flex justify-center items-center custom-shadow rounded-3xl'>
            <p>Graphic</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Hero
