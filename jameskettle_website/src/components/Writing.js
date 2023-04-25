import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Writing = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/articles/metadata.json`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="container">
      <div>
        <h1>Articles and Writings</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.filename}>
              <Link className to={`/Writing/${article.filename}`}>
                <span className="article-list-item">{article.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Writing;
