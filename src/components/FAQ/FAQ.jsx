import React from "react";

import { faqData } from "./faqData";

import { IoIosArrowForward as RightArrow } from "react-icons/io";
import { IoIosArrowDown as DownArrow } from "react-icons/io";

const FAQ = () => {
  return (
    <div className="container_page cover_page">
      <article className="content_page">
        <h1>QUESTIONS FRÉQUENTES</h1>
        <section>
          <p>
            <span style={{ fontWeight: "bold" }}>AVERTISSEMENT :</span> La loi
            française est pleine de subtilité, chaque cas peut être particulier.
            Nous vous conseillons de vous rapprocher d’un professionnel afin de
            mieux comprendre les calculs effectués sur le bulletin qui vous est
            remis.
          </p>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {faqData.map((item) => (
            <button
              style={{
                display: "flex",
                justifyContent: "flex-start",
                background: "none",
                marginBottom: "2px",
                alignItems: "center",
                border: "none",
                padding: "10px 5px 10px 5px",
              }}
            >
              <RightArrow />
              <span>{item.quote}</span>
            </button>
          ))}
        </section>
      </article>
    </div>
  );
};

export default FAQ;
