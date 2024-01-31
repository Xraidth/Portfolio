import { React, useEffect, useState} from "react"
import Article from "../visual/Article";


const EnListBlogs = () => {

  const articles = 
  [
  {
      title:'Love Phases',
      introduction:'Las faces del amor son importantes porque requieren un personalismo base sistentable para aquellos que tienen fe',
      body:'lorem',
      conclusion:'Conclucion de todos los mejores',
      art_date:'30/01/2024'
  }
  
];


  const [data_art, setData_art] = useState(articles);
  async function getBlogData() {

    try {
      const response = await fetch('http://localhost:3002/blog/getAll', {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      console.log('Success:', data);
      if(data){
      setData_art(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  

  useEffect(() => {
    getBlogData();
      
       
    },[data_art]);
    

  

    const articles_arm = data_art.map(function(e, index){
    return(<Article key={index} title={e.title} introduction={e.introduction} body={e.body} conclusion = {e.conclusion} art_date={e.art_date}/>)
    });
    


  return (
    <div className="custom-article-pr-bg d-flex flex-column align-items-center justify-content-evenly bg-primary">
      {articles_arm}
    </div>
  )
}

export default EnListBlogs

