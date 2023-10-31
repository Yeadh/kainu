import React from "react";
import styles from "../../styles/dashboard/index.module.css";

// css
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export const TopGames = () => {
  return (
    <div className={`mt-20 relative`}>
      <h1 className={`font-bebas-neue mb-10 ${styles.headingStyle}`}>
        Top <span>games</span>
      </h1>

      <Splide
        aria-label="My Favorite Images"
        options={{
          perPage: 5,
          gap: 16,
          pagination: false,
          breakpoints: {
            1076: {
              perPage: 4,
            },
            700: {
              perPage: 3,
            },
            400: {
              perPage: 2,
            },
          },
        }}
      >
        <SplideSlide>
          <div className={`${styles.gamebox} rounded-lg py-6`}>
            <div className={`${styles.gameboxinner} mx-auto`}>
              <img
                src="/images/tournaments/gam1.png"
                className="w-full"
                alt=""
              />
              <h1 className="mt-4 font-bebas-neue">Team Spirit</h1>
              <p className="font-bebas-neue mt-2">7.9</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.gamebox} rounded-lg  py-6`}>
            <div className={`${styles.gameboxinner} mx-auto`}>
              <img
                src="/images/tournaments/gam1.png"
                className="w-full"
                alt=""
              />
              <h1 className="mt-4 font-bebas-neue">Team Spirit</h1>
              <p className="font-bebas-neue mt-2">7.9</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.gamebox} rounded-lg py-6`}>
            <div className={`${styles.gameboxinner} mx-auto`}>
              <img
                src="/images/tournaments/gam1.png"
                className="w-full"
                alt=""
              />
              <h1 className="mt-4 font-bebas-neue">Team Spirit</h1>
              <p className="font-bebas-neue mt-2">7.9</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.gamebox} rounded-lg py-6`}>
            <div className={`${styles.gameboxinner} mx-auto`}>
              <img
                src="/images/tournaments/gam1.png"
                className="w-full"
                alt=""
              />
              <h1 className="mt-4 font-bebas-neue">Team Spirit</h1>
              <p className="font-bebas-neue mt-2">7.9</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.gamebox} rounded-lg   py-6`}>
            <div className={`${styles.gameboxinner} mx-auto`}>
              <img
                src="/images/tournaments/gam1.png"
                className="w-full"
                alt=""
              />
              <h1 className="mt-4 font-bebas-neue">Team Spirit</h1>
              <p className="font-bebas-neue mt-2">7.9</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.gamebox} rounded-lg  py-6`}>
            <div className={`${styles.gameboxinner} mx-auto`}>
              <img
                src="/images/tournaments/gam1.png"
                className="w-full"
                alt=""
              />
              <h1 className="mt-4 font-bebas-neue">Team Spirit</h1>
              <p className="font-bebas-neue mt-2">7.9</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.gamebox} rounded-lg  py-6`}>
            <div className={`${styles.gameboxinner} mx-auto`}>
              <img
                src="/images/tournaments/gam1.png"
                className="w-full"
                alt=""
              />
              <h1 className="mt-4 font-bebas-neue">Team Spirit</h1>
              <p className="font-bebas-neue mt-2">7.9</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.gamebox} rounded-lg  py-6`}>
            <div className={`${styles.gameboxinner} mx-auto`}>
              <img
                src="/images/tournaments/gam1.png"
                className="w-full"
                alt=""
              />
              <h1 className="mt-4 font-bebas-neue">Team Spirit</h1>
              <p className="font-bebas-neue mt-2">7.9</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.gamebox} rounded-lg py-6`}>
            <div className={`${styles.gameboxinner} mx-auto`}>
              <img
                src="/images/tournaments/gam1.png"
                className="w-full"
                alt=""
              />
              <h1 className="mt-4 font-bebas-neue">Team Spirit</h1>
              <p className="font-bebas-neue mt-2">7.9</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.gamebox} rounded-lg  py-6`}>
            <div className={`${styles.gameboxinner} mx-auto`}>
              <img
                src="/images/tournaments/gam1.png"
                className="w-full"
                alt=""
              />
              <h1 className="mt-4 font-bebas-neue">Team Spirit</h1>
              <p className="font-bebas-neue mt-2">7.9</p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};
