import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Writing = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/articles/metadata.json')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="container">
    <div className="article-list">
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.filename}>
            <Link className="article-link" to={`/Writing/${article.filename}`}>
               {article.title} - {article.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
   );
};

export default Writing;
