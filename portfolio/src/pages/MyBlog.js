
import React from 'react'
import EnListBlogs from '../complements/MyBlog/logical/EnListBlogs'
import MyBlogNav from '../complements/MyBlog/visual/MyBlogNav'

const MyBlog = () => {
  
 
  return (
    <div className='mt-3'>
    <div className='d-flex flex-column align-items-center justify-content-start'>
      <div>
      <MyBlogNav/>
      </div>
      <h1 className="custom-blog-logo mt-3">MyBlog</h1>
      <hr/>
      <EnListBlogs/>
    </div>
    </div>
  )
}

export default MyBlog
