import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'

import Navbar from './components/Navbar'
import Loading from './components/Loading'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cocktail/:id',
        element: <SingleCocktail />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
])
function App() {
  return (
    <div className="App">
      <RouterProvider
        router={router}
        fallbackElement={<Loading />}
      ></RouterProvider>
    </div>
  )
}

export default App
