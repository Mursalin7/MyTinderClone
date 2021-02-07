import React from "react";
import "./Header.css";
import { Link ,useHistory } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backButton }) { 
  const history = useHistory();
  return (
    <div className="header">
      { backButton ? (
      <IconButton onClick={()=> history.replace(backButton)}>
        <ArrowBackIosIcon fontSize="large" className="header__arrowBack" />
      </IconButton>
      ) :(
      <IconButton>
        <PersonOutlineIcon className="header_icon" fontSize="large" />
      </IconButton>
      )}
      <Link to="/">
        <img
          className="header_logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-emblem.jpg"
          alt=""
        />
      </Link>
      <Link to="/chats">
        <IconButton>
          <ChatBubbleIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
