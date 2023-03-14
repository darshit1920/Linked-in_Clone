import React from "react";
import "./Sidebar.css";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export default function Sidebar() {
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img
          src="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
          alt="T"
        />
        <div className="profile__details">
          <RxAvatar size="4rem" src={user.photoURL} />
          <h4>{user.displayName}</h4>
          <p>Web</p>
        </div>
        <div className="profile__stats">
          <span>Who Viewed Your Profile</span>
          <span className="stat__number">20</span>
        </div>
        <div className="profile__stats">
          <span>
            Connection
            <br />
            <b>Grow Your Network</b>
          </span>
          <span className="stat__number">150</span>
        </div>
      </div>
      <div className="sidebar__recent">
        <p>Recent</p>
        <p className="hash">
          <span>#</span>Branding
        </p>
        <p className="hash">
          <span>#</span>Marketing
        </p>
        <p className="hash">
          <span>#</span>Webdev
        </p>
        <p className="hash">
          <span>#</span>Prog
        </p>
        <p className="hash">
          <span>#</span>Reactjs
        </p>
        <p className="hash">
          <span>#</span>Redux
        </p>
      </div>
    </div>
  );
}
