import React, { useEffect, useState } from "react";

import { db } from "../../firebase";

import Carousel from "react-bootstrap/Carousel";
import { IoIosArrowForward as NextIcon } from "react-icons/io";
import { IoIosArrowBack as PrevIcon } from "react-icons/io";

const FrontPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedNews = await db().collection("news").limit(5).get();
      let carouselNews = [];
      fetchedNews.forEach((doc) => {
        carouselNews.push(doc.data());
      });
      setItems(carouselNews);
    })();
  }, []);

  return (
    <div className="custom_carousel">
      <Carousel
        prevIcon={<PrevIcon style={{ fontSize: "30px", color: "black" }} />}
        nextIcon={<NextIcon style={{ fontSize: "30px", color: "black" }} />}
      >
        {items.map((item) => (
          <Carousel.Item
            style={{
              width: "100%",
              border: "1px solid red",
              height: "300px",
              color: "red",
            }}
          >
            <Carousel.Caption
              style={{ border: "1px solid green", color: "green" }}
            >
              <h3>{item.title}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FrontPage;
