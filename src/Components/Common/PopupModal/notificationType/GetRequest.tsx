import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import axios from "axios";
import { dbURL } from "../../../../DB";
import useAuth from "../../../../hooks/useAuth";
// import { useCookies } from "react-cookie";

interface GetRequestProps {
  concertName: string;
  concertDate: string;
  hirer: string;
  ticketPrice: number;
}

function GetRequest(props: GetRequestProps) {
  const { auth } = useAuth()

  console.log(auth)

  const [isAppear, setIsAppear] = useState(true);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    width: "348px",
    height: "148px",
    padding: "15px 0px",
    flexDirection: "column",
    justifyContent: "space-between",
    flexShrink: 0,
    borderRadius: "10px",
    background: "#EDE7E3",
    margin: "auto",
    marginTop: "25px",
    marginBottom: "10px",
  };

  const handleAccept = async () => {
    try {
      //       accept : concerts/accept
      // {
      //     id: number
      //   buyer_id: UsersS
      //   Concert_name: string
      //   reciever_id: UsersS
      // }
      const response = await axios.post(
        dbURL + "concerts/accept",
        JSON.stringify({
          user_id: auth.userId,
          Ticketpay: props.ticketPrice,
        }),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error();
    }
  };

  const handleReject = async () => {
    try {
      //       inject : concerts/inject method Get <== i guess this is reject
      // {
      //   id: number
      //   buyer_id: UsersS
      //   Concert_name: string
      //   reciever_id: UsersS
      // }
      const response = await axios.post(
        dbURL + "Ticketpay/minus",
        JSON.stringify({
          user_id: auth.userId,
          Ticketpay: props.ticketPrice,
        }),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error();
    }
  };

  return isAppear ? (
    <div>
      <div className="RequestBuyer" style={containerStyle}>
        <div style={{ margin: "auto" }}>
          <Typography fontWeight={"bold"} fontSize={"24px"}>
            Notification
          </Typography>
          <Typography fontSize={"14px"}>
            รายละเอียด : บัตร {props.concertName} วันที่ {props.concertDate}
          </Typography>
          <Typography>{props.hirer} ได้ส่งทำขอมาหาคุณ</Typography>
        </div>
        <div
          id="block"
          style={{
            display: "colum",
            margin: "auto",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <IconButton
              onClick={() => {
                handleAccept();
                setIsAppear(false);
              }}
              style={{
                fontSize: "12px",
                backgroundColor: "#FFA62B",
                borderRadius: "5px",
                width: "135px",
                height: "24px",
                color: "white",
              }}
            >
              รับงาน
            </IconButton>
            <IconButton
              onClick={() => {
                handleReject();
                setIsAppear(false);
              }}
              style={{
                fontSize: "12px",
                backgroundColor: "#888",
                borderRadius: "5px",
                width: "135px",
                height: "24px",
                color: "white",
              }}
            >
              ปฏิเสธ
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default GetRequest;
