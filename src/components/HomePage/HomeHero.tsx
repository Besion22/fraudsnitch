import { Link } from "react-router-dom";
import "../../assets/styles/homehero.less";

const HomeHero = () => {
  return (
    <div className="home-hero">
      <h1 className="hero-title">
        Fraud Wins When You Stay Silent. <br />
        <span style={{ color: "#5860bd" }}> Report </span> it out loud!
      </h1>
      <p className="hero-description">
        Report online frauds to help stop criminals, protect others, and improve
        cybercrime prevention. <br /> According to the FBI’s Internet Crime
        Complaint Center (IC3), over 880,000 complaints were filed in 2023,
        <br /> with reported losses exceeding $12.5 billion. Yet, many cases go
        unreported, making it harder for law enforcement to act.
        <br /> Reporting strengthens investigations and helps raise public
        awareness.
      </p>
      <Link
        to="/report"
        className="hero-button"
      >
        Report Now
      </Link>
    </div>
  );
};

export default HomeHero;
