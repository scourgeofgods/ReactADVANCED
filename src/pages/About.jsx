import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 section-heading d-flex flex-column">
            <h1 className="text-center">About Us</h1>
            <p className="lead text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quidem eveniet quis. Nesciunt doloribus ipsam unde aspernatur
              perspiciatis? Corporis aut voluptate nesciunt laborum, labore ea
              suscipit praesentium? Tempora pariatur veniam quo sed quas ipsam,
              voluptatem repellendus tempore repellat, qui perferendis.
            </p>
            <Link to="/" className="btn btn-dark">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
