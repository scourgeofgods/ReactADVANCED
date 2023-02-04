import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error">
      <div className="container">
        <div className="row">
          <div className="heading d-flex flex-column align-items-center">
            <h1>There is an Error</h1>
            <Link to="/" className="btn btn-dark">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Error
