import Card from "../cards/Card";
import classes from "./PopularGames.module.css";
import Data from "../../../network/models/dataModels";

interface Props {
  data: Data;
}

const PopularGames: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        <h1 className={classes.title}>Popular Games</h1>
      </div>
      <div className={classes.container}>
        <Card data={props.data} />
        <Card data={props.data} />
        <Card data={props.data} />
      </div>
      <div className={classes.container}>
        <Card data={props.data} />
        <Card data={props.data} />
        <Card data={props.data} />
      </div>
    </div>
  );
};

export default PopularGames;
