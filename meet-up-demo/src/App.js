import { Route, Switch, Link } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewNeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <Favorites />
        </Route>
        <Route path="/favorites">
          <NewNeetup />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
