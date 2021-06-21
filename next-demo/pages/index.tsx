import DownloadAPK from "../components/ui/downloadAPK/DownloadAPK";
import Data from "../network/models/dataModels";
import {
  GetServerSideProps,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import PopularGames from "../components/ui/popularGames/PopularGames";
import { useRouter } from "next/dist/client/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import dataSlice from "../redux/slices/dataSlice";
import getData from "../network/getData";

interface Props {
  allData: { [key: string]: Data };
}

const index: React.FC<Props> = (props) => {
  const asPath = useRouter().asPath;
  const pathname = useRouter().pathname;
  console.log("pathname  " + pathname);
  console.log("asPath  " + asPath);

  // console.log(props.allData);
  const dispatch = useDispatch();
  dispatch(dataSlice.actions.addData(props.allData));

  return (
    <div>
      <h1>The Home page.</h1>
      <DownloadAPK data={props.allData["home"]} />
      <PopularGames data={props.allData["home"]} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let AllData: { [key: string]: Data } = {};
  console.log("getStaticprops");

  AllData = await getData();

  return {
    props: {
      allData: AllData,
    },
  };
};

export default index;
