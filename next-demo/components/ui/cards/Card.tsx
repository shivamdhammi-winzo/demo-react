import classes from "./Card.module.css";
import Data from "../../../network/models/dataModels";

interface Props {
  data: Data;
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={props.data.popular} alt={props.data.name} />
      </div>
      <div className={classes.content}>
        <h3>Mine Craft</h3>
      </div>
    </div>
  );
};

export default Card;
