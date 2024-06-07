import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import { mensPantsPage1 } from "../Data/pants/men_page1";
import { lengha_page1 } from "../Data/Women/LenghaCholi";

const Homepage = () => {
  return (
    <div>
      <HomeCarousel images={homeCarouselData} />
      <div className=" py-10 space-y-10 flex flex-col justify-center px-5  lg:px-10 ">
        <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
        <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} />
        <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
        <HomeProductSection data={sareePage1} section={"Saree"} />
        <HomeProductSection data={dressPage1} section={"Dress"} />
        <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
      </div>
    </div>
  );
};

export default Homepage;
