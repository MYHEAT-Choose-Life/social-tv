import React from "react";

export default function ArticleSidebar({ posts }) {
  return (
    <>
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <div className="post_image">
            <img src={post.image} alt={post.title} />
            {post.tag && <div className="exclusive_tag">{post.tag}</div>}
          </div>
          <h3 className="post_title">{post.title}</h3>
          <p className="post_date">{post.date}</p>
          {index !== posts.length - 1 && (
            <div className="horizontal_line"></div>
          )}
        </div>
      ))}
    </>
  );
}
