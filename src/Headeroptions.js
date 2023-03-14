import React from "react";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Header.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
export default function Headeroptions({ Icon, title, avatar }) {
  const user = useSelector(selectUser);
  return (
    <div className="header__options">
      {Icon && <Icon size="1.5rem" />}
      {avatar && (
        <RxAvatar
          size="1.5rem"
          name={avatar}
          src={user.photoURL}
          onClick={(e) => firebase.auth().signOut()}
        />
      )}
      <span>{title}</span>
    </div>
  );
}
