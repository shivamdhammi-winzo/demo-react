import { Route, Switch, Link } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewNeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
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
    </div>
  );
}

export default App;
