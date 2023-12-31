import React from "react";
import style from "../../styles/tournament-overview/index.module.css";
export const TournamentAbout = () => {
  return (
    <div className={`${style.TournamentAbout}`}>
      <img
        src="/images/tournament/tournament-about.svg"
        className="mt-16"
        alt=""
      />
      <div className={`grid grid-cols-2 mt-10 gap-10 ${style.gridtournament}`}>
        <div className={`${style.TournamentAboutPara}`}>
          <p className={`font-satoshi-medium`}>
            Prepare to engage in a heart-pounding, immersive combat experience
            as Call of Duty: Vanguard takes you back to the intense and
            harrowing battles of World War II. Developed by Sledgehammer Games
            and published by Activision, this highly anticipated installment of
            the acclaimed Call of Duty franchise delivers a gripping
            narrative-driven campaign, adrenaline-fueled multiplayer action,
            gameplay options.
          </p>
          <p className={`font-satoshi-medium mt-10`}>
            Set against the backdrop of a global conflict, Call of Duty:
            Vanguard thrusts players into the boots of a diverse group of
            multinational soldiers from different theaters of war. Experience
            the untold stories of these brave men and women, as they form the
            first-ever Special Forces unit known as Task Force One. From the
            war-torn streets of Stalingrad to the sun-soaked beaches of
            Normandy, you'll witness the pivotal moments that shaped the
            outcome.
          </p>
        </div>

        <div className={`${style.TournamentAboutSpecial}`}>
          <h1 className={`mb-6`}>Special Feature</h1>
          <div>
            <div className="p-5 flex items-center">
              <h1 className="w-12 h-12 rounded mr-4 font-bebas-neue flex items-center justify-center">
                01
              </h1>
              <p className={`font-satoshi-regular`}>
                Call of Duty stands out with its realistic graphics, immersive
                gameplay, and attention to detail in recreating weapons,
                vehicles, and historical settings, delivering an authentic
                military experience.
              </p>
            </div>
            <div className="p-5 flex items-center">
              <h1 className="w-12 h-12 rounded mr-4 font-bebas-neue flex items-center justify-center">
                02
              </h1>
              <p className={`font-satoshi-regular`}>
                The game offers robust multiplayer modes with diverse gameplay
                options, customizable loadouts, and a progression system that
                keeps players engaged and competitive.
              </p>
            </div>
            <div className="p-5 flex items-center">
              <h1 className="w-12 h-12 rounded mr-4 font-bebas-neue flex items-center justify-center">
                03
              </h1>
              <p className={`font-satoshi-regular`}>
                Call of Duty's engaging single-player campaigns feature
                compelling storylines, intense missions, and memorable
                characters, providing players with a cinematic and immersive war
                narrative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
