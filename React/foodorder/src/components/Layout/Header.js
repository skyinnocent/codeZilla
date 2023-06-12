import { Fragment } from "react";
import img from "./../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <Fragment>
      <header>
        <nav className={classes.nav}>
          <ul className={classes.ul}>
            <li>React Meals</li>
            <li>
              <HeaderCartButton />
            </li>
          </ul>
        </nav>
        <div className={classes.img}>
          <img src={img} alt="a table full of food" />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
