import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export const MainNavigation: React.FC = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};
