import React from "react";
import { useNavigate } from "react-router-dom";
import pokebola from "../../assets/img/pokebola.png";

const Home = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };

  return (
    <header className="header__container">
      <div className="header-red"></div>
      <div className="header-white"></div>
      <div className="header-bt">
        <button onClick={backHome}>
          <i className="fa-solid fa-house"></i>
        </button>
        {/* <div className="header-pokebola-img">
        <img src={pokebola} alt="" />
        </div> */}
      </div>
    </header>
  );
};

export default Home;
