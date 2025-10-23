import React from "react";
import "./FeaturedSection.css";

export default function FeaturedSection() {
  const featuredPosts = [
    {
      category: "Economy",
      image: "/woman.png",
      title:
        '"There is no way I will be able to buy a house": What people want from Budget 2026',
      date: "12 March 2025",
    },
    {
      category: "World News",
      image: "/city.png",
      title: "European markets rally after new trade agreements signed",
      date: "10 March 2025",
    },
    {
      category: "Health",
      image: "/doctor.png",
      title: "New vaccine rollout shows 85% success rate among adults",
      date: "9 March 2025",
    },
  ];

  return (
    <div className="featured_posts_list">
      {featuredPosts.map((post, index) => (
        <div className="featured_post" key={index}>
          <h5>{post.category}</h5>

          <div className="image_post">
            <img src={post.image} alt={post.title} />
          </div>

          <div className="post_title">{post.title}</div>
          <p className="post_date">{post.date}</p>

          {index !== featuredPosts.length - 1 && (
            <div className="horizontal_line"></div>
          )}
        </div>
      ))}
    </div>
  );
}
