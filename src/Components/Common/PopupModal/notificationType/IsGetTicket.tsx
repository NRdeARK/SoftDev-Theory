import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

interface IsGetTicketProps {
  hireling : string
  concertName : string 
}

function IsGetTicket( props : IsGetTicketProps) {
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
  return isAppear ?(
    <div className="GotTicket" style={containerStyle}>
      <div
        style={{ marginRight: "auto", marginLeft: "20px", marginTop: "auto" }}
      >
        <Typography fontWeight={"bold"} fontSize={"24px"}>
          Notification
        </Typography>
        <Typography>
          {props.hireling} ได้กดบัตร {props.concertName} สำเร็จแล้วกรุณาเช็คที่ กระเป๋า
        </Typography>
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
            onClick={()=>{
              setIsAppear(false)
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
            รับทราบ
          </IconButton>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default IsGetTicket;
