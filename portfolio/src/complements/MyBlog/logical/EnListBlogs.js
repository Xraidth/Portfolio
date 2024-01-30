import { React
//  , useEffect 
} from "react"
import Article from "../visual/Article";


const EnListBlogs = () => {

    const articles = [{
        title:'Love Phases',
        introduction:'Las faces del amor son importantes porque requieren un personalismo base sistentable para aquellos que tienen fe',
        body:'lorem',
        conclusion:'Conclucion de todos los mejores',
        art_date:'30/01/2024'
    }
  ]

/*
    useEffect(() => {
        
        
      },[]);*/

    const articles_arm = articles.map(function(e){
    return(<Article title={e.title} introduction={e.introduction} body={e.body} conclusion = {e.conclusion} art_date={e.art_date}/>)
    });
    


  return (
    <div>
      
      {articles_arm}
    </div>
  )
}

export default EnListBlogs
