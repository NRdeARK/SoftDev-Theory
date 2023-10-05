import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "./ModalCSS/PayingModal.css";
import { dbURL } from "../../../DB";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { useState } from "react";

interface handleMoneyTransactionProps {
  iconClose: string;
  handleClick : () => void
}

export const PayingModal = (props : handleMoneyTransactionProps) => {
  const { auth } = useAuth()
  const [balance, setBalance] = useState(0)

  //handle when click on transaction money
  const handleMoneyTransaction = async () => { 
    const requestBody = {
      id: Number(auth.userId),
    };

    try {
      const response  =
        await axios.post(
          dbURL + "Ticketpay/getTicket",// <=== change later
          requestBody
        );

      // Handle the successful login response
      setBalance(response.data.TicketPay)

      // You can also perform actions such as setting the user's token in state or redirecting the user to another page
    } catch (error) {
      // Handle login errors
      console.error(error);
    }
  };

  const handleGetBalance = async () =>{
    const requestBody = {
      id: Number(auth.userId),
    };

    try {
      const response  =
        await axios.post(
          dbURL + "Ticketpay/getTicket",
          requestBody
        );

      // Handle the successful login response
      console.log(response.data.Ticketpay)
      setBalance(response.data.Ticketpay)

      // You can also perform actions such as setting the user's token in state or redirecting the user to another page
    } catch (error) {
      // Handle login errors
      console.error(error);
    }
  }
  useEffect(()=>{
    handleGetBalance()
  })

  return (
    <div className="paying-modal">
      <div className="overlap">
        <div className="frame">
          <img className="icon-close" alt="Icon close" src={props.iconClose} />
          <div className="div">
            <div className="frame-2">
              <div className="text-wrapper">ยอดเงินในบัญชี SafeTicket</div>
              <div className="text-wrapper-2">{balance} ₿</div>
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
