// ArticleTemplate.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import './ArticleStyles.css';

const ArticleTemplate = ({ title, date, content }) => {
  return (
    <div className="article-content container">
      <h1>{title}</h1>
      <h4>{date}</h4>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkHtml]} children={content} />
    </div>
  );
};

export default ArticleTemplate;
