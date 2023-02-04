import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef()

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="search my-5">
      <div className="container">
        <div className="row">
          <div className="form ">
            <div
              className="form-control row d-flex align-items-center column-gap-3"
              onSubmit={handleSubmit}
            >
              <label htmlFor="name" className="col-2 btn btn-dark ms-2 ">
                Search
              </label>
              <input
                type="text"
                id="name"
                placeholder="Search...."
                className="col-8 rounded border-0 p-1 outline-0"
                ref={searchValue}
                onChange={searchCocktail}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
