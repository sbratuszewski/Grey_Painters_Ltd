import React from "react";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import CallT0Action from "../components/CallT0Action";
import Inspector from "../components/Inspector";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeServices />
      <Brands />
      <CallT0Action />
      <Inspector />
      <Clients />
      <Testimonials />
    </div>
  );
};

export default Home;
