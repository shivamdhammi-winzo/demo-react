import "../styles/globals.css";
import { AppProps, NextWebVitalsMetric } from "next/app";
import Drawer from "../components/layout/drawer";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { AnyAaaaRecord } from "dns";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log("This is the metric =>");
  console.log(metric);
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Drawer>
        <div>
          <Component {...pageProps} />
        </div>
      </Drawer>
    </Provider>
  );
}

export default App;
