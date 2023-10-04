import React, { useState, useEffect } from "react";
// import LoadingComponent from '../Components/LoadingComponent/LoadingComponent';
import LoadingComponent from "../Components/LoadingComponent/LoadingComponent";
import "../Components/CSS/LoadingPage.css";
import GetTicketComponent from "../Components/LoadingComponent/GetTicketComponent";
import FailTicketComponent from "../Components/LoadingComponent/FailTicketComponent";
import { useCookies } from "react-cookie";
import { dbURL } from "../DB";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const LoadingPageHireling = () => {
  const { auth } = useAuth()


  // const [cookies] = useCookies(['user']);

  const [isLoading, setIsLoading] = useState(true);
  const [isApprove, setIsApprove] = useState(false);

  // const getUserDataFromCookie = () => {
  //   const userDataString = cookies['user'];
  //   console.log(userDataString)
  //   return userDataString ? JSON.parse(userDataString) : null;
  // };

  // const userData = getUserDataFromCookie();

  useEffect(() => {
//     hiring_buy : concerts/employbuy method Post
// {
//   buyer_id: UsersS
//   Concert_name: string
//   reciever_id: UsersS
//   TicketNum:number
// }
    const fetchHirelingBuyConcertTicket = async () => {
      try {
        const response = await axios.post(
          dbURL + "concerts/employbuy",
          JSON.stringify({ 
            buyer_id : auth.userId,
            Concert_name : "",
            reciever_id : "",
            TicketNum: 1
           }),
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        console.log(response)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setIsLoading(false);
  }, []);

  return (
    <div>
      <div className="LoadingPage">
        <LoadingComponent isLoading={isLoading} />
        {isLoading ? (
          <GetTicketComponent isLoading={!isApprove} />
        ) : (
          <FailTicketComponent isLoading={isApprove} />
        )}
      </div>
    </div>
  );
};

export default LoadingPageHireling;
