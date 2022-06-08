import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Hero from './lib/components/Home/Hero/Hero'
import Layout from './lib/layout/Layout'
import BlogScreen from './lib/screens/Blog/BlogScreen'
import HomeScreen from './lib/screens/Home/HomeScreen'
import Projects from './lib/screens/Projects/Projects'

const App = () => {
  return (
    <BrowserRouter>     
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeScreen/>} />
          <Route path='projects' element={<Projects />} />
          <Route path='blog' element={<BlogScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App