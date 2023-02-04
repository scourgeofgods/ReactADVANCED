import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ image, name, id, glass, info }) => {
  return (
    <div
      className="col rounded-2 d-flex align-items-start  flex-column gap-3 p-3 shadow-lg "
      key={id}
    >
      <div>
        <img
          src={image}
          alt=""
          className="rounded-top img-fluid"
          style={{ width: 600, height: 300 }}
        />
      </div>
      <div className="text-start">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-dark px-5">
          Details
        </Link>
      </div>
    </div>
  )
}

export default Cocktail
