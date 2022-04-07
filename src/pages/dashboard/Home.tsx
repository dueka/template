import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>Home | Noor Coop</Helmet>
      <div className="user-dashboard">
        <div className="coming-soon">
          <h1>Coming soon</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
