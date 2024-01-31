import React from 'react'

const Article = ({title, introduction, body, conclusion, art_date}) => {

  return (
    <div className="custom-article-bg">
      <h2 className='custom-article-title'>{title}</h2>
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
      <p className='custom-article-date'> Written on: {changeDateTimeFormat(art_date)}.</p>
    </div>
  )
}

export default Article;

function changeDateTimeFormat(dateArt){
const date_article = new Date(dateArt);
const day_art = date_article.getDate();
const month_art = date_article.getMonth()+1;
const year_art = date_article.getFullYear();

const shortDate =   year_art+ '/0' + month_art + '/' + day_art;
return shortDate;
}