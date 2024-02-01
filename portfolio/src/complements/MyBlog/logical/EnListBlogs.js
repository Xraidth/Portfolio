import { React, useEffect, useState} from "react"
import ListArticles from '../visual/ListArticles.js'


const EnListBlogs = ({blogs_filter}) => {

  const articles = 
  [
    {
      "title": "Avances en Inteligencia Artificial",
      "introduction": "En este artículo, exploraremos los últimos avances en inteligencia artificial (IA). Desde algoritmos de aprendizaje profundo hasta aplicaciones prácticas en diversas industrias, analizaremos cómo la IA está transformando nuestro mundo.",
      "body": "Desde la medicina hasta la conducción autónoma, la IA ha demostrado ser una fuerza impulsora del progreso. Examinaremos casos de estudio y discutiremos los desafíos éticos que surgen con el rápido desarrollo de esta tecnología.",
      "conclusion": "A medida que la IA continúa evolucionando, es crucial mantener un diálogo abierto sobre sus implicaciones. Este artículo busca proporcionar una visión general de la IA y fomentar una comprensión más profunda de su impacto en nuestra sociedad.",
      "art_date": "2024-03-15T08:30:00.000Z",
      
    },
    {
      "title": "Innovación en los Negocios del Futuro",
      "introduction": "Exploraremos las tendencias emergentes que están dando forma a la innovación empresarial en la era digital. Desde la inteligencia artificial hasta la blockchain, analizaremos cómo las empresas están adoptando nuevas tecnologías para mantenerse competitivas.",
      "body": "Con ejemplos de empresas líderes en la industria, examinaremos estrategias innovadoras y casos de éxito. También abordaremos los desafíos que las empresas pueden enfrentar al implementar cambios disruptivos en sus modelos de negocio.",
      "conclusion": "La capacidad de adaptación y la disposición para abrazar la innovación son cruciales para el éxito empresarial en el futuro. Este artículo busca inspirar a los líderes empresariales a explorar nuevas oportunidades y afrontar los desafíos con creatividad.",
      "art_date": "2024-02-25T15:45:00.000Z"
    },
    {
      
      "title": "Mente Sana, Cuerpo Sano",
      "introduction": "Descubre la conexión entre la salud mental y física en este artículo dedicado al bienestar integral. Exploraremos prácticas que promueven la armonía entre cuerpo y mente para lograr una vida más plena.",
      "body": "Desde técnicas de meditación hasta consejos de alimentación saludable, abordaremos cómo pequeños cambios en el estilo de vida pueden tener un impacto significativo en tu bienestar general. Además, examinaremos la importancia del equilibrio entre trabajo y descanso.",
      "conclusion": "La clave para una vida plena radica en cuidar tanto de tu salud mental como física. Esperamos que este artículo inspire a adoptar hábitos que fomenten un estado óptimo de bienestar.",
      "art_date": "2024-02-20T12:00:00.000Z"
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
      
      if(data){
      setData_art(data);
      }
    } catch (error) {
      console.error("Error when trying to connect to the server (404)");
    }
  }

  useEffect(() => {
    getBlogData();
    },[]);
    
  return (
    <div className="myblog_body">
    <ListArticles data_art={data_art} blogs_filter={blogs_filter}/>
    </div>
  )
}

export default EnListBlogs



