import React, { useState } from "react";
import GetRequest from "./notificationType/GetRequest";
import IsAccept from "./notificationType/IsAccept";
import IsDecline from "./notificationType/IsDecline";
import IsGetMoney from "./notificationType/IsGetMoney";
import IsGetTicket from "./notificationType/IsGetTicket";
import IsNotGetTicket from "./notificationType/IsNotGetTicket";
import useAuth from "../../../hooks/useAuth";

const NotiList: React.FC = () => {
  const { auth } = useAuth();
  //    {/* User */}
  //   const [isAcceptNoti, setisAcceptNoti] = useState(true);//worker is accept
  //   const [isdeclineNoti, setisdeclineNoti] = useState(false);//woker is decline
  //   const [isGotticket, setisGotticket] = useState(false);//user is got ticker
  //   const [isGotticketFail, setisGotticketFail] = useState(false);//user fail to get ticket
  //    {/* Worker */}
  //   const [isGotRequest, setisGotRequest] = useState(true); //got request from user
  //   const [isGotMoney, setisGotMoney] = useState(false);//got money from user

  //   {/*Action accept*/}
  const [isPaying, setisPaying] = useState(false);

  return (
    <>
      <IsAccept hirelingUsername={"MR. FOX"} />
      <GetRequest
        hirer={auth.username}
        concertName={"testConcert"}
        concertDate={"testDate"}
        ticketPrice={0}
      />
      <IsDecline hirling={"testOther"} />
      <IsGetMoney hireling={"testOther"} />
      <IsGetTicket hireling={"testOther"} concertName={"testConcert"} />
      <IsNotGetTicket hireling={"testOther"} />
    </>
  );
};

export default NotiList;
