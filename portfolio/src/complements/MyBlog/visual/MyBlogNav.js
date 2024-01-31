
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
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
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
