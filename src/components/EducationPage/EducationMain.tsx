import React from "react";
import "../../assets/styles/educationmain.less";
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
  {
    icon: "💻",
    title: "Malware & Ransomware",
    description:
      "Understand how malicious software can infect your devices and what ransomware does. Learn prevention techniques.",
    link: "/education/malware-ransomware",
  },
  {
    icon: "💳",
    title: "Credit Card Fraud",
    description:
      "Protect yourself from unauthorized credit card use. Discover how card details are stolen and what steps to take.",
    link: "/education/credit-card-fraud",
  },
  {
    icon: "🎁",
    title: "Online Shopping Scams",
    description:
      "Be safe when shopping online. Learn to recognize fake websites, misleading advertisements, and common scam tactics.",
    link: "/education/online-shopping-scams",
  },
  {
    icon: "💞",
    title: "Romance Scams",
    description:
      "Understand how scammers exploit emotional connections for financial gain. Identify red flags in online relationships.",
    link: "/education/romance-scams",
  },
  {
    icon: "📞",
    title: "Tech Support Scams",
    description:
      "Learn to spot deceptive calls or pop-ups pretending to be legitimate tech support. Avoid giving remote access.",
    link: "/education/tech-support-scams",
  },
];

const EducationPage: React.FC = () => {
  return (
    <section className="education-page-section">
      <div className="container">
        <h1 className="page-title">
          Empower Yourself:{" "}
          <span style={{ color: "#5860bd" }}>Fraud Education</span>
        </h1>
        <p className="page-subtitle">
          In an increasingly digital world, staying informed is your strongest
          defense against evolving online threats. Explore various types of
          fraud, understand how they work, and learn actionable steps to protect
          yourself and your loved ones.
        </p>

        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search education topics..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>

        <div className="cards-grid">
          {educationTopics.map((topic, index) => (
            <div
              className="education-card"
              key={index}
            >
              <div className="card-icon">{topic.icon}</div>
              <h2 className="card-title">{topic.title}</h2>
              <p className="card-description">{topic.description}</p>
              {/* The 'Link' component uses the 'link' property from  topic data */}
              <Link
                to={topic.link}
                className="card-link"
              >
                Deep Dive &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div className="call-to-action">
          <h3>Can't find what you're looking for?</h3>
          <p>
            We're constantly updating our resources. If you have a specific
            concern or question, don't hesitate to reach out.
          </p>
          <Link
            to="/contact"
            className="contact-link"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
