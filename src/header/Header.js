import Navbar from "./Navbar";

const Header = ({ weather, setLocation, tempConv }) => {
  return (
    <header>
      <Navbar weather={weather} setLocation={setLocation} tempConv={tempConv} />
    </header>
  );
};

export default Header;
