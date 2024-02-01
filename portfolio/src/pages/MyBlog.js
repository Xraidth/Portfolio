

import {React, useState, useEffect} from 'react'
import EnListBlogs from '../complements/MyBlog/logical/EnListBlogs'
import MyBlogNav from '../complements/MyBlog/visual/MyBlogNav'

const MyBlog = () => {
  const [txtSearch, setTxtSearch] = useState("");

  useEffect(() => {
    const setFavicon = () => {
    const link = document.querySelector("link[rel~='icon']");
    if (link !== null) {
        link.href = '../../MyBlog.ico'
        document.title ="MyBlog"
      }
      
    };
    setFavicon();    
  }, []);

  
  function handleFilter(txt_filter){
  setTxtSearch(txt_filter);
  }
 
  return (
    <div className='myblog_body'>
    <div className='d-flex flex-column align-items-center justify-content-start custom-min-height-100'>
      <div className='mb-4 w-100'>
      <MyBlogNav handleFilter ={handleFilter}/>
      </div>
      
      <EnListBlogs blogs_filter={txtSearch}/>
    </div>
    </div>
  )
}

export default MyBlog
