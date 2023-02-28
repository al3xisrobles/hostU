import React from 'react'

function OptionPanel(props) {
  return (
    <>
      <div className="w-1/2 p-4 shadow-3xl ">
        <div className="w-full flex-col flex text-center justify-center items-center">
          <p className="text-3xl font-bold">{props.title}</p>
          <p>{props.desc}</p>
          <p>{props.buttonText}</p>
        </div>
      </div>
    </>
  )
}

export default OptionPanel
