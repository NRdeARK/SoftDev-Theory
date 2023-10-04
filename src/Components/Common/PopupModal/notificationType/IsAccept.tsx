import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { PayingModal } from "../PayingModal";

interface IsAcceptProps {
  hirelingUsername: string;
}

function IsAccept(props: IsAcceptProps) {
  const [isAccept, setIsAccept] = useState(false);
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

  const handleModalClick = () => {
    console.log("isClick")
    setIsAppear(false)
  }

  return isAppear ? (
    isAccept ? (
      <PayingModal iconClose="icon-close.png" handleClick={handleModalClick} />
    ) : (
      <div className="BuyerAccept" style={containerStyle}>
        <div
          style={{ marginRight: "auto", marginLeft: "20px", marginTop: "auto" }}
        >
          <Typography fontWeight={"bold"} fontSize={"24px"}>
            Notification
          </Typography>
          <Typography>
            {props.hirelingUsername} ได้ตอบรับแล้ว กรุณาชำระเงินค่ากดบัตร
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
              onClick={() => {
                setIsAccept(true);
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
              โอนเงิน
            </IconButton>
            <IconButton
              onClick={() => {
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
    )
  ) : (
    <></>
  );
}

export default IsAccept;
