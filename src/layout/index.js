import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "../home";
import Daily from "../daily";
import NotFound from "../notFound";
const Layout = ({ weather, setLocation, tempConv, news }) => {
  return (
    <>
      <Header setLocation={setLocation} weather={weather} tempConv={tempConv} />
      <Switch>
        <Route path={"/daily"}>
          <Daily weather={weather} tempConv={tempConv} />
        </Route>
        <Route exact path="/">
          <Home weather={weather} tempConv={tempConv} news={news} />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer weather={weather} />
    </>
  );
};

export default Layout;
