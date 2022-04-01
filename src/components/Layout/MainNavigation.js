import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
      <header className={classes.header}>
        <div className={classes.logo}>Navigation Bar</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Pages</Link>
            </li>
            <li>
              <Link to="/new-page">New Pages</Link>
            </li>
            <li>
              <Link to="/favorite-page">Favorite pages</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}
export default MainNavigation;
