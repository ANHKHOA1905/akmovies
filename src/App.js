import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.9/css/boxicons.min.css";
import "./App.scss";

import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";

import AppRoute from "./config/AppRoute";

function App() {
  return (
    <div>
      <Header />
      <AppRoute />
      <Footer />
    </div>
  );
}

export default App;
