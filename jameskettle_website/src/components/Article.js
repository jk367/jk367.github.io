import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleTemplate from './ArticleTemplate';

const Article = () => {
  const { filename } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/articles/${filename}`)
      .then((response) => response.text())
      .then((data) => setContent(data));
  }, [filename]);

  return <ArticleTemplate content={content} />;
};

export default Article;
