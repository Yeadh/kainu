import React from "react";
import styles from "../../styles/tournament-overview/index.module.css";
import Link from "next/link";

export const ListContent = () => {
  return (
    <div className={`flex items-center mb-10 ${styles.ListContentContainer}`}>
      <div className={`${styles.ListContent} flex-1 relative`}>
        <div>
          <img
            src="/images/tournament/list-logo1.png"
            className="absolute left-10 top-3"
            alt=""
          />
          <h1 className={`font-bebas-neue`}>SHURIKEN</h1>
        </div>

        <img
          src="/images/tournament/list-bg.svg"
          alt=""
          style={{ height: 83 }}
          className="absolute left-0 top-0 w-full"
        />

        <div
          className={`flex items-center absolute bottom-0 right-5 ${styles.bottomlistcard}`}
        >
          <img src="/images/tournament/avatar1.svg" alt="" />
          <img src="/images/tournament/avatar2.svg" className="ml-2" alt="" />
          <img src="/images/tournament/avatar3.svg" className="ml-2" alt="" />

          <h2 className={`flex items-center ml-3 font-satoshi-medium`}>
            <Link href="#">Watch</Link>
            <img src="/images/tournament/youtube.svg" className="ml-2" alt="" />
          </h2>

          <h2 className={`flex items-center ml-3 font-satoshi-medium`}>
            <Link href="#">Comments</Link>

            <img src="/images/tournament/message.svg" className="ml-2" alt="" />
          </h2>
        </div>
      </div>
      <div className={`${styles.contentwidht} flex flex-col items-center`}>
        <h1 className={`font-bebas-neue`}>08 : 12</h1>
        <p className={`font-satoshi-medium`}>21:00, 20TH OCTOBER 2023</p>
      </div>
      <div className={`${styles.ListContent} flex-1 relative`}>
        <div>
          <img
            src="/images/tournament/list-logo2.svg"
            className="absolute left-10 top-3"
            alt=""
          />
          <h1 className={`font-bebas-neue`}>Ninja squad</h1>
        </div>
        <img
          src="/images/tournament/list-bg.svg"
          alt=""
          className="absolute left-0 top-0 w-full"
        />
        <div
          className={`flex items-center absolute bottom-0 right-5 ${styles.bottomlistcard}`}
        >
          <img src="/images/tournament/avatar1.svg" alt="" />
          <img src="/images/tournament/avatar2.svg" className="ml-2" alt="" />
          <img src="/images/tournament/avatar3.svg" className="ml-2" alt="" />

          <h2 className={`flex items-center ml-3 font-satoshi-medium`}>
            <Link href="#">Watch</Link>
            <img src="/images/tournament/youtube.svg" className="ml-2" alt="" />
          </h2>

          <h2 className={`flex items-center ml-3 font-satoshi-medium`}>
            <Link href="#">Comments</Link>

            <img src="/images/tournament/message.svg" className="ml-2" alt="" />
          </h2>
        </div>
      </div>
    </div>
  );
};
