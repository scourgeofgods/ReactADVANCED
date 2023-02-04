import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()
  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-center">
        <h2 className="">No Cocktails Matched Your Search Criteria</h2>
      </div>
    )
  }
  return (
    <section className="cocktails">
      <div className="container ">
        <div className="row">
          <div className="heading">
            <h1 className="text-center">Cocktail List</h1>
          </div>
        </div>
        <div className="row row-cols-md-2 row-cols-lg-3 row-cols-1 g-5">
          {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />
          })}
        </div>
      </div>
    </section>
  )
}

export default CocktailList
