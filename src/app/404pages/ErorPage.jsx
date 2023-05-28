import Footer from "../../Components/pages/home/footer/Footer";
import "./eror.scss";
import { NavLink, Link, Outlet } from "react-router-dom";


function ErorPage() {
  return (
    <div className="error_page">
      <div className="titles">
        <h1>404</h1>
        <p>Page Not found</p>
        <div className="lets">
          <Link className="error_home" to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErorPage;
