import React from 'react'
import EnListBlogs from '../complements/MyBlog/logical/EnListBlogs'

const MyBlog = () => {
  return (
    <div className='mt-3'>
    <div className='d-flex flex-column align-items-center justify-content-evenly'>
      <h1>MyBlog</h1>
      <hr/>
      <EnListBlogs/>
    </div>
    </div>
  )
}

export default MyBlog
