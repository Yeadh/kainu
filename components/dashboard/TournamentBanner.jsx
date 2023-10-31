import Link from "next/link";
import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const TournamentBanner = () => {
  return (
    <div
      className={`${styles.TournamentBanner} flex items-center justify-center flex-col`}
    >
      <h1 className={`${styles.TournamentBannerHeading} font-bebas-neue`}>
        World Championship
      </h1>
      <p
        className={`${styles.TournamentBannerPara} mb-6 mt-4 py-4 px-3 font-satoshi-medium`}
      >
        Live coverage of all tournaments
      </p>
      <Link
        href="#"
        className={`h-10 inline-flex items-center justify-center px-5 ${styles.bannerbtn}`}
      >
        Browser Stream
      </Link>
    </div>
  );
};
