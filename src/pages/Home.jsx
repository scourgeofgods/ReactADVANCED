import React from 'react'

import CocktailList from './../components/CocktailList'
import SearchForm from './../components/SearchForm'

const Home = () => {
  return (
    <main className="main">
      <div className="container">
        <SearchForm />
        <CocktailList />
      </div>
    </main>
  )
}

export default Home
