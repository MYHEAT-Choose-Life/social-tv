import React from "react";
import "./ArticlePage.css";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import ArticleLayout from "./ArticleLayout";

export default function ArticlePage() {
  // Mock article data (can later come from API or React Router params)
  const article = {
    category: "Environment",
    title:
      "Marine heatwaves to become more frequent off UK and Irish Coast, expert says",
    author: "James Madison",
    date: "09 October 2025",
    image: "/image.png",
    imageCaption: "small text that describes image",
    content: `
      Marine heatwaves are expected to become more frequent along the UK and Irish coasts, 
      raising concerns among environmental scientists. 
      Experts warn that marine biodiversity may be severely impacted as ocean temperatures 
      rise beyond sustainable limits.
      
      These changes could also influence fishery patterns, tourism, and coastal ecosystems, 
      prompting calls for urgent climate action.
    `,
  };

  const sidebarPosts = [
    {
      image: "/image.png",
      tag: "Exclusive",
      title: "FF withdraws candidate amid leadership controversy",
      date: "09 October 2025",
    },
    {
      image: "/woman.png",
      tag: "Exclusive",
      title: "Government outlines new climate adaptation strategy",
      date: "07 October 2025",
    },
  ];

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="article_page_container">
        <header className="section_heading">
          <h1>{article.category}</h1>
        </header>
        <ArticleLayout article={article} sidebarPosts={sidebarPosts} />
      </main>
    </>
  );
}
