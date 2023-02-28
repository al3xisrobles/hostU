import React from 'react'
import OptionPanel from './optionPanel'

function Hostguest() {
  return (
    <section className="w-full flex justify-center h-screen min-h-screen" id="home">
      <div className="px-24">
        <div className="w-full h-full flex justify-center flex-wrap">

          {/* Option Panels */}
          <OptionPanel title="Away? Get Paid"
                       desc="Take 3 minutes and 37 seconds to share what you need, and we will send you all matching listings"
                       buttonText="Become a Host"/>
          <OptionPanel title="Need a place?"
                       desc="Take 3 minutes and 37 seconds to share what you need, and we will send you all matching listings"
                       buttonText="Find a Place"/>

        </div>
      </div>
    </section>
  )
}

export default Hostguest
