import React from 'react'

const Article = ({title, introduction, body, conclusion}) => {
  return (
    <div>
      <h2>{title}</h2>
      <h5>Introduction</h5>
      <p>
      <em>{introduction}</em> 
      </p>
      <p>
      {body}
      </p>
      <h5>Conclusion</h5>
      <p>
      {conclusion}
      </p>
      <br></br>
    </div>
  )
}

export default Article;
