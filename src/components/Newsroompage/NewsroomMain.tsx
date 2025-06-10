// src/components/NewsroomMain.tsx
import { Link } from "react-router-dom";
import "../../assets/styles/newsroommain.less";
import { newsArticlesData } from "../../data/newsArticlesData";

const NewsroomMain: React.FC = () => {
  const featuredArticle = newsArticlesData.find((a) => a.type === "featured");
  const secondaryFeaturedArticles = newsArticlesData
    .filter((article) => article.type === "carousel")
    .slice(0, 2);
  const mainGridArticles = newsArticlesData.filter(
    (article) => article.type === "recent" || article.type === "older"
  );

  return (
    <section className="newsroom-main-section">
      <div className="newsroom-main-container">
        <h2 className="section-title">Recent posts</h2>
        <div className="main-content-grid">
          {featuredArticle && (
            <Link
              to={`/newsroom/${featuredArticle.slug}`}
              className="featured-lg-card"
            >
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="featured-lg-image"
              />
              <div className="featured-lg-content">
                <h3 className="featured-lg-title">{featuredArticle.title}</h3>
                <div className="featured-lg-meta">
                  <span className="featured-lg-author">
                    {featuredArticle.description.split(".")[0]}.
                  </span>{" "}
                  <span className="featured-lg-percentage">
                    <span className="circle-dot"></span>
                    99.7%
                  </span>
                </div>
              </div>
            </Link>
          )}

          <div className="secondary-featured-cards">
            {secondaryFeaturedArticles.map((article) => (
              <Link
                to={`/newsroom/${article.slug}`}
                className="featured-sm-card"
                key={article.slug}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="featured-sm-image"
                />
                <div className="featured-sm-content">
                  <h4 className="featured-sm-title">{article.title}</h4>
                  <div className="featured-sm-meta">
                    <span className="featured-sm-author">
                      {article.description.split(".")[0]}.
                    </span>
                    <span className="featured-sm-percentage">
                      <span className="circle-dot"></span>
                      99.7%
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="articles-grid">
          {mainGridArticles.map((article) => (
            <Link
              to={`/newsroom/${article.slug}`}
              className="article-card"
              key={article.slug}
            >
              <img
                src={article.image}
                alt={article.title}
                className="article-image"
              />
              <div className="article-content">
                <h4 className="article-title">{article.title}</h4>
                <div className="article-meta">
                  <span className="article-author">
                    {article.description.split(".")[0]}.
                  </span>
                  <span className="article-percentage">
                    <span className="circle-dot"></span>
                    99.1%
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsroomMain;
