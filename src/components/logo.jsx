import React from 'react'

function Logo(props) {
  return (
    <>
      <div className={`font-black flex flex-row ${props.textSize}`}>

        {/* Title */}
        <p>host</p>

        {/* Graphic Background
            Custom Colors:
              bg-purple-gradient
        */}
        <div className={`w-9 ml-1 flex justify-center items-center rounded-[50px] ${props.bgColor}`}>

          {/* U */}
          <p className={`${props.textColor}`}>U</p>
        </div>
      </div>
    </>
  )
}

export default Logo
