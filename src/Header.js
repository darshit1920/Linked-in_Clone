import React from "react";
import "./Header.css";
import { FaSistrix } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import Headeroptions from "./Headeroptions";
import { BiMessageDetail } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
export default function Header() {
  const user = useSelector(selectUser);

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <img
            src="https://th.bing.com/th/id/R.f9ece8737ee991743d9cc930937dd150?rik=tzw%2b%2f58c6gzgjw&riu=http%3a%2f%2fjoshmccormack.com%2fwp-content%2fuploads%2fsites%2f3%2f2014%2f03%2ftransparent-Linkedin-logo-icon.png&ehk=Z6qq60L%2fXAGqZdU0uv1Z%2fG1p8Kebs0cgDnviXA1NOVs%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
        <div className="header__search">
          <FaSistrix />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <Headeroptions Icon={FaHome} title="Home" />
        <Headeroptions Icon={BsPeopleFill} title="My Network" />
        <Headeroptions Icon={MdBusinessCenter} title="Jobs" />
        <Headeroptions Icon={BiMessageDetail} title="Messaging" />
        <Headeroptions Icon={MdNotificationsActive} title="Notifications" />
        <Headeroptions avatar={RxAvatar} title={user.displayName} />
      </div>
    </div>
  );
}
