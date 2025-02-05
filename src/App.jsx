import React from 'react'
import HomePages from './pages/HomePages'
import BlogContent from './pages/BlogContent'
import { Route, Routes } from 'react-router-dom'
import useFetch from './hooks/useFetch'

function App() {
  let { loading, data, error } = useFetch("http://localhost:1337/api/blogs?populate=*")
  if (loading) return <p>Loading.....</p>
  if (error) return <p>Error.....</p>
  //  console.log(data)
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePages blogs={data ? data : ""} />}></Route>
        <Route path='/blog/:id' element={<BlogContent blogs={data ? data : ""} />}></Route>
      </Routes>
    </div>
  )
}

export default App
