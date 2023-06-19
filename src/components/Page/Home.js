import React from "react";
import Layout from "../Layoout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Banner from "../images/banner.jpg";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1 style={{fontFamily: "cursive"}}>Biswa's Kitchen</h1>
          <p style={{ marginTop: "-30px", fontFamily: "cursive" }}>Best Food In India</p>
          <Link to="/menu">
            <Button sx={{ marginTop: "-30px", bgcolor: "ButtonShadow", fontFamily: "cursive" }}>
              ORDER NOW
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
