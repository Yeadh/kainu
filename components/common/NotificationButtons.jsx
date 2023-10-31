/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Search } from "./Icons";
import { Massages } from "./Icons";
import { Notification } from "./Icons";
import { Coins } from "./Icons";
import MessageButton from "./MessageButton";
import ConnectWalletButton from "./ConnectWalletButton";
import UserBlock from "./UserBlock";
const NotificationButtons = () => {
  return (
    <button className="mr-4 w-12">
      <Notification />
    </button>
  );
};

export default NotificationButtons;
