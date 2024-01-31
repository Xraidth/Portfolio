

import {React, useState} from 'react'
import EnListBlogs from '../complements/MyBlog/logical/EnListBlogs'
import MyBlogNav from '../complements/MyBlog/visual/MyBlogNav'

const MyBlog = () => {
  const [txtSearch, setTxtSearch] = useState("");

  
  function handleFilter(txt_filter){
  setTxtSearch(txt_filter);
  }
 
  return (
    <div className='mt-3'>
    <div className='d-flex flex-column align-items-center justify-content-start'>
      <div>
      <MyBlogNav handleFilter ={handleFilter}/>
      </div>
      <h1 className="custom-blog-logo mt-3">MyBlog</h1>
      <hr/>
      <EnListBlogs blogs_filter={txtSearch}/>
    </div>
    </div>
  )
}

export default MyBlog
