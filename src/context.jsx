import React, { useState, useContext, useEffect } from 'react'
import SearchForm from './components/SearchForm'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { drinks } = data
      console.log(data)
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm])
  return (
    <AppContext.Provider
      value={{ loading, searchTerm, cocktails, setSearchTerm, show, setShow }}
    >
      {children}
    </AppContext.Provider>
  )
}

//
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider, AppContext }
