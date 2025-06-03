import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/report">Report Fraud</Link>
        </li>
        <li>
          <Link to="/educational">Learn About Fraud</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
