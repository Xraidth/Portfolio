
import {React} from 'react'
import Article from "../visual/Article.js";

const ListArticles = ({data_art,blogs_filter}) => {

  
  let blog_data =  blogs_filter ? data_art.filter((x)=>x.title.toLowerCase().includes(`${blogs_filter.toLowerCase()}`)) : data_art;

  if(blog_data){
    blog_data = blog_data.sort((a, b) => new Date(b.art_date) - new Date(a.art_date));
  }
 
  const articles_arm = blog_data.map(function(e, index){
        return(<Article key={index} title={e.title} introduction={e.introduction} body={e.body} conclusion = {e.conclusion} art_date={e.art_date}/>)
        });


  return (
    <div className="custom-article-pr-bg d-flex flex-column align-items-center justify-content-between ">
      
      {articles_arm}
    </div>
  )
}

export default ListArticles
