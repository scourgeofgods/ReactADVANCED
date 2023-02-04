import React from 'react'

const Loading = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="loader">
              <div className="loader-inner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="loader-inner2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
