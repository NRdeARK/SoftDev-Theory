import PropTypes from "prop-types";
import React from "react";
import "./ModalCSS/PayingModal.css";
import { dbURL } from "../../../DB";
import useAuth from "../../../hooks/useAuth";

interface handleMoneyTransactionProps {
  iconClose: string;
  handleClick : () => void
}

export const PayingModal = (props : handleMoneyTransactionProps) => {
  const { auth } = useAuth()

  //handle when click on transaction money
  const handleMoneyTransaction = async () => { 
    try {
      const data = {
        buyer_id: auth.userId,
        // Concert_name: string,
        // reciever_id: UsersS,
        TicketNum: 1,
      };
      const response = await fetch(dbURL + "concerts/employbuy", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="paying-modal">
      <div className="overlap">
        <div className="frame">
          <img className="icon-close" alt="Icon close" src={props.iconClose} />
          <div className="div">
            <div className="frame-2">
              <div className="text-wrapper">ยอดเงินในบัญชี SafeTicket</div>
              <div className="text-wrapper-2">250.00 ₿</div>
            </div>
            <hr className="line" />
            <div className="frame-3">
              <div className="subframe-4">
                <div className="text-wrapper-3">Ticket</div>
                <div className="text-wrapper-4">Ticket XXYYZZ</div>
                <div className="text-wrapper-4">ค่าจ้างกดบัตร</div>
                <div className="text-wrapper-4">รวม</div>
              </div>
              <div className="subframe-5">
                <div className="text-wrapper-5">Price</div>
                <div className="text-wrapper-6">10,000 ₿</div>
                <div className="text-wrapper-6">5,000 ₿</div>
                <div className="text-wrapper-7">15,000 ₿</div>
              </div>
            </div>
            <button className="button">
              <div className="text-wrapper-8" 
              onClick={()=>{
                handleMoneyTransaction()
                props.handleClick()
              }}>ถอนเงิน</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PayingModal.propTypes = {
  iconClose: PropTypes.string,
};
