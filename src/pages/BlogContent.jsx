import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import BlogContents from '../component/BlogContent'
function BlogContent({blogs}) {
    // console.log("blogs data get blog content ",blogs)

    
  return (
    <div>
     <Navbar/>
     <BlogContents blogs={blogs?blogs:""}/>
      <Footer/>
    </div>
  )
}

export default BlogContent
