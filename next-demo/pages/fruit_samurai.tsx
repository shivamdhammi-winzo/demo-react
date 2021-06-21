import DownloadAPK from "../components/ui/downloadAPK/DownloadAPK";
import Data from "../network/models/dataModels";
import { GetStaticProps, GetStaticPropsContext } from "next";
import PopularGames from "../components/ui/popularGames/PopularGames";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";
import stateData from "../network/models/stateData";

const fruit_samurai: React.FC = () => {
  const pathname = useRouter().pathname;
  const route = pathname.substr(1);
  const state = useSelector((state: stateData) => state);
  const data = state.dataReducer.data;
  // console.log("fruit samurai ----- ");
  // console.log(data[route]);
  return (
    <div>
      <p>This is fruit samurai page.</p>;
      <DownloadAPK data={data[route]} />
      <PopularGames data={data[route]} />
    </div>
  );
};

export default fruit_samurai;
