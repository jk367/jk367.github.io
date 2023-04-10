import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const ArticleTemplate = ({ content }) => {
  return (
    <div className="article-content container">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkHtml]} children={content} />
    </div>
  );
};

export default ArticleTemplate;
