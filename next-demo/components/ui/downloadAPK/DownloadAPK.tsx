import { url } from "inspector";
import classes from "./DownloadAPK.module.css";
import Data from "../../../network/models/dataModels";

interface Props {
  data: Data;
}

const DownloadAPK: React.FC<Props> = (props) => {
  // console.log("DownLOadAPK --- ");
  // console.log(props.data);
  return (
    <div
      className={classes.div}
      style={{
        background: `url(${props.data.image})`,
        backgroundPosition: -160,
      }}
    >
      <div>
        <h1 className={classes.h1}>Download APK from here. </h1>
      </div>
      <div>
        <p className={classes.content}>{props.data.description} </p>
      </div>
    </div>
  );
};

export default DownloadAPK;
