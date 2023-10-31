import React from "react";
import { TournamentBanner } from "./TournamentBanner";
import { MatchOnline } from "./MatchOnline";
import { TopGames } from "./TopGames";
import { PastTournaments } from "./PastTournaments";
import { TournamentRight } from "./TournamentRight";
import styles from "../../styles/dashboard/index.module.css";
export const TournamentPage = () => {
  return (
    <div className={`flex-1 p-10 TournamentPage ${styles.TournamentPage}`}>
      <TournamentBanner />
      <div className={`flex mt-20 gap-10 ${styles.TournamentPageInnerWrapper}`}>
        <div className="flex-1">
          <MatchOnline />
          <TopGames />
          <PastTournaments />
        </div>
        <TournamentRight />
      </div>
    </div>
  );
};
