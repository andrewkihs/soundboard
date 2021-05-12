import React from 'react'
const Splash = ({ currentUser, logout }) => {
  
  return (
    <>
      <div className="fronthero-container">
        <img className="landing-image" src={window.landingImageURL}/>
      </div>
    </>
  )
};


export default Splash;