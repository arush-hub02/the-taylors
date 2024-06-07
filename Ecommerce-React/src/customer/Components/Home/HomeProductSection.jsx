import AliceCarousel from "react-alice-carousel";
import HomeProductCard from "./HomeProductCard";
import "./HomeProductSection.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const HomeProductSection = ({ section, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const responsive = {
    344: { items: 1, itemsFit: "contain" },
    380: { items: 1.15, itemsFit: "contain" },
    420: { items: 1.25, itemsFit: "contain" },
    540: { items: 1.7, itemsFit: "contain" },
    720: { items: 2.4, itemsFit: "contain" },
    800: { items: 2.7, itemsFit: "contain" },
    900: { items: 3.1, itemsFit: "contain" },
    1024: { items: 3.4, itemsFit: "contain" },
    1920: { items: 6.8, itemsFit: "contain" },
    1280: { items: 5.2, itemsFit: "contain" },
  };
  const items = data?.slice(0, 10).map((item) => (
    <div className="">

      <HomeProductCard product={item} />
    </div>
  ));

  // const slideInFromRight = (t) => {
  //   return `translateX(${100 - t * 100}%)`;
  // };

  return (

//custom Button 

    // <div className="relative px-4 sm:px-6 lg:px-8 ">
    //   <h2 className="text-2xl font-extrabold text-gray-800 py-5">{section}</h2>
    //   <div className="relative border p-5">
    //     <AliceCarousel
    //       disableButtonsControls
    //       disableDotsControls
    //       mouseTracking
    //       items={items}
    //       activeIndex={activeIndex}
    //       responsive={responsive}
    //       onSlideChanged={syncActiveIndex}
    //       animationType="fadeout"
    //       animationDuration={2000}
    //     />
    //     {activeIndex !== items.length - 5 && (
    //       <Button
    //         onClick={slideNext}
    //         variant="contained"
    //         className="z-50 bg-[]"
    //         sx={{
    //           position: "absolute",
    //           top: "8rem",
    //           right: "0rem",
    //           transform: "translateX(50%) rotate(90deg)",
    //         }}
    //         color="white"
    //         aria-label="next"
    //       >
    //         <ArrowForwardIosIcon
    //           className=""
    //           sx={{ transform: "rotate(-90deg)" }}
    //         />
    //       </Button>
    //     )}

    //     {activeIndex !== 0 && (
    //       <Button
    //         onClick={slidePrev}
    //         variant="contained"
    //         className="z-50 bg-[]"
    //         color="white"
    //         sx={{
    //           position: "absolute",
    //           top: "8rem",
    //           left: "0rem",
    //           transform: "translateX(-50%)  rotate(90deg)",
    //         }}
    //         aria-label="next"
    //       >
    //         <ArrowForwardIosIcon
    //           className=""
    //           sx={{ transform: " rotate(90deg)" }}
    //         />
    //       </Button>
    //     )}
    //   </div>
    // </div>


    <div className="">
      <h2 className="text-2xl font-extrabold text-gray-800 pt-2 pb-4">
        {section}
      </h2>
      <div className="relative border pt-4">
        <AliceCarousel
          items={items}
          //   disableButtonsControls
          //   autoPlay
          //   autoPlayInterval={1000}
          //   infinite
          mouseTracking
          responsive={responsive}
          disableDotsControls
          //   onSlideChange={syncActiveIndex}
          //   activeIndex={activeIndex}
          animationType="fadeout"
          animationDuration={1000}
        />
        {/* {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            color="primary" // Change to the appropriate color
            style={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              zIndex: 50,
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon sx={{ transform: "rotate(-90deg)" }} />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            color="primary" // Change to the appropriate color
            style={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              zIndex: 50,
            }}
            aria-label="prev"
          >
            <ArrowForwardIosIcon sx={{ transform: "rotate(90deg)" }} />
          </Button> )} */}
      </div>
    </div>
  );
};

export default HomeProductSection;
