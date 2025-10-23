import React from "react";
import "./TrendingSection.css";

export default function TrendingSection() {
  // Temporary data (you can replace this later with API data)
  const trendingPosts = [
    {
      category: "Economy",
      image: "/woman.png",
      title:
        '"There is no way I will be able to buy a house": What people want from Budget 2026',
      date: "12 March 2025",
    },
    {
      category: "Politics",
      image: "/keller.png",
      title: "Opposition demands transparency over public spending reforms",
      date: "10 March 2025",
    },
    {
      category: "Technology",
      image: "/tech.png",
      title: "AI and automation expected to reshape Ireland’s workforce by 2030",
      date: "9 March 2025",
    },
  ];

  return (
    <div className="trending_posts_list">
      {trendingPosts.map((post, index) => (
        <div className="trending_post" key={index}>
          <h5>{post.category}</h5>

          <div className="image_post">
            <img src={post.image} alt={post.category} />
          </div>

          <div className="post_title">{post.title}</div>
          <p className="post_date">{post.date}</p>

          {index !== trendingPosts.length - 1 && (
            <div className="horizontal_line"></div>
          )}
        </div>
      ))}
    </div>
  );
}
