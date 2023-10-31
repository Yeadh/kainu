import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import { HomeBannerNew } from "./HomeBannerNew";
import { HomeBasicInfo } from "./HomeBasicInfo";
import { BestStreamers } from "./BestStreamers";
import { ExploreStreams } from "./ExploreStreams";
import { TopRated } from "./TopRated";
import { LatestAnalyticsNew } from "./LatestAnalyticsNew";

export const HomePageNew = () => {
  return (
    <div className={`flex-1 p-10 HomePageNew ${styles.homepagedashbaord}`}>
      <HomeBannerNew />
      <HomeBasicInfo />
      <BestStreamers />
      <ExploreStreams />
      <TopRated />
      <LatestAnalyticsNew />
    </div>
  );
};
