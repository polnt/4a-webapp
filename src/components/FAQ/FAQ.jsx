import React, { useState } from "react";

import { faqData } from "./faqData";

import { IoIosArrowForward as RightArrow } from "react-icons/io";
import { IoIosArrowDown as DownArrow } from "react-icons/io";
import { FaBalanceScale as JusticeBalance } from "react-icons/fa";
import { BsExclamationTriangle as ExclamationTriangle } from "react-icons/bs";

const FAQ = () => {
  const [showQuote, setShowQuote] = useState({});

  const handleClick = (event) => {
    showQuote === +event.currentTarget.value
      ? setShowQuote({})
      : setShowQuote(+event.currentTarget.value);
  };

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
            <div
              style={{
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                borderRadius: "0.3em",
                marginBottom: "5px",
              }}
            >
              <button
                type="button"
                value={item.id}
                onClick={handleClick}
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
                {showQuote === item.id ? <DownArrow /> : <RightArrow />}
                <span className="faq_quote" style={{ fontWeight: "bold" }}>
                  {item.quote}
                </span>
              </button>
              {showQuote === item.id && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "30px",
                  }}
                >
                  {item.law && (
                    <div style={{ display: "flex" }}>
                      <JusticeBalance
                        size={60}
                        style={{
                          float: "left",
                          marginRight: "10px",
                          minWidth: "60px",
                        }}
                      />
                      <p>{item.law}</p>
                    </div>
                  )}
                  {item.caution && (
                    <div style={{ display: "flex" }}>
                      <ExclamationTriangle
                        size={60}
                        style={{
                          float: "left",
                          marginRight: "10px",
                          minWidth: "60px",
                        }}
                      />
                      <p>{item?.caution}</p>
                    </div>
                  )}
                  {item.content.map((element) => (
                    <>
                      {typeof element === "string" ? (
                        <p>{element}</p>
                      ) : (
                        <div>
                          <p>{element.title}</p>
                          <ul
                            style={{
                              listStyleType: "disc",
                              marginLeft: "30px",
                            }}
                          >
                            {element.list?.map((item) => (
                              <li>{item}</li>
                            ))}
                          </ul>
                          <p>{element.content}</p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </article>
    </div>
  );
};

export default FAQ;
