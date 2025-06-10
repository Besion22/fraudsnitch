// src/components/ArticleDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../assets/styles/articledetail.less";
import {
  type NewsArticle,
  newsArticlesData,
} from "../../data/newsArticlesData";

const ArticleDetail: React.FC = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setArticle(null);

    const timer = setTimeout(() => {
      const foundArticle = newsArticlesData.find((a) => a.slug === articleSlug);

      if (foundArticle) {
        setArticle(foundArticle);
      } else {
        setError("Article not found. It might have been moved or removed.");
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [articleSlug]);

  if (loading) {
    return (
      <section className="article-detail-section">
        <div className="article-container">
          <p className="loading-message">Loading article...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="article-detail-section">
        <div className="article-container">
          <p className="error-message">{error}</p>
          <Link
            to="/newsroom"
            className="back-button"
          >
            &larr; Back to Newsroom
          </Link>
        </div>
      </section>
    );
  }

  if (!article) {
    return (
      <section className="article-detail-section">
        <div className="article-container">
          <p className="error-message">Could not load article content.</p>
          <Link
            to="/newsroom"
            className="back-button"
          >
            &larr; Back to Newsroom
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="article-detail-section">
      <div className="article-container">
        {article.image && (
          <div className="article-image-wrapper">
            <img
              src={article.image}
              alt={article.title}
              className="article-main-image"
            />
          </div>
        )}

        <h1 className="article-title">{article.title}</h1>
        <p className="article-meta">Published: {article.date}</p>

        <div
          className="article-full-content"
          dangerouslySetInnerHTML={{ __html: article.fullContent }}
        />

        <div className="article-navigation">
          <Link
            to="/newsroom"
            className="back-button"
          >
            &larr; Back to Newsroom
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
