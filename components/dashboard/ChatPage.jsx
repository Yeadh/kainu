import React, { useRef, useEffect, useState } from "react";
import styles from "../../styles/dashboard/index.module.css";
import { ChatSlider } from "./ChatSlider";
import { ChatHeader } from "./ChatHeader";
import { ChatSender } from "./ChatSender";
import { ChatMessages } from "./ChatMessages";
export const ChatPage = () => {
  const ref = useRef(null);
  const [currentHeight, setcurrentHeight] = useState(false);
  const [mobiletouch, setmobiletouch] = useState(false);

  const handleResize = (e) => {
    let windowheight = window.innerHeight - 80;
    ref.current.style.height = `${windowheight}px`;
    setcurrentHeight(windowheight);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`flex-1 flex items-start ${styles.chatpage}`} ref={ref}>
      <div className={`${styles.chatsliderwrapper} px-4`}>
        <ChatSlider
          currentHeight={currentHeight}
          setmobiletouch={setmobiletouch}
        />
      </div>
      <div
        className={`flex-1 relative ${styles.chatcontentarea} ${
          mobiletouch && styles.activemobile
        }`}
      >
        <ChatHeader />
        <ChatMessages currentHeight={currentHeight} />
        <ChatSender />
      </div>
    </div>
  );
};
