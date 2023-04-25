// Article.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleTemplate from './ArticleTemplate';
import frontMatter from 'front-matter';

const Article = () => {
  const { filename } = useParams();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/articles/${filename}`)
      .then((response) => response.text())
      .then((data) => {
        const parsedMarkdown = frontMatter(data);
        setContent(parsedMarkdown.body);
        setTitle(parsedMarkdown.attributes.title);
        setDate(parsedMarkdown.attributes.date);
      });
  }, [filename]);
  

  return <ArticleTemplate title={title} date={date} content={content} />;
};

export default Article;
