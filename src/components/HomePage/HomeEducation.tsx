import React from "react";
import "../../assets/styles/homeeducation.less";
import { Link } from "react-router-dom";

const educationTopics = [
  {
    icon: "🎣",
    title: "Phishing Scams",
    description:
      "Learn to identify malicious emails, messages, and websites designed to steal your sensitive information.",
    link: "/education/phishing",
  },
  {
    icon: "🎭",
    title: "Identity Theft",
    description:
      "Discover how criminals use stolen personal data and learn the critical steps to protect your identity online.",
    link: "/education/identity-theft",
  },
  {
    icon: "📈",
    title: "Investment Fraud",
    description:
      'Spot the warning signs of "get-rich-quick" schemes and fraudulent investment opportunities.',
    link: "/education/investment-fraud",
  },
];

const HomeEducation: React.FC = () => {
  return (
    <section className="education-section">
      <div className="container">
        <h2 className="section-title">
          Knowledge is Your Best{" "}
          <span style={{ color: "#5860bd" }}>Defense</span>
        </h2>
        <p className="section-subtitle">
          Scammers are always evolving their tactics. Stay one step ahead by
          understanding the most common types of online fraud.
        </p>
        <div className="cards-container">
          {educationTopics.map((topic, index) => (
            <div
              className="education-card"
              key={index}
            >
              <div className="card-icon">{topic.icon}</div>
              <h3 className="card-title">{topic.title}</h3>
              <p className="card-description">{topic.description}</p>
              <Link
                to={topic.link}
                className="card-link"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeEducation;
