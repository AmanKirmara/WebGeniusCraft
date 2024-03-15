// NewsPage.jsx
import React from "react";
import NewsArticle from "./NewsArticle"; // Create a separate component for each news article
import styles from "./NewsPage.module.css"; // Import your CSS styles

const NewsPage = () => {
  // Define your news articles
  const newsArticles = [
    {
      title: "Introducing WebGeniusCraft's New Blog Section",
      date: "March 15, 2024",
      content: "Explore the latest insights, tips, and trends in web development and design on our newly launched blog section.",
    },
    {
      title: "WebGeniusCraft Receives Industry Recognition",
      date: "March 10, 2024",
      content: "We are proud to announce that WebGeniusCraft has been recognized as a leading web development company in the industry.",
    },
    {
      title: "Tips for Effective UI/UX Design",
      date: "March 5, 2024",
      content: "Learn valuable tips and best practices for creating exceptional user interfaces and experiences in our latest blog post.",
    },
    {
      title: "WebGeniusCraft Expands Services to Mobile App Development",
      date: "February 28, 2024",
      content: "Exciting news! We have expanded our services to include mobile app development, providing comprehensive solutions for our clients.",
    },
    {
      title: "Celebrating a Year of Success",
      date: "February 20, 2024",
      content: "As we mark our one-year anniversary, we reflect on the achievements, challenges, and growth that have defined our journey.",
    },
    {
      title: "WebGeniusCraft's Commitment to Accessibility",
      date: "February 15, 2024",
      content: "We are dedicated to creating inclusive and accessible websites. Read about our commitment to web accessibility in our latest article.",
    },
    {
      title: "The Future of Web Development: Trends to Watch",
      date: "February 10, 2024",
      content: "Stay ahead of the curve! Explore the latest trends and innovations shaping the future of web development in our insightful article.",
    },
    {
      title: "WebGeniusCraft Partners with Local Community Initiatives",
      date: "February 5, 2024",
      content: "We are excited to announce our collaboration with local community initiatives to support and contribute to meaningful causes.",
    },
    {
      title: "Navigating the World of SEO: Tips for Website Owners",
      date: "January 28, 2024",
      content: "Improve your website's search engine visibility with our practical tips for SEO success. Read the full article on our blog.",
    },
    {
      title: "WebGeniusCraft Launches Free Webinars for Developers",
      date: "January 20, 2024",
      content: "Enhance your skills! Join our free webinars covering various topics in web development. Check our events page for upcoming sessions.",
    },
    // Add more diverse news articles as needed
  ];
  
  return (
    <div className={styles.newsPage}>
      <h2>Latest News</h2>
      <div className={styles.newsList}>
        {newsArticles.map((article, index) => (
          <NewsArticle key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
