// src/components/TopicDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../assets/styles/topicdetail.less";
import { educationTopicsData } from "../../data/educationTopicsData";

interface TopicContent {
  title: string;
  fullDescription: string;
  imageUrl: string;
  keyTakeaways: string[];
  whatToLookFor?: string[];
  howToProtect?: string[];
  examples?: string[];
}

const TopicDetail: React.FC = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const [topic, setTopic] = useState<TopicContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setTopic(null);

    const timer = setTimeout(() => {
      const data: TopicContent | undefined =
        educationTopicsData[topicSlug || ""];

      if (data) {
        setTopic(data);
      } else {
        setError(
          "Topic content not found. It might be under construction or invalid."
        );
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [topicSlug]);

  if (loading) {
    return (
      <section className="topic-detail-section">
        <div className="container">
          <p className="loading-message">Loading topic content...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="topic-detail-section">
        <div className="container">
          <p className="error-message">{error}</p>
          <Link
            to="/education"
            className="back-link"
          >
            &larr; Back to All Topics
          </Link>
        </div>
      </section>
    );
  }

  if (!topic) {
    return (
      <section className="topic-detail-section">
        <div className="container">
          <p className="error-message">
            Content for this topic could not be loaded.
          </p>
          <Link
            to="/education"
            className="back-link"
          >
            &larr; Back to All Topics
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="topic-detail-section">
      <div className="container">
        <Link
          to="/educational"
          className="back-to-all top-back-button"
        >
          &larr; Back to All Topics
        </Link>

        {topic.imageUrl && (
          <div className="topic-header-image">
            <img
              src={topic.imageUrl}
              alt={`${topic.title} illustration`}
            />
          </div>
        )}

        <h1 className="topic-title">{topic.title}</h1>
        <p className="topic-full-description">{topic.fullDescription}</p>

        {topic.keyTakeaways && topic.keyTakeaways.length > 0 && (
          <div className="key-takeaways-box">
            <h2 className="takeaways-heading">Key Takeaways</h2>
            <ul className="takeaways-list">
              {topic.keyTakeaways.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {topic.whatToLookFor && topic.whatToLookFor.length > 0 && (
          <div className="topic-section">
            <h2 className="section-heading">What to Look For:</h2>
            <ul className="bullet-list">
              {topic.whatToLookFor.map((item, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </div>
        )}

        {topic.howToProtect && topic.howToProtect.length > 0 && (
          <div className="topic-section how-to-protect-section">
            <h2 className="section-heading">How to Protect Yourself:</h2>
            <ul className="bullet-list">
              {topic.howToProtect.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {topic.examples && topic.examples.length > 0 && (
          <div className="topic-section">
            <h2 className="section-heading">Common Examples:</h2>
            <ul className="bullet-list">
              {topic.examples.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="navigation-links bottom-navigation">
          <Link
            to="/educational"
            className="back-to-all"
          >
            &larr; Back to All Topics
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopicDetail;
