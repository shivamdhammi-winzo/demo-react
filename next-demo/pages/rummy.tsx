import DownloadAPK from "../components/ui/downloadAPK/DownloadAPK";
import Data from "../network/models/dataModels";
import { GetStaticProps, GetStaticPropsContext } from "next";
import PopularGames from "../components/ui/popularGames/PopularGames";
import { useRouter } from "next/dist/client/router";
import { useSelector, useDispatch } from "react-redux";
import stateData from "../network/models/stateData";

const rummy: React.FC = () => {
  const pathname = useRouter().pathname;
  const route = pathname.substr(1);
  const state = useSelector((state: stateData) => state);
  const data = state.dataReducer.data;
  // console.log("rummy data ----- ");
  // console.log(data[route]);
  return (
    <div>
      <p>This is Rummy page.</p>;
      <DownloadAPK data={data[route]} />
      <PopularGames data={data[route]} />
    </div>
  );
};

export default rummy;
