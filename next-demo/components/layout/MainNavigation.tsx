import Link from "next/link";
import classes from "./MainNavigation.module.css";

const MainNavigation: React.FC = (props) => {
  return (
    <header className={classes.header}>
      {/* <div className={classes.logo}>React Meetups</div> */}
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/rummy">Rummy</Link>
          </li>
          <li>
            <Link href="/pool">Pool</Link>
          </li>
          <li>
            <Link href="/fruit_samurai">Fruit Samurai</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
