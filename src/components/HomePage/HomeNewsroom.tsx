import React from "react";
import "../../assets/styles/homenewsroom.less";
import { Link } from "react-router-dom";

const newsArticles = [
  {
    type: "featured",
    image:
      "https://via.placeholder.com/600x300/1a1a2e/6e78ff?text=FEATURED+NEWS",
    title: "ALERT: Sophisticated AI-Powered Voice Scams on the Rise",
    description:
      "Fraudsters are now using advanced AI to clone voices, mimicking family members or officials to trick victims. Learn how to differentiate real voices from AI-generated fakes and what steps to take if you receive such a call. This new threat requires heightened awareness and immediate action.",
    link: "/news/ai-voice-scams",
    date: "June 5, 2025",
  },
  {
    type: "recent",
    image: "https://via.placeholder.com/300x150/1a1a2e/aeaeae?text=Recent+1",
    title: "New Phishing Wave Targets E-Commerce Shoppers",
    description:
      "Online shoppers are facing a surge in deceptive phishing emails designed to steal payment information during seasonal sales.",
    link: "/news/ecommerce-phishing",
    date: "June 4, 2025",
  },
  {
    type: "recent",
    image: "https://via.placeholder.com/300x150/1a1a2e/aeaeae?text=Recent+2",
    title: "Cryptocurrency Investment Scams See Record Highs",
    description:
      "The allure of quick profits is leading many into fraudulent crypto schemes. Understand the red flags before investing.",
    link: "/news/crypto-scams",
    date: "May 30, 2025",
  },
  {
    type: "recent",
    image: "https://via.placeholder.com/300x150/1a1a2e/aeaeae?text=Recent+3",
    title: "Identity Theft: Protecting Your Digital Footprint",
    description:
      "Practical tips on securing your personal data online to minimize the risk of identity theft in an increasingly digital world.",
    link: "/news/digital-footprint",
    date: "May 28, 2025",
  },
];

const HomeNewsroom: React.FC = () => {
  const featuredArticle = newsArticles.find(
    (article) => article.type === "featured"
  );
  const recentArticles = newsArticles.filter(
    (article) => article.type === "recent"
  );

  return (
    <section className="newsroom-section">
      <div className="newsroom-container">
        <h2 className="newsroom-main-title">
          Latest Alerts & <span style={{ color: "#5860bd" }}>News</span>
        </h2>
        <p className="newsroom-main-subtitle">
          Stay informed with the most critical updates and expert insights on
          emerging fraud threats.
        </p>

        {featuredArticle && (
          <div className="featured-news-card">
            <div className="featured-news-image-wrapper">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="featured-news-image"
              />
            </div>
            <div className="featured-news-content">
              <span className="featured-news-date">{featuredArticle.date}</span>
              <h3 className="featured-news-title">{featuredArticle.title}</h3>
              <p className="featured-news-description">
                {featuredArticle.description}
              </p>
              <Link
                to={featuredArticle.link}
                className="featured-news-link"
              >
                Read Full Story &rarr;
              </Link>
            </div>
          </div>
        )}

        <div className="recent-news-grid">
          {recentArticles.map((article, index) => (
            <div
              className="mini-news-card"
              key={index}
            >
              <div className="mini-news-image-wrapper">
                <img
                  src={article.image}
                  alt={article.title}
                  className="mini-news-image"
                />
              </div>
              <div className="mini-news-content">
                <span className="mini-news-date">{article.date}</span>
                <h4 className="mini-news-title">{article.title}</h4>
                <p className="mini-news-description">{article.description}</p>
                <Link
                  to={article.link}
                  className="mini-news-link"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="newsroom-cta">
          <Link
            to="/newsroom"
            className="view-all-news-button"
          >
            View All News & Updates &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsroom;
