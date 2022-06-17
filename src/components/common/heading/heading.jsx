import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        <h1>{subtitle} </h1>
        <h2>{title} </h2>
      </div>
    </>
  )
}

export default Heading