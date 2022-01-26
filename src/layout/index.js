import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "../home";
import Daily from "../daily";
import NotFound from "../notFound";
import Today from "../today";
const Layout = ({ weather, setLocation, tempConv, news }) => {
  return (
    <>
      <Header setLocation={setLocation} weather={weather} tempConv={tempConv} />
      <Routes>
        <Route
          path="/daily"
          element={<Daily weather={weather} tempConv={tempConv} />}
        />
        <Route
          path="/today"
          element={<Today weather={weather} tempConv={tempConv} news={news} />}
        />
        <Route
          path="/"
          element={<Home weather={weather} tempConv={tempConv} news={news} />}
        />
        <Route element={<NotFound />} />
      </Routes>
      <Footer weather={weather} />
    </>
  );
};

export default Layout;
