import React from "react";

const Article = ({ title, children }) => {
  return (
    <article>
      <h1 className="title-2">{title}</h1>
      <p className="text">{children}</p>
    </article>
  );
};

export default Article;
