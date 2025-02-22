// import React, { PureComponent } from 'react'

export default function Card({info}) {
    return (
        <div className="card">
        <img src={Info.image} alt="" />
        <h4>{Info.firstName}</h4>
        <h5>{Info.lastName}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nostrum?</p>
      </div>
    )
  }

