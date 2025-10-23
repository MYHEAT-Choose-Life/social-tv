import React from "react";
import ArticleSidebar from "./ArticleSidebar";

export default function ArticleLayout({ article, sidebarPosts }) {
  return (
    <section className="article_and_rightside_column">
      {/* Left column: Article content */}
      <article className="article_detail_leftcolumn">
        <h2 className="article_title">{article.title}</h2>
        <p className="article_meta">
          By <strong>{article.author}</strong> | {article.date}
        </p>

        <figure className="image_and_smalltext">
          <img src={article.image} alt={article.title} />
          <figcaption>{article.imageCaption}</figcaption>
        </figure>

        <div className="article_content">
          {article.content.split("\n").map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        </div>
      </article>

      {/* Right column: Sidebar */}
      <aside className="right_column">
        <ArticleSidebar posts={sidebarPosts} />
      </aside>
    </section>
  );
}
