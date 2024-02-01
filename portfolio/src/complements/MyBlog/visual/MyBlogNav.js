
import {React, useState} from 'react'

const MyBlogNav = ({handleFilter}) => {
  const [txtSearch, setTxtSearch] = useState("");


 function handleClick(e){
  e.preventDefault();
  handleFilter(txtSearch);
 }


  function handletxtSearch(e){
    setTxtSearch(e.target.value);
  }


  return (
    <div className='d-flex flex-row justify-content-center align-items-center'>
      <nav className="navbar navbar-expand-lg">
  
      
      <div className='d-flex flex-row justify-content-evenly align-items-center text-center'>
        <span className='custom-blog-nav-span'>
      <h1 className="custom-blog-logo">MyBlog</h1>  
        </span>        
        
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handletxtSearch}/>
        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
      </form>
      </div>
      
      
  
</nav>
    </div>
  )
}

export default MyBlogNav
