import React from 'react'
import Navbar from '../component/Navbar'
import Blogs from '../component/Blogs'
import Footer from '../component/Footer'
const HomePages = ({blogs}) => {
  // console.log(blogs)
  return (
    <div>
      <Navbar/>
      <Blogs blogs={blogs?blogs:""}/>
      <Footer/>
    </div>
  )
}

export default HomePages
