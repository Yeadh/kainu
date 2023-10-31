import React from "react";
import styles from "../../styles/tournament-overview/index.module.css";
import { ListContent } from "./ListContent";

export const List = () => {
  return (
    <div className={`${styles.teamoverview} mb-20 mt-20`}>
      <div className={`flex items-center justify-between`}>
        <ul className={`flex items-center ${styles.list}`}>
          <li className={`mr-14 font-satoshi-medium ${styles.active}`}>
            ALL MATCHES
          </li>
          <li className={`mr-14 font-satoshi-medium`}>UPCOMING</li>
          <li className={`font-satoshi-medium`}>FINISHED</li>
        </ul>

        <h2 className={`font-bebas-neue transform translate-y-8`}>List</h2>
      </div>

      <ListContent />
      <ListContent />
      <ListContent />
    </div>
  );
};
