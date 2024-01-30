import React from 'react'

const Article = ({title, introduction, body, conclusion, art_date}) => {
  return (
    <div>
      <h2 className='custom-article-title '>{title}</h2>
      <h5 className='custom-article-intro'>Introduction</h5>
      <p>
      <em>{introduction}</em> 
      </p>
      <p  className='custom-article-body'>
      {body}
      </p>
      <h5 className='custom-article-conclu'>Conclusion</h5>
      <p>
      {conclusion}
      </p>
      <br></br>
      <p className='custom-article-date'> Written on: {art_date}.</p>
    </div>
  )
}

export default Article;
