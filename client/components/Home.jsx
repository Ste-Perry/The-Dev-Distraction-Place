//@ts-check

import React from 'react'
import { Link } from "react-router-dom";

function Home () {
  return (
    <div className="main-page">
      <h2 className="header">Relax Your Mind and Body</h2>
      <div className="photos">
        <div className="photo-link">
          <img src="/main-page/game1.jpg" />
          <div ><Link to={`/game`}>Game</Link></div>
        </div>

        <div className="photo-link">
          <img className="stones-photo" src="/main-page/nature.jpg" />
          <div><Link to={`/`}>Nature</Link></div>
        </div>

        <div className="photo-link">
          <img className="stones-photo" src="/main-page/meditation1.jpg" />
          <div><Link to={`/meditation`}>Meditation</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Home
