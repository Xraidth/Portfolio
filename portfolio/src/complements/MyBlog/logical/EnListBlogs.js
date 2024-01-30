import { React
//  , useEffect 
} from "react"
import Article from "../visual/Article";


const EnListBlogs = () => {

    const articles = [{
        title:'Las faces del amor',
        introduction:'Las faces del amor son importantes porque requieren un personalismo base sistentable para aquellos que tienen fe',
        body:'Cuando lo haces mejor lo haces bien',
        conclusion:'Conclucion de todos los mejores',
    }, {
      title:'Las faces del amor',
      introduction:'Las faces del amor son importantes porque requieren un personalismo base sistentable para aquellos que tienen fe',
      body:'Cuando lo haces mejor lo haces bien',
      conclusion:'Conclucion de todos los mejores',
  }
  ]

/*
    useEffect(() => {
        
        
      },[]);*/

    const articles_arm = articles.map(function(e){
    return(<Article title={e.title} introduction={e.introduction} body={e.body} conclusion = {e.conclusion}/>)
    });
    


  return (
    <div>
      
      {articles_arm}
    </div>
  )
}

export default EnListBlogs
